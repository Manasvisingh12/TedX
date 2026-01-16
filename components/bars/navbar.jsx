"use client";
import React, { useState } from "react";
import { RiCloseLargeFill, RiMenuLine } from "@remixicon/react";
import { Button } from "../ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "https://www.ted.com/tedx/events/63850", label: "About Us" },
  { href: "/out-team", label: "Team" },
  { href: "/Partners", label: "Partners" },
  { href: "#", label: "Speakers" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <>
      <div className="fixed inset-x-0 top-4 z-[1000] flex justify-center px-4">
        <div className="w-full max-w-7xl flex justify-between items-center px-6 py-4 gradient md:rounded-3xl shadow-xl backdrop-blur-xs">
          {/* Logo */}
          <a
            href="/"
            className="cursor-pointer flex items-center font-bold text-xl text-white"
          >
            <span className="text-red-500">
              TED<span className="align-super text-xs">x</span>
            </span>
            <span className="ml-2 text-white font-semibold">BITJaipur</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-500 text-white/80 transition-all duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => (window.location.href = "/get-involved")}
              className="px-4 py-2 shadow-md border-4 border-[#eb0028] text-white rounded-xl flex items-center gap-2  cursor-pointer"
              type="button"
            >
              Get involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="sm:hidden text-white text-2xl cursor-pointer"
            onClick={handleMenuToggle}
          >
            {menuOpen ? <RiCloseLargeFill /> : <RiMenuLine />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-background text-white flex flex-col items-center justify-center space-y-8 z-40 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-red-500 transition duration-200"
            >
              {link.label}
            </a>
          ))}

          <Button onClick={() => (window.location.href = "/CallForSpeaker")}>
            {" "}
            Get involved{" "}
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
