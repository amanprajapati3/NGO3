"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X, Heart, ChevronRight } from "lucide-react";
import headerData from "@/data/data.json";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  // Handle sticky scroll background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu((prev) => (prev === label ? null : label));
  };

  const isLinkActive = (href: string, children?: { href: string }[]) => {
    if (href !== "#" && pathname === href) return true;
    if (children) {
      return children.some((child) => child.href === pathname);
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full">
      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? " bg-black/70 shadow-lg" : "bg-transparent "
        }`}
      >
        <div className=" mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* 1. Logo (Original Desktop Preserved) */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt={headerData.site.siteName}
              className="h-24 w-24 md:h-32 md:w-44 object-contain"
            />
          </Link>

          {/* 2. Desktop Right Side Content (Original Desktop Preserved Unchanged) */}
          <div className="hidden lg:flex -mt-8 items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-3 md:space-x-7">
              {headerData.menu.map((item, index) => {
                const active = isLinkActive(item.href, item.children);

                return (
                  <div key={index} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 text-sm font-mono transition-colors py-2 ${
                        active
                          ? "text-[#f9570c] font-semibold"
                          : "text-white hover:text-[#f9570c]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <div className="absolute top-full left-0 mt-0 w-48 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 py-0 z-50 border border-gray-100">
                        {item.children.map((sub, sIdx) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm hover:bg-orange-100 rounded-xl hover:text-[#f9570c] transition-colors ${
                                isSubActive
                                  ? "text-[#f9570c] font-semibold bg-orange-50"
                                  : "text-gray-700"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center space-x-3 mt-2 text-white">
              <div className="w-9 h-9 rounded-full border flex items-center justify-center font-bold text-white">
                <Phone className="w-4 h-4 " />
              </div>
              <div className="text-sm">
                <p className="text-white">Need Help?</p>
                <a
                  href={headerData.site.TopBar.phoneHref}
                  className="font-bold text-orange-500 hover:text-[#f9570c] transition-colors"
                >
                  {headerData.site.TopBar.phone}
                </a>
              </div>
            </div>

            <Link
              href={headerData.site.headerCta.href}
              className="inline-flex mt-2 items-center space-x-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>{headerData.site.headerCta.label}</span>
            </Link>
          </div>

          {/* 3. Mobile & Tablet Top Bar Controls (Enlarged Sizes) */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:hidden">
            <Link
              href={headerData.site.headerCta.href}
              className="inline-flex items-center space-x-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold shadow-md transition-all"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              <span>{headerData.site.headerCta.label}</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg text-white hover:text-[#f9570c] focus:outline-none bg-white/10 backdrop-blur-sm border border-white/20"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE & TABLET DRAWER MENU ================= */}
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Slide-in Drawer with Larger Mobile & Tab Content */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-4/5 sm:w-3/5 max-w-md bg-slate-950 text-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between border-r border-slate-800 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 overflow-y-auto">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-gray-800">
            <img
              src="/logo.png"
              alt={headerData.site.siteName}
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg bg-gray-900 border border-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile & Tab Navigation Links (Increased Size) */}
          <div className="mt-6 flex flex-col space-y-2">
            {headerData.menu.map((item, idx) => {
              const active = isLinkActive(item.href, item.children);

              if (item.children) {
                const isExpanded = expandedMobileMenu === item.label;
                return (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base sm:text-lg font-medium transition-colors ${
                        active
                          ? "text-[#f9570c] bg-gray-900"
                          : "text-gray-200 hover:bg-gray-900"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          isExpanded
                            ? "rotate-90 text-[#f9570c]"
                            : "text-gray-400"
                        }`}
                      />
                    </button>

                    {/* Submenu Expansion */}
                    {isExpanded && (
                      <div className="ml-4 pl-3 border-l-2 border-gray-800 flex flex-col space-y-1.5 my-2">
                        {item.children.map((sub, sIdx) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`px-4 py-2.5 rounded-lg text-sm sm:text-base transition-colors ${
                                isSubActive
                                  ? "text-[#f9570c] font-semibold bg-gray-900"
                                  : "text-gray-300 hover:text-white hover:bg-gray-900/50"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base sm:text-lg font-medium transition-colors ${
                    active
                      ? "text-[#f9570c] font-semibold bg-gray-900"
                      : "text-gray-200 hover:bg-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tab Contact Footer (Increased Size) */}
        <div className="p-6 border-t border-gray-800 bg-slate-900/60">
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#f9570c]" />
            </div>
            <div>
              <span className="text-gray-400 text-sm block font-medium">
                Need Help?
              </span>
              <a
                href={headerData.site.TopBar.phoneHref}
                className="font-bold text-base text-white hover:text-[#f9570c] transition-colors"
              >
                {headerData.site.TopBar.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}