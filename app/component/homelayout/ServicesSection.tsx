"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceProps } from "@/type/typeSection";
import { HandHeart } from "../shared/Icons"; // Path to your HandHeart component
import { FiActivity, FiArrowRight, FiBookOpen, FiHeart } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";

// Icon mapping helper function
const getServiceIcon = (iconName: string) => {
  switch (iconName?.toLowerCase()) {
    case "utensils":
    case "food":
      return <FaUtensils className="w-7 h-7 text-white" />;
    case "heart-pulse":
    case "healthcare":
      return <FiActivity className="w-7 h-7 text-white" />;
    case "graduation-cap":
    case "book-open":
    case "education":
      return <FiBookOpen className="w-7 h-7 text-white" />;
    default:
      return <FiHeart className="w-7 h-7 text-white" />;
  }
};

interface ServicesSectionProps extends ServiceProps {
  limit?: number;
}

export default function ServicesSection({ data, limit }: ServicesSectionProps) {
  const { introduction, services } = data;

  // Take only the top 3 services to match the reference UI layout
  const displayedServices = services.slice(0, limit);

  return (
    <section className="w-full bg-[#FAF7F2] pt-8 md:pt-12 px-2 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* =========================================================
            HEADER / INTRODUCTION SECTION
        ========================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Badge with decorative side lines */}
          <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
            <HandHeart className="w-8 h-8 text-emerald-600" />
            <span className="italic font-serif">{introduction.badge}</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2B20] tracking-tight mb-4">
            {introduction?.title?.normal}{" "}
            <span className="text-[#F15A24]">
              {introduction?.title?.highlighted}
            </span>
          </h2>

          {/* Section Subtitle / Description */}
          <p className="text-[#556052] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {introduction?.description}
          </p>
        </div>

        {/* =========================================================
            3-COLUMN SERVICES GRID
        ========================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {displayedServices.map((service, index) => {
            // Index 1 (center card) gets orange theme, others get dark green theme
            const isHighlight = index === 1;

            return (
              <div
                key={service.id || index}
                className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-[#EAE5D9]/60"
              >
                {/* IMAGE & OVERLAY BADGE CONTAINER */}
                <div className="relative w-full h-[230px] sm:h-[250px] bg-gray-100 flex-shrink-0">
                  <Image
                    src={
                      service.image?.src ||
                      "/NGO_Images/happy-diverse-kinds-park.jpg"
                    }
                    alt={service.image?.alt || service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />

                  {/* CIRCULAR ICON BADGE (OVERLAPPING BOTTOM CENTER) */}
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18 rounded-full border-[4px] border-white flex items-center justify-center z-10 shadow-md ${
                      isHighlight ? "bg-[#F15A24]" : "bg-[#24422D]"
                    }`}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="pt-12 pb-8 px-6 sm:px-8 text-center flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F2B20] mb-3">
                      <Link
                        href={service.href || "#"}
                        className="hover:text-[#F15A24] transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-[#556052] text-sm sm:text-base leading-relaxed max-w-xs mx-auto mb-3">
                      {service.description}
                    </p>

                    {/* WIDER HORIZONTAL DIVIDER */}
                    <center>
                      <div className="w-[100px] mx-auto h-[1px] bg-[#24422D] mb-3" />
                    </center>

                    {/* READ MORE BUTTON FROM JSON */}
                    <Link
                      href={service.href || "#"}
                      className="inline-flex items-center justify-center gap-2 text-[#24422D] hover:text-[#F15A24] font-bold text-sm sm:text-base tracking-wide transition-colors duration-300 group"
                    >
                      <span>{service.label || "Read More"}</span>
                      <FiArrowRight className="w-4 h-4 text-[#24422D] group-hover:text-[#F15A24] group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
