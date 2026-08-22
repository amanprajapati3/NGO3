"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiHeart,
  FiBookOpen,
  FiCheck,
  FiPhoneCall,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";
import { AboutPageProps } from "@/type/typeSection";
import { HandHeart } from "../shared/Icons";

interface AboutSectionProps {
  data: AboutPageProps["data"];
  showButton?: boolean;
}

export default function AboutSection({
  data,
  showButton = true,
}: AboutSectionProps) {
  return (
    <section className="relative w-full bg-[#FAF8F5] pt-8 md:pt-12 font-sans text-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* =========================================================
              LEFT SIDE - IMAGE COLLAGE (Matched to Content Height)
          ========================================================== */}
          <div className="lg:col-span-6 relative w-full min-h-[450px] lg:min-h-full flex justify-center lg:justify-start">
            <div className="relative w-full h-full max-w-[620px]">
              {/* TOP LEFT IMAGE */}
              <div className="absolute top-0 left-[2.5%] w-[46.5%] h-[31.5%] rounded-[18px] overflow-hidden border-[4px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] z-30">
                <Image
                  src={data.sideImages?.topLeft}
                  alt="Volunteers"
                  fill
                  sizes="(max-width: 1024px) 46vw, 240px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* LEFT VERTICAL DONATION BADGE */}
              <div className="absolute left-[2.5%] top-[31.5%] bottom-0 w-[16.5%] bg-[#0B2545] rounded-[18px] z-20 overflow-hidden shadow-[0_3px_12px_rgba(0,0,0,0.12)]">
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                  <HandHeart />
                </div>

                <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rotate-[-90deg] text-white font-semibold text-[13px] sm:text-[18px] tracking-wide">
                  {data.donationBadge}
                </div>
              </div>
              {/* MAIN CENTER IMAGE */}
              <div className="absolute top-[8.5%] left-[20%] w-[79%] h-[76%] rounded-[18px] overflow-hidden border-[4px] border-white shadow-[0_5px_18px_rgba(0,0,0,0.14)] z-20 bg-[#243B5A]">
                <Image
                  src={data.sideImages?.mainLeft}
                  alt="Children"
                  fill
                  sizes="(max-width: 1024px) 80vw, 410px"
                  className="object-cover grayscale"
                />

                <div className="absolute inset-0 bg-[#16385F]/25 pointer-events-none" />

                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[62px] h-[62px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#FF8A00] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.25)] z-20 transition-transform duration-300 hover:scale-110"
                >
                  <span className="absolute inset-[7px] rounded-full border-[1.5px] border-dashed border-[#0B2545]" />
                  <FiPlay className="relative z-10 text-[#0B2545] text-[23px] fill-[#0B2545] ml-1" />
                </button>
              </div>
              {/* BOTTOM RIGHT IMAGE */}
              <div className="absolute right-[0%] bottom-[0%] w-[46.5%] h-[30.5%] rounded-[18px] overflow-hidden border-[4px] border-white shadow-[0_5px_15px_rgba(0,0,0,0.14)] z-30">
                <Image
                  src={data.sideImages?.bottomRight}
                  alt="Impact story"
                  fill
                  sizes="(max-width: 1024px) 46vw, 240px"
                  className="object-cover"
                />
              </div>
              {/* ORANGE DECORATIVE LINE */}
              <div className="absolute left-[34%] bottom-[1.5%] sm:bottom-[2%] w-[27%] sm:w-[18%] h-[20%] sm:h-[22%] pointer-events-none z-10">
                {/* L-shaped curved border line */}
                <div className="w-full h-full border-l-[2px] border-b-[2px] border-[#FF8A00] rounded-bl-[16px] sm:rounded-bl-[20px]" />

                {/* Filled circle dot terminal point at the right end */}
                <div className="absolute -right-1 -bottom-[4px] sm:-bottom-[5px] w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF8A00] shadow-xs" />
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT SIDE - CONTENT
          ========================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Subtitle */}
              {data.pretitle && (
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
                  <HandHeart className="w-8 h-8 text-emerald-600" />
                  <span className="italic font-serif">{data.pretitle}</span>
                </div>
              )}

              {/* Heading */}
              {data.title && (
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B2545] leading-[1.2] tracking-tight mb-4">
                  {data.title.includes("World") ? (
                    <>
                      {data.title.split("World")[0]}
                      <span className="text-[#E0A053]">World</span>
                      {data.title.split("World")[1]}
                    </>
                  ) : (
                    data.title
                  )}
                </h2>
              )}

              {/* Description */}
              {data.desc && (
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  {data.desc}
                </p>
              )}

              {/* Features Section - Always 2 columns */}
              {data.features && data.features.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 items-center">
                  {data.features.map((feature: any, idx: number) => (
                    <div
                      key={feature.id || idx}
                      className={`flex flex-col sm:flex-row items-start gap-3 sm:gap-4 ${
                        idx === 1 ? "border-l border-gray-300 pl-3 sm:pl-6" : ""
                      }`}
                    >
                      <div
                        className={`w-12 h-12 sm:w-[68px] sm:h-[68px] rounded-full flex items-center justify-center flex-shrink-0 ${
                          idx === 0 ? "bg-[#FFE0C2]" : "bg-[#DDE7F0]"
                        }`}
                      >
                        {idx === 0 ? (
                          <FiHeart className="w-5 h-5 sm:w-8 sm:h-8 text-[#0B2545]" />
                        ) : (
                          <FiBookOpen className="w-5 h-5 sm:w-8 sm:h-8 text-[#0B2545]" />
                        )}
                      </div>

                      <div>
                        <h3 className="font-bold text-[#0B2545] text-sm sm:text-base mb-0.5 sm:mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Checklist */}
              {data.checklist && data.checklist.length > 0 && (
                <div className="space-y-3 mb-8">
                  {data.checklist.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center flex-shrink-0 text-sm">
                        <FiCheck className="stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-sm text-[#0B2545] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Action Buttons - Centered & Compact on Mobile */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-3 sm:gap-4 pt-4 w-full px-1 sm:px-0">
              {showButton && data.button && (
                <Link
                  href={data.button.href || "/about-us"}
                  className="inline-flex items-center justify-between gap-2 sm:gap-4 bg-[#FF8A00] hover:bg-[#e07900] text-white font-semibold pl-3 sm:pl-6 pr-1.5 sm:pr-2 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-xs sm:text-base shrink-0"
                >
                  <span>{data.button.label}</span>
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                    <FiArrowRight className="text-xs sm:text-base text-[#FF8A00]" />
                  </span>
                </Link>
              )}

              {data.phone && (
                <a
                  href={`tel:${data.phone}`}
                  className="inline-flex items-center gap-2 sm:gap-3 bg-[#DDE7F5] hover:bg-[#cfdcf0] text-[#0B2545] px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm transition-all duration-300 shrink-0"
                >
                  <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#0B2545] flex items-center justify-center text-white shrink-0">
                    <FiPhoneCall className="text-xs sm:text-base" />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-[9px] sm:text-[11px] text-gray-600 font-medium leading-tight">
                      Phone
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0B2545] tracking-wide">
                      {data.phone}
                    </span>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
