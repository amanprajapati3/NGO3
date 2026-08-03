"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/app/component/shared/Banner";
import { EventsProps } from "@/type/typeSection";
import {
  Calendar,
  MapPin,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { HandHeart } from "../../shared/Icons";

export default function Event({ data }: EventsProps) {
  const { banner, pretitle, title, items, pagination } = data;

  const itemsPerPage = pagination?.itemperpage || 6;
  const [currentPage, setCurrentPage] = useState(pagination?.currentPage || 1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner
        title={banner.title}
        breadcrumbHome={banner.breadcrumbHome}
        breadcrumbCurrent={banner.breadcrumbCurrent}
        image={banner.bgImageUrl}
      />

      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center  mx-auto mb-12 md:mb-16">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
              <HandHeart className="w-8 h-8 text-emerald-600" />
              <span className="italic font-serif">{pretitle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08121e]">
              {title.split(" Event ")[0]}{" "}
              <span className="text-[#ff5500]">Event</span>{" "}
              {title.split(" Event ")[1] || "List"}
            </h2>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden shadow-lg group h-[400px] flex flex-col justify-end"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Dark Overlay & Text Content */}
                <div className="relative z-10 bg-gradient-to-t from-[#08121e] via-[#08121e]/90 to-transparent p-6 pt-20 flex flex-col justify-end w-full">
                  {/* Date Badge (Above Title) */}
                  <div className="mb-2.5">
                    <span className="bg-[#ff5500] text-white text-sm sm:text-sm font-extrabold px-3.5 py-1.5 rounded-md shadow-md inline-flex items-center gap-2 uppercase tracking-wide">
                      <Calendar className="w-4 h-4 text-white" />
                      {item.date}
                    </span>
                  </div>

                  {/* Title (Highlighted & Larger Font) */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#ff5500] transition-colors duration-200 line-clamp-2 mb-3 leading-snug drop-shadow-sm">
                    <Link href={item.slug}>{item.title}</Link>
                  </h3>

                  {/* Location (Highlighted & Larger Font) */}
                  <div className="flex items-center gap-2 text-sm sm:text-sm font-bold text-gray-200">
                    <MapPin className="w-4 h-4 text-[#ff5500] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 md:mt-16">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full cursor-pointer border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#ff5500] hover:text-[#ff5500] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                      currentPage === page
                        ? "bg-[#ff5500] text-white shadow-md scale-105"
                        : "border border-gray-200 cursor-pointer text-gray-700 hover:border-[#ff5500] hover:text-[#ff5500]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full cursor-pointer border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#ff5500] hover:text-[#ff5500] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
