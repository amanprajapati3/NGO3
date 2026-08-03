"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BannerProps {
  title: string;
  breadcrumbHome?: string;
  breadcrumbCurrent: string;
  image: string;
}

export default function Banner({
  title,
  breadcrumbHome = "Home",
  breadcrumbCurrent,
  image,
}: BannerProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[420px] md:min-h-[380px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end justify-center md:justify-start">
        {/* Adjusted bottom padding (pb-14 sm:pb-16) to lift content slightly on mobile & tab */}
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 pb-32 sm:pb-16 md:pb-14 lg:pb-16 xl:pb-20">
          
          {/* Vertical Stack: Centered on Mobile/Tab, Left-aligned on Desktop */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full">
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-orange-500">
              {title}
            </h1>

            {/* Breadcrumb Navigation */}
            <div className="mt-4 sm:mt-5 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
              <Link
                href="/"
                className="text-white/80 font-bold hover:text-orange-500 transition-colors"
              >
                {breadcrumbHome}
              </Link>

              <ChevronRight className="w-4 h-4 text-orange-500 shrink-0" />

              <span className="text-orange-500 font-bold">
                {breadcrumbCurrent}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}