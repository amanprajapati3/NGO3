"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, HandHeart } from "lucide-react";
import { LegalPageData } from "@/type/typeSection";
import Banner from "../../shared/Banner";

interface LegalLayoutProps {
  data: LegalPageData;
}

export default function LegalLayout({ data }: LegalLayoutProps) {
  if (!data) return null;

  const { banner, sections, ctaBanner } = data;

  return (
    <div className="w-full bg-[#fcfcfc] text-slate-800 font-sans antialiased min-h-screen">
      {/* 1. Hero Page Banner */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* 2. Main Content Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="space-y-10">
          
          {/* Sections List */}
          {sections && sections.length > 0 && (
            <div className="space-y-8">
              {sections.map((section, index) => {
                // Determine badge number
                const sectionNumber =
                  section.number || (index + 1).toString().padStart(2, "0");

                // Clean title by stripping any existing prefix numbers like "1. " or "01. "
                const cleanTitle = section.title.replace(/^\d+[\.\s-]+\s*/, "");

                return (
                  <div key={index} className="group">
                    {/* Tighter flex layout reduces distance between badge and text */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      
                      {/* Left Badge: The ONLY place displaying the number */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f0f9f4] text-[#005d3b] flex items-center justify-center font-extrabold text-lg sm:text-xl tracking-tight shrink-0">
                        {sectionNumber}
                      </div>

                      {/* decorative vertical line */}
                      <div className="bg-emerald-800 hidden sm:block w-0.5 h-14 mt-1 opacity-35">

                      </div>

                      {/* Right Section Content */}
                      <div className="space-y-2.5 flex-1 pt-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                          {cleanTitle}
                        </h3>

                        {section.text && (
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                            {section.text}
                          </p>
                        )}

                        {/* Sub-items list */}
                        {section.items && section.items.length > 0 && (
                          <ul className="pt-1.5 space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#005d3b] shrink-0 mt-1" />
                                <span className="text-sm sm:text-sm font-medium text-slate-600 leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Dotted Separator */}
                    {index < sections.length - 1 && (
                      <div className="border-b border-dashed border-slate-200 my-8 sm:my-10" />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* 3. Bottom CTA Banner */}
          {ctaBanner && (
            <div className="bg-[#f2f8f5] border border-[#e3f0e9] rounded-2xl p-5 sm:p-7 md:px-9 md:py-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
              
              {/* Left Group: Icon, Vertical Dotted Divider, and Text */}
              <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
                {/* Circular Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#005d3b] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <HandHeart className="w-8 h-8 md:w-9 md:h-9 stroke-[1.5]" />
                </div>

                {/* Vertical Dotted Line */}
                <div className="hidden sm:block h-10 border-r-2 border-dashed border-[#005d3b]/30 shrink-0" />

                {/* Text Content */}
                <div className="space-y-0.5">
                  <h4 className="text-base sm:text-lg font-bold text-[#005d3b] leading-tight">
                    {ctaBanner.title}
                  </h4>
                  <p className="text-sm sm:text-sm text-slate-600 font-medium">
                    {ctaBanner.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Group: Action Button */}
              <Link
                href={ctaBanner.buttonHref || "/"}
                className="inline-flex items-center justify-center gap-3 bg-[#005d3b] hover:bg-[#00482e] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shrink-0 w-full md:w-auto shadow-xs"
              >
                <span>{ctaBanner.buttonText}</span>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ChevronRight className="w-3.5 h-3.5 text-[#005d3b] font-bold" />
                </div>
              </Link>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}