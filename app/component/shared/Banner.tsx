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
    <section className="relative w-full h-[70vh] md:h-[70vh] lg:h-[70vh] min-h-[420px] md:min-h-[380px] overflow-hidden">
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
      <div className="relative z-10 h-full flex items-center justify-center md:items-end md:justify-start">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 pb-10 md:pb-14 lg:pb-16 xl:pb-20 text-center md:text-left">
          {/* Vertical Stack Wrapper */}
          <div className="flex flex-col items-start justify-center text-left w-full">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-orange-500 text-left -ml-0.5 sm:-ml-1">
              {title}
            </h1>

            {/* Breadcrumb */}
            <div className="mt-5 flex items-center justify-start gap-2 text-sm sm:text-base text-left">
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
