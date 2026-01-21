/*import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
console.log(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY); // Set your API key in environment variables

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, enquiry } = data;

    console.log(email);

    // Create Enquiry in the database
    const newEnquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        message: enquiry,
      },
    });

    try {
      console.log("email", email);
      const emailResult = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["inbox.tedxbitjaipur@gmail.com"],
        subject: `New Contact Us Enquiry from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Enquiry:</strong> ${enquiry}</p>
          
        `,
      });
      console.log(emailResult);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
    }

    return new Response(
      JSON.stringify({ success: true, enquiry: newEnquiry }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error.message);
    return new Response(
      JSON.stringify({ error: "Failed to process request." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
//test 1
export { POST as default };/*
