import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(request) {
  try {
    // 1. Initialize Resend inside the handler to avoid Build-time errors
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await request.json();
    const { name, email, enquiry } = data;

    // 2. Create Enquiry in the database
    const newEnquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        message: enquiry,
      },
    });

    // 3. Send Email
    try {
      // Note: "onboarding@resend.dev" only works for sending to your own 
      // registered email during testing.
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["inbox.tedxbitjaipur@gmail.com"],
        subject: `New Contact Us Enquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.5;">
            <h2>New Enquiry Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Enquiry:</strong> ${enquiry}</p>
          </div>
        `,
      });

      if (emailError) {
        console.error("Resend Error:", emailError);
      } else {
        console.log("Email sent successfully:", emailData.id);
      }
    } catch (err) {
      // We don't crash the whole request if the email fails 
      // because the DB record was already created successfully.
      console.error("Failed to send email:", err);
    }

    return new Response(
      JSON.stringify({ success: true, enquiry: newEnquiry }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Request Error:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to process request." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
