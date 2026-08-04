"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import footerData from "@/data/data.json";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  const data = footerData.Footer;

  // Helper function to render matching social icons from JSON labels
  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "facebook":
        return <FaFacebookF className="w-4 h-4" />;
      case "twitter":
        return <IoLogoTwitter className="w-4 h-4" />;
      case "youtube":
        return <IoLogoYoutube className="w-4 h-4" />;
      case "instagram":
        return <FaSquareInstagram className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const primaryContact = data.footerContact[0];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP NEWSLETTER & CONTACT BAR ================= */}
        <div className="flex  flex-col sm:flex-row justify-between  border-gray-800 pb-8 border-b-white/30 border-b-[1px] gap-8">
          {/* Newsletter Section */}
          <div className="w-full  lg:w-1/2 flex flex-col md:flex-row  gap-4 sm:gap-6">
            <h3 className="text-xl sm:text-2xl font-bold whitespace-nowrap text-white">
              {data.newsletterTitle}
            </h3>
            <div className="flex w-fit bg-[#2a2a2a] rounded-full p-1 h-fit border border-gray-700 focus-within:border-orange-500 transition">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent flex-1 px-4 py-2 outline-none text-sm text-gray-300 placeholder-gray-500"
              />
              <button className="bg-[#f9570c] cursor-pointer px-2 md:px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:bg-[#e04a05] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Top Quick Contact Info */}
          {primaryContact && (
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-4 lg:gap-8 w-full lg:w-auto">
              {/* Phone */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="shrink-0 bg-[#2a2a2a] p-3 rounded-full border border-gray-700">
                  <Phone className="w-5 h-5 text-[#f9570c]" />
                </div>

                <div className="min-w-0 text-sm">
                  <p className="text-gray-400">Phone</p>

                  <a
                    href={primaryContact.phoneHref}
                    className="block font-bold text-white hover:text-[#f9570c] transition-colors truncate"
                  >
                    {primaryContact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 w-full lg:w-auto min-w-0">
                <div className="shrink-0 bg-[#2a2a2a] p-3 rounded-full border border-gray-700">
                  <Mail className="w-5 h-5 text-[#f9570c]" />
                </div>

                <div className="min-w-0 lg:max-w-[240px] text-sm">
                  <p className="text-gray-400">Email Us</p>

                  <a
                    href={`mailto:${primaryContact.email}`}
                    className="block font-bold text-white hover:text-[#f9570c] transition-colors truncate"
                  >
                    {primaryContact.email}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================= MAIN FOOTER CONTENT ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 my-7">
          {/* Column 1: Brand Logo, Description & Social Icons */}
          <div className="space-y-4 sm:space-y-6">
            <img
              src={data.logoImage}
              alt="Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">{data.desc}</p>
            <div className="flex gap-3 pt-2">
              {data.socialsLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a] p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-[#f9570c] border border-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  {getSocialIcon(social.label)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="flex items-center space-x-1">
              <span className="h-0.5 w-8 bg-[#f9570c] rounded-full"></span>
              <span className="h-0.5 w-2 bg-[#f9570c] rounded-full"></span>
            </div>
            <ul className="space-y-2.5 text-sm text-gray-400 pt-2">
              {data.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#f9570c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch (Location & Contact Information) */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold text-white">Get In Touch</h4>
            <div className="flex items-center space-x-1">
              <span className="h-0.5 w-8 bg-[#f9570c] rounded-full"></span>
              <span className="h-0.5 w-2 bg-[#f9570c] rounded-full"></span>
            </div>
            <div className="space-y-6 pt-2">
              {data.footerContact.map((contact, idx) => (
                <div key={idx} className="space-y-2 text-sm text-gray-400">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#f9570c] shrink-0 mt-1" />
                    <span>{contact.location}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#f9570c] shrink-0" />
                    <a
                      href={contact.phoneHref}
                      className="hover:text-[#f9570c] transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#f9570c] shrink-0" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-[#f9570c] transition-colors"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        {/* ================= BOTTOM BAR ================= */}
        <div className="relative pt-6 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pr-0 md:pr-20">
            {/* Copyright */}
            <p className="text-center md:text-left">{data.copyright}</p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {data.legalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:text-[#f9570c] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= FLOATING SCROLL TOP ================= */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Scroll to top"
            className="absolute right-0 -top-7 z-30 w-14 h-14  rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 group"
          >
            {/* Inner concentric circle */}
            <span className="absolute inset-[5px] rounded-full border border-blue-600 group-hover:border-white transition-colors duration-300 flex items-center justify-center">
              <ArrowUp
                className=" w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
