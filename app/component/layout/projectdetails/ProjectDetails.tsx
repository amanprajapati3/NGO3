"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetailProps } from "@/type/typeSection";
import Banner from "../../shared/Banner";

// Icons matching the visual design in the detail page image
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaHeart,
  FaShareAlt,
  FaGraduationCap,
  FaHome,
  FaChartLine,
  FaEye,
  FaBookOpen,
  FaHandsHelping,
  FaRupeeSign,
  FaCheckCircle,
} from "react-icons/fa";

export default function ProjectDetails({ data }: ProjectDetailProps) {
  const {
    banner,
    categoryBadge,
    title,
    subtitle,
    location,
    startDate,
    beneficiaries,
    featuredImage,
    supportButtonText,
    shareButtonText,
    breadcrumbs,
    metrics,
    aboutSection,
    goalsSection,
    keyActivitiesSection,
    sidebar,
  } = data;

  // Icon mapping helper for dynamic metric/goal rendering
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "FaUsers":
        return <FaUsers className="text-[#ff5722] text-xl" />;
      case "FaGraduationCap":
        return <FaGraduationCap className="text-[#ff5722] text-xl" />;
      case "FaHome":
        return <FaHome className="text-[#ff5722] text-xl" />;
      case "FaChartLine":
        return <FaChartLine className="text-[#ff5722] text-xl" />;
      case "FaBookOpen":
        return <FaBookOpen className="text-[#ff5722] text-2xl" />;
      case "FaHandsHelping":
        return <FaHandsHelping className="text-[#ff5722] text-2xl" />;
      case "FaRupeeSign":
        return <FaRupeeSign className="text-[#ff5722] text-2xl" />;
      default:
        return <FaUsers className="text-[#ff5722] text-xl" />;
    }
  };

  return (
    <>
      {/* Hero Banner Component */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* Main Container */}
      <section className="bg-[#f8f9fa] sm:py-12 py-8 md:py-16 px-2 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-3 sm:p-10 lg:p-12 sm:shadow-sm sm:border sm:border-gray-100">
          
          {/* Breadcrumb Header */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="text-xs sm:text-sm text-gray-500 mb-8 flex items-center gap-2">
              {breadcrumbs.map((item, idx) => (
                <React.Fragment key={idx}>
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="hover:text-[#ff5722] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#ff5722] font-medium">
                      {item.label}
                    </span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <span className="text-gray-300">&gt;</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Top Hero Section: Details & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header Content */}
            <div className="lg:col-span-5 space-y-6">
              {/* Category Pill */}
              <div className="inline-block bg-[#fff0eb] text-[#ff5722] font-bold text-xs px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                {categoryBadge}
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] leading-tight">
                {title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </p>

              {/* Meta Stats List */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#ff5722]" />
                  <div>
                    <span className="text-gray-400 block text-[11px]">
                      Nationwide
                    </span>
                    <span className="font-semibold text-gray-800">
                      {location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#ff5722]" />
                  <div>
                    <span className="text-gray-400 block text-[11px]">
                      Started On
                    </span>
                    <span className="font-semibold text-gray-800">
                      {startDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#ff5722]" />
                  <div>
                    <span className="text-gray-400 block text-[11px]">
                      Beneficiaries
                    </span>
                    <span className="font-semibold text-gray-800">
                      {beneficiaries}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="bg-[#ff5722] hover:bg-[#e04818] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#ff5722]/20 flex items-center gap-2 cursor-pointer">
                  {supportButtonText} <FaHeart className="text-xs" />
                </button>
                <button className="border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer">
                  <FaShareAlt className="text-xs text-gray-500" />{" "}
                  {shareButtonText}
                </button>
              </div>
            </div>

            {/* Right Featured Image & Bottom Metrics Bar */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative h-[280px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={featuredImage}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 1000px"
                  className="object-cover object-center"
                />
              </div>

              {/* Metrics Grid below Image */}
              {metrics && metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#fffaf8] p-4 rounded-2xl border border-[#ffebd0]">
                  {metrics.map((metric) => (
                    <div
                      key={metric.id}
                      className="text-center p-2 flex flex-col items-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs mb-2">
                        {renderIcon(metric.icon)}
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-[#172033]">
                        {metric.value}
                      </span>
                      <span className="text-xs text-gray-500 font-medium mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Article & Sidebar Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 pt-12 border-t border-gray-100">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* About The Project */}
              {aboutSection && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-extrabold text-[#172033]">
                    {aboutSection.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {aboutSection.description}
                  </p>

                  {/* Vision Box */}
                  {aboutSection.vision && (
                    <div className="bg-[#fffdfa] border border-[#ffeedd] p-6 rounded-2xl flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#fff0eb] text-[#ff5722] flex items-center justify-center text-xl shrink-0">
                        <FaEye />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#172033] text-base">
                          {aboutSection.vision.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {aboutSection.vision.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Our Goals */}
              {goalsSection && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-extrabold text-[#172033]">
                    {goalsSection.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {goalsSection.goals.map((goal) => (
                      <div
                        key={goal.id}
                        className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-3"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs">
                          {renderIcon(goal.icon)}
                        </div>
                        <h3 className="font-bold text-[#172033] text-base">
                          {goal.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Activities */}
              {keyActivitiesSection && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-extrabold text-[#172033]">
                    {keyActivitiesSection.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {keyActivitiesSection.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                      >
                        <FaCheckCircle className="text-[#ff5722] text-base shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Highlights Box */}
              {sidebar?.highlights && (
                <div className="bg-[#fffbf9] border border-[#ffebd0] rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-extrabold text-[#172033]">
                    {sidebar.highlightsTitle}
                  </h3>
                  <ul className="space-y-3">
                    {sidebar.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 font-medium"
                      >
                        <FaCheckCircle className="text-[#ff5722] text-sm shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sidebar CTA Card */}
              {sidebar?.ctaCard && (
                <div className="bg-[#fff5f0] border border-[#ffdcd0] rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#172033] leading-snug">
                    {sidebar.ctaCard.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {sidebar.ctaCard.description}
                  </p>
                  <Link
                    href={sidebar.ctaCard.buttonLink || "/donate"}
                    className="w-full bg-[#ff5722] hover:bg-[#e04818] text-white py-3 px-6 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#ff5722]/20 flex items-center justify-center gap-2"
                  >
                    {sidebar.ctaCard.buttonText} <FaHeart className="text-xs" />
                  </Link>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </>
  );
}