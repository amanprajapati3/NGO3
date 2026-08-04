"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { PartnersDataprops } from "@/type/typeSection";
import Banner from "../../shared/Banner";
import { HandHeart } from "../../shared/Icons";

export default function Partner({ data }: PartnersDataprops) {
  if (!data) return null;

  const {
    banner,
    sectionBadge,
    sectionTitle,
    sectionpretitle,
    partners,
  } = data;

  return (
    <div className="w-full bg-[#fcfcfc] text-slate-800 font-sans antialiased min-h-screen">
      {/* 1. Page Hero Banner */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* 2. Main Content Area */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 ">
          {sectionBadge && (
          <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg">
            <HandHeart className="w-8 h-8 text-emerald-600" />
            <span className="italic font-serif">{sectionBadge}</span>
          </div>
          )}

          {sectionTitle && (
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-0 tracking-tight">
              {sectionTitle}
            </h2>
          )}


          {sectionpretitle && (
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto pt-2 leading-relaxed">
              {sectionpretitle}
            </p>
          )}
        </div>

        {/* 3. Partner Cards Grid Layout */}
        {partners && partners.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group bg-white rounded-2xl border border-slate-100 p-6 md:p-8 flex flex-col items-center justify-center shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer min-h-[160px]"
              >
                {/* Logo Wrapper */}
                <div className="relative w-full h-32 flex items-center justify-center mb-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="100%"
                    className="object-center   transition-all duration-300"
                  />
                </div>

                {/* Partner Name Label */}
                <span className="text-md md:text-md font-bold text-slate-600 group-hover:text-slate-900 transition-colors text-center ">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}