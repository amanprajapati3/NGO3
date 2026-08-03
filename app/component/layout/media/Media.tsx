"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/app/component/shared/Banner";
import { MediaProps } from "@/type/typeSection";
import { HandHeart } from "../../shared/Icons";

export default function Media({ data }: MediaProps) {
  const { banner, content } = data;

  return (
    <>
      {/* Banner */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* Media Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="space-y-0 mb-7">
            <div className="flex items-center  justify-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
              <HandHeart className="w-8 h-8 text-emerald-600" />
              <span className="italic font-serif">{content?.tagline}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight ">
              {content?.sectionTitle || "As Seen In The News"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-medium pt-1">
              {content?.sectionDescription ||
                "Our work and initiatives have been recognized and featured by leading media houses and news platforms."}
            </p>
            <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mt-4" />
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {content?.mediaCards?.map((card, index) => (
              <Link
                key={index}
                href={card.articleUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-200/80 p-2 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24 sm:h-28 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={card.logoUrl}
                    alt={card.title}
                    fill
                    className="object-contain filter  transition-all duration-300 "
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Caption */}
          <p className="text-gray-600 text-sm font-semibold mt-10">
            {content?.bottomCaption || "And many more leading news publications..."}
          </p>
        </div>
      </section>
    </>
  );
}