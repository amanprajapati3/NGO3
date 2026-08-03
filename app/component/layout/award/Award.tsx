"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/app/component/shared/Banner";
import { AwardProps } from "@/type/typeSection";
import {
  Trophy,
  Award as CertificateIcon,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function Award({ data }: AwardProps) {
  const {
    banner,
    heading,
    awardsList = [],
    certificatesHeading,
    certificatesList = [],
    stats = [],
    bannerCTA,
  } = data;

  const [certIndex, setCertIndex] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(4);
      else if (window.innerWidth >= 768) setItemsPerPage(3);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handlePrevCert = () => {
    setCertIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextCert = () => {
    setCertIndex((prev) =>
      Math.min(certificatesList.length - itemsPerPage, prev + 1),
    );
  };

  const renderStatIcon = (type: string) => {
    switch (type) {
      case "trophy":
        return <Trophy className="w-8 h-8 text-[#047857]" />;
      case "certificate":
        return <CertificateIcon className="w-8 h-8 text-[#047857]" />;
      case "calendar":
        return <Calendar className="w-8 h-8 text-[#047857]" />;
      case "users":
        return <Users className="w-8 h-8 text-[#047857]" />;
      default:
        return <Trophy className="w-8 h-8 text-[#047857]" />;
    }
  };

  return (
    <>
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50 font-sans">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* SECTION 1: OUR AWARDS GRID */}
          <div>
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                {heading?.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
                {heading?.subtitle}
              </p>
              <div className="w-16 h-1 bg-[#047857] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awardsList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-stretch gap-4"
                >
                  {/* Fixed container and object-cover vertically fills the entire frame without top/bottom empty whitespace */}
                  <div className="relative w-32 h-44 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-gray-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
                    <div>
                      <h3 className="text-base font-extrabold text-[#047857] leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-700 mt-2 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xs font-black text-[#047857] tracking-wide uppercase">
                      {item.issuedBy}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: OUR CERTIFICATES SLIDER */}
          <div>
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
                {certificatesHeading?.title || "Our Certificates"}
              </h2>
              <div className="w-12 h-1 bg-[#047857] mx-auto mt-2 rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
              {/* Previous Button */}
              <button
                onClick={handlePrevCert}
                disabled={certIndex === 0}
                className="absolute -left-2 sm:-left-3 cursor-pointer top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 hover:text-[#047857] hover:border-[#047857] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Viewport Container */}
              <div className="w-full overflow-hidden py-2 rounded-xl">
                <div
                  className="flex gap-3 transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(-${certIndex} * (100% / ${itemsPerPage} + ${
                      12 / itemsPerPage
                    }px)))`,
                  }}
                >
                  {certificatesList.map((cert) => (
                    <div
                      key={cert.id}
                      className="w-full sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] lg:w-[calc(25%-9px)] flex-shrink-0 bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                    >
                      <div className="relative w-full h-36 bg-slate-50 rounded-lg border border-gray-100 mb-2.5 overflow-hidden">
                        <Image
                          src={cert.imageUrl}
                          alt={cert.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <h4 className="text-xs sm:text-sm font-extrabold text-[#0a192f]">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-bold text-[#047857] mt-0.5">
                        {cert.issuedBy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextCert}
                disabled={certIndex >= certificatesList.length - itemsPerPage}
                className="absolute -right-2 sm:-right-3 cursor-pointer top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 hover:text-[#047857] hover:border-[#047857] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* SECTION 3: STATS STRIP */}
          {stats.length > 0 && (
            <div className="bg-[#e6f4ed] rounded-2xl p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8  border border-emerald-200 shadow-sm">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col md:flex-row gap-2 space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-200/80 flex items-center justify-center shadow-inner">
                    {renderStatIcon(stat.type)}
                  </div>
                  <div className="text">
                    <span className="text-3xl sm:text-4xl font-black text-[#0a192f]">
                      {stat.value}
                    </span>
                    <h5 className="text-sm font-extrabold text-[#0a192f] mt-1">
                      {stat.label}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SECTION 4: CALL TO ACTION BANNER */}
          {bannerCTA && (
            <div className="bg-[#e6f4ed] rounded-2xl p-8 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 md:w-20 md:h-20 h-14 rounded-full bg-emerald-200/80 flex-shrink-0 flex items-center justify-center">
                  <img src="/handheart.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0a192f]">
                    {bannerCTA.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-gray-700 max-w-xl leading-relaxed">
                    {bannerCTA.description}
                  </p>
                </div>
              </div>

              <Link
                href={bannerCTA.buttonUrl}
                className="whitespace-nowrap bg-[#047857] hover:bg-[#035e44] text-white text-sm font-extrabold px-6 py-3.5 rounded-lg flex items-center gap-2.5 transition-colors shadow-md shrink-0 uppercase tracking-wide"
              >
                <span>{bannerCTA.buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
