"use client";

import React, { useState } from "react";
import Image from "next/image";
import Banner from "@/app/component/shared/Banner";
import { TestimonialData } from "@/type/typeSection";
import { ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { HandHeart } from "../../shared/Icons";

interface TestimonialProps {
  data: TestimonialData;
}

export default function Testimonial({ data }: TestimonialProps) {
  const { subtitle, title, description, banner, testimonialItems } = data;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(testimonialItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = testimonialItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Banner
        title={banner.breadcrumbCurrent}
        breadcrumbHome={banner.breadcrumbHome}
        breadcrumbCurrent={banner.breadcrumbCurrent}
        image={banner.bgImageUrl}
      />

      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
               <div className="flex items-center justify-center  gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
                 <HandHeart className="w-8 h-8 text-emerald-600" />
                 <span className="italic font-serif">{subtitle}</span>
               </div>
  

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08121e] mb-2">
              {banner.breadcrumbCurrent}
            </h2>

            <p className="text-sm sm:text-sm text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Avatar, Name, Role, Rating */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#08121e]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5 text-[#ff5500]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#fff2ea] flex items-center justify-center shrink-0 mt-0.5">
                      <FaQuoteLeft className="w-3 h-3 text-[#ff5500]" />
                    </div>
                    <p className="text-sm sm:text-sm text-gray-600 leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Component */}
          <div className="flex items-center justify-center gap-2 mt-14">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-md cursor-pointer bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-md cursor-pointer text-sm font-bold transition-colors ${
                    isActive
                      ? "bg-[#ff5500] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-md cursor-pointer bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}