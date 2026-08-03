"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HandHeart } from "../shared/Icons";
import { TestimonialProps } from "@/type/typeSection";

export default function TestimonialSection({ data }: TestimonialProps) {
  const { pretitle, title, description, testimonialItems = [] } = data;

  // Limit total items to max 9 cards as required
  const visibleItems = testimonialItems.slice(0, 9);
  const totalItems = visibleItems.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update cards visible per page based on window width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const activePage = Math.floor(currentIndex / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handlePageClick = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  return (
    <section className="w-full pt-8 md:pt-12 px-4 sm:px-6 lg:px-8 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* =========================================================
            HEADER SECTION
        ========================================================== */}
        <div className="flex flex-col items-center text-center mb-8">
          {/* Pretitle with HandHeart Icon */}
          <div className="flex items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
            <HandHeart className="w-8 h-8 text-emerald-600" />
            <span className="italic font-serif">{pretitle}</span>
          </div>

          {/* Main Title with Colored Highlight */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl ">
            {title}
          </h2>

          {/* Decorative Heart / Line Separator */}
          {/* <div className="flex items-center justify-center gap-2 my-4 w-full">
            <span className="h-[1px] w-12 bg-amber-400"></span>
            <div className="text-emerald-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 stroke-2"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span className="h-[1px] w-12 bg-amber-400"></span>
          </div> */}

          {/* Subtitle / Description */}
          {description && (
            <p className="text-gray-600 mt-2 text-base sm:text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* =========================================================
            CAROUSEL SECTION WITH SIDE BUTTONS
        ========================================================== */}
        <div className="relative px-2 sm:px-10 lg:px-12">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md text-emerald-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all duration-300 focus:outline-none"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {visibleItems.map((item, index) => {
                const isFeatured = index % 3 === 0;

                return (
                  <div
                    key={item.id || index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-3 sm:p-4 box-border"
                  >
                    <div
                      className={`relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-lg border transition-all duration-300 ${
                        isFeatured
                          ? "border-amber-400 shadow-amber-100"
                          : "border-gray-100"
                      }`}
                    >
                      {/* Top Quote Icon Badge */}
                      <div className="absolute -top-4 left-6 z-10">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md ${
                            isFeatured ? "bg-amber-500" : "bg-emerald-800"
                          }`}
                        >
                          <FaQuoteLeft className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="pt-4">
                        {/* 5-Star Rating */}
                        <div className="flex items-center gap-1 mb-4 justify-center">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <FaStar key={i} className="text-amber-400 w-4 h-4" />
                          ))}
                        </div>

                        {/* Quote Text */}
                        <p className="text-gray-600 text-sm sm:text-sm text-center leading-relaxed mb-6 italic">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-400">
                          <Image
                            src={item.image || "/NGO_Images/girl-is-reading-book-with-word-one-it.jpg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-slate-900 text-base">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">{item.role}</p>
                        </div>
                      </div>

                      {/* Bottom Accent Border Bar */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-2 rounded-b-2xl ${
                          isFeatured ? "bg-amber-500" : "bg-emerald-800"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md text-emerald-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all duration-300 focus:outline-none"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* =========================================================
            PAGINATION BULLETS (Hidden on mobile, adjusted for tablet & desktop)
        ========================================================== */}
        <div className="hidden sm:flex items-center justify-center gap-2 mt-2">
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <button
              key={pageIdx}
              onClick={() => handlePageClick(pageIdx)}
              aria-label={`Go to page ${pageIdx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activePage === pageIdx
                  ? "w-4 h-4 bg-amber-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}