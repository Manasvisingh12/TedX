"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center px-4 py-10 md:py-16">
      
      {/* Title Sponsor Section */}
      <div className="mb-20 w-full max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-10 text-[#EB0028] text-center">
          Title Sponsor
        </h2>

        {/* ================= DESKTOP ONLY ================= */}
        <a
          href="https://sunvillage.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block group relative"
        >
          <div className="relative min-h-[220px]">

            {/* Logo */}
            <div
              className="
                absolute left-1/2 top-1/2 
                -translate-x-1/2 -translate-y-1/2
                transition-transform duration-500
                group-hover:-translate-x-[220%]
              "
            >
              <Image
                src="/sunvillage-logo.png"
                alt="Sun Village - Title Sponsor"
                width={280}
                height={140}
                priority
                className="object-contain"
              />
            </div>

            {/* Description */}
            <div
              className="
                absolute right-0 top-1/2 -translate-y-1/2
                max-w-xl text-base text-muted-foreground
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                px-4
              "
            >
              <p>
                <strong className="text-foreground">Sun Village</strong> is a
                community-focused sustainable food brand committed to
                transparency, traceability, and ecological harmony.
              </p>
              <p className="mt-3">
                Rooted in regenerative farming and farm-to-table principles,
                Sun Village eliminates middlemen to deliver camel milk powder,
                goat milk powder, camel ghee, and wholesome smoothies.
              </p>
              <p className="mt-3">
                As a proud member of{" "}
                <strong className="text-foreground">1% for the Planet</strong>,
                it actively supports environmental protection while crafting
                mindful, naturally sourced products.
              </p>
            </div>
          </div>
        </a>

        {/* ================= MOBILE ONLY ================= */}
        <a
          href="https://sunvillage.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex flex-col items-center text-center gap-6 max-w-md mx-auto"
        >
          <Image
            src="/sunvillage-logo.png"
            alt="Sun Village - Title Sponsor"
            width={220}
            height={110}
            priority
            className="object-contain"
          />

          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Sun Village</strong> is a
            sustainable, community-driven food brand focused on transparency,
            traceability, and regenerative farming.
          </p>

          <p className="text-sm text-muted-foreground">
            Delivering ethical, farm-fresh products directly to consumers while
            supporting the planet through{" "}
            <strong className="text-foreground">1% for the Planet</strong>.
          </p>
        </a>
      </div>

      {/* CTA Button */}
      <Link
        href="mailto:partnerships@tedxbitjaipur.com?cc=daksh@tedxbitjaipur.com&subject=Partnership%20Inquiry%20%E2%80%93%20TEDxBITJaipur%202026"
        className="w-full flex justify-center"
      >
        <Button
          size="xl"
          className="bg-[#EB0028] hover:bg-red-700 font-extrabold h-12 md:h-10 lg:h-12 text-lg md:text-xl lg:text12xl transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-2xl px-6 md:px-10 rounded-full text-white w-full sm:w-auto"
        >
          Request Partnership Brochure
        </Button>
      </Link>
    </div>
  );
};

export default page;
