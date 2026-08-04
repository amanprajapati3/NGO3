"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { CaseStudyProps } from "@/type/typeSection";
import Banner from "../../shared/Banner";
import { HandHeart } from "../../shared/Icons";

export default function CaseStudy({ data }: CaseStudyProps) {
  const { banner, causes } = data;

  // Render icons matching the distinct colored icons in the design image
  const renderIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case "water":
        return (
          <svg
            className="w-10 h-10 text-[#2563eb]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m-3-3h6"
            />
          </svg>
        );
      case "treatment":
      case "medical":
      case "health":
        return (
          <svg
            className="w-10 h-10 text-[#f97316]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      case "food":
      case "nutrition":
        return (
          <svg
            className="w-10 h-10 text-[#16a34a]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-10 h-10 text-[#ff5a36]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        );
    }
  };

  // Dedicated background themes matching the icon rings in the design
  const getIconBg = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case "water":
        return "bg-blue-50 border-blue-100";
      case "treatment":
      case "medical":
      case "health":
        return "bg-orange-50 border-orange-100";
      case "food":
      case "nutrition":
        return "bg-emerald-50 border-emerald-100";
      default:
        return "bg-orange-50 border-orange-100";
    }
  };

  // Dedicated color scheme for the outline "DONATE NOW" buttons
  const getBtnStyle = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case "water":
        return "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]";
      case "treatment":
      case "medical":
      case "health":
        return "border-[#ff5a36] text-[#ff5a36] hover:bg-[#ff5a36]";
      case "food":
      case "nutrition":
        return "border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a]";
      default:
        return "border-[#ff5a36] text-[#ff5a36] hover:bg-[#ff5a36]";
    }
  };

  return (
    <div className="w-full bg-[#ffffff] font-sans antialiased">
      {/* 1. Banner Section */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* 2. OUR CAUSES SECTION */}
      {causes && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto  mb-10">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg">
              <HandHeart className="w-8 h-8 text-emerald-600" />
              <span className="italic font-serif">{causes.pretitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a0c2e] leading-tight">
              {causes.title}
            </h2>

            <div className="w-20 h-1 bg-[#16a34a] rounded-full mx-auto"></div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              {causes.description}
            </p>
          </div>

          {/* Causes Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
            {causes.items.map((item) => {
              const bgTheme = getIconBg(item.iconName);
              const btnTheme = getBtnStyle(item.iconName);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between group"
                >
                  <div className="w-full flex flex-col items-center">
                    {/* Icon Circle */}
                    <div
                      className={`w-20 h-20 rounded-full border-2 ${bgTheme} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105`}
                    >
                      {renderIcon(item.iconName)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold hover:text-orange-500 text-[#1a0c2e] mb-3">
                      <a href={item.href}>{item.title}</a>
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Image Container */}
                    <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-8 shadow-xs">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Donate Button linking to service-details */}
                  <Link
                    href={"/donate"}
                    className={`inline-flex items-center justify-center gap-2 border-2 px-8 py-3 rounded-full font-extrabold text-sm tracking-wider uppercase transition-all duration-300 hover:text-white hover:shadow-md ${btnTheme}`}
                  >
                    <span>{item.label}</span>
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout Banner */}
          {causes.footerBanner && (
            <div className="mt-16 py-4 w-full h-auto min-h-[92px] sm:h-[104px] bg-[#f4f9f6] border border-[#e5eee9] rounded-[14px] px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-0">
              {/* LEFT - ICON */}
              <div className="flex items-center justify-center shrink-0 sm:w-[95px]">
                <svg
                  width="58"
                  height="52"
                  viewBox="0 0 58 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Heart */}
                  <path
                    d="M29 23.5L27.9 22.4C22.5 17.1 17.8 13.1 17.8 8.8C17.8 5.2 20.7 2.2 24.3 2.2C26.4 2.2 28.3 3.2 29 4.8C29.7 3.2 31.6 2.2 33.7 2.2C37.3 2.2 40.2 5.2 40.2 8.8C40.2 13.1 35.5 17.1 30.1 22.4L29 23.5Z"
                    stroke="#159447"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Left hand */}
                  <path
                    d="M12 28.5C12 28.5 16.5 28.5 20.2 32.7C23.3 36.2 26.7 39 29 39C31.3 39 34.7 36.2 37.8 32.7C41.5 28.5 46 28.5 46 28.5"
                    stroke="#159447"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Hand base */}
                  <path
                    d="M16 34C18.5 38.5 22.8 42.5 29 42.5C35.2 42.5 39.5 38.5 42 34"
                    stroke="#159447"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Palm detail */}
                  <path
                    d="M25 36H33"
                    stroke="#159447"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* VERTICAL DIVIDER */}
              <div className="hidden sm:block w-px h-[50px] bg-[#aeb8b3] shrink-0" />

              {/* CENTER TEXT */}
              <div className="flex-1 px-0 sm:px-6 lg:px-8 text-center sm:text-left">
                <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.35] font-bold text-[#171b22] max-w-[430px]">
                  {causes.footerBanner.text}
                </p>
              </div>

              {/* VERTICAL DIVIDER */}
              <div className="hidden sm:block w-px h-[50px] bg-[#aeb8b3] shrink-0" />

              {/* RIGHT TAGLINE */}
              <div className="flex-1 sm:flex-none sm:w-[32%] lg:w-[35%] flex flex-col items-center justify-center text-center px-2 sm:px-5">
                <p
                  className="text-[#159447] text-[25px] sm:text-[27px] lg:text-[30px] font-semibold italic leading-none whitespace-nowrap"
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  {causes.footerBanner.tagline}
                </p>

                {/* Underline */}
                <div className="mt-2 w-[78px] sm:w-[90px] h-[2px] bg-[#159447] rounded-full" />
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
