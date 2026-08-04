"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiChevronDown } from "react-icons/fi";
import { ServiceDetailsProps } from "@/type/typeSection";
import Banner from "../../shared/Banner";

export default function ServiceDetails({ data }: ServiceDetailsProps) {
  const { banner, categories, sidebarCta, servicesDataMap } = data;

  // Initialize with the first category slug or default to 'healthcare-access'
  const defaultSlug = categories?.[0]?.slug || "healthcare-access";
  const [activeSlug, setActiveSlug] = useState<string>(defaultSlug);

  // Retrieve current active content from servicesDataMap
  const currentContent = servicesDataMap[activeSlug] || servicesDataMap[defaultSlug];

  return (
    <main className="w-full bg-[#fcfcfd] pb-16">
      {/* Banner Section */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        {/* Mobile-Only Dropdown Menu (Visible on screens smaller than md: breakpoint) */}
        <div className="md:hidden mb-6">
          <label htmlFor="category-select" className="block text-sm font-bold text-[#1a0c2e] mb-2">
            Select Category
          </label>
          <div className="relative">
            <select
              id="category-select"
              value={activeSlug}
              onChange={(e) => setActiveSlug(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-[#1a0c2e] pr-10 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#ff5a36]"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* 2-Column Responsive Layout for Tablet (md) and Desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Left Column: Sidebar Navigation & CTA (Hidden on Mobile, Visible from MD upwards) */}
          <aside className="hidden md:flex md:col-span-5 lg:col-span-4 flex-col justify-between space-y-6 lg:space-y-8">
            <div className="space-y-6 lg:space-y-8">
              {/* Category Navigation Buttons */}
              <div className="bg-[#f8faf9] border border-gray-200/80 rounded-2xl p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-[#1a0c2e] mb-3 lg:mb-4 pb-3 border-b border-gray-200/80">
                  Services Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => {
                    const isActive = activeSlug === cat.slug;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveSlug(cat.slug)}
                        className={`w-full flex cursor-pointer items-center justify-between px-3.5 lg:px-5 py-3 rounded-xl font-semibold text-sm lg:text-sm transition-all duration-200 text-left ${
                          isActive
                            ? "bg-[#ff5a36] text-white shadow-md shadow-[#ff5a36]/20"
                            : "bg-white text-gray-700 hover:bg-gray-100/80 border border-gray-200/60"
                        }`}
                      >
                        <span className="truncate pr-2">{cat.name}</span>
                        <FiArrowRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? "translate-x-1" : "text-gray-400"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar CTA Card (Tablet & Desktop) */}
              {sidebarCta && (
                <div className="relative rounded-2xl overflow-hidden p-6 lg:p-8 text-white min-h-[340px] lg:min-h-[380px] flex flex-col justify-end shadow-md">
                  <Image
                    src={sidebarCta.bgImage}
                    alt={sidebarCta.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="relative z-10 space-y-2 lg:space-y-3 text-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#ff5a36] text-white flex items-center justify-center mx-auto mb-2">
                      <FiCheckCircle className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#ff5a36]">
                      {sidebarCta.tagline}
                    </p>
                    <h4 className="text-lg lg:text-xl font-bold leading-snug">
                      {sidebarCta.title}
                    </h4>
                    <Link
                      href={sidebarCta.buttonUrl}
                      className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 bg-[#ff5a36] hover:bg-[#e04f2e] text-white font-bold rounded-xl text-sm lg:text-sm transition-all shadow-md mt-2"
                    >
                      {sidebarCta.buttonText}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Right Column: Dynamic Service Details */}
          <section className="md:col-span-7 lg:col-span-8 space-y-6 lg:space-y-8">
            {/* Service Main Hero Image */}
            {currentContent?.mainImage && (
              <div className="relative w-full h-[240px] md:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xs border border-gray-100">
                <Image
                  src={currentContent.mainImage}
                  alt={currentContent.heading || "Service Detail"}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            )}

            {/* Main Content Paragraphs */}
            {currentContent?.descriptionParagraphs && (
              <div className="space-y-3 lg:space-y-4 text-gray-600 leading-relaxed text-sm lg:text-base">
                {currentContent.descriptionParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Sub-heading & Description */}
            <div className="space-y-2 lg:space-y-3 pt-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1a0c2e]">
                {currentContent?.heading}
              </h2>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {currentContent?.subHeading}
              </p>
            </div>

            {/* Feature Grid */}
            {currentContent?.featureGrid && currentContent.featureGrid.length > 0 && (
              <div className="bg-[#f8faf9] border border-gray-200/80 rounded-2xl p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                  {currentContent.featureGrid.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center gap-3 bg-white px-3.5 py-2.5 lg:px-4 lg:py-3 rounded-xl border border-gray-100 shadow-2xs"
                    >
                      <FiCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#ff5a36] shrink-0" />
                      <span className="text-sm font-semibold text-[#1a0c2e]">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-Services Staggered Layout */}
            {currentContent?.subServices && currentContent.subServices.length > 0 && (
              <div className="space-y-8 lg:space-y-10 pt-4 lg:pt-6">
                {currentContent.subServices.map((sub, index) => {
                  const isEven = index % 2 === 1;

                  return (
                    <div
                      key={sub.id}
                      className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
                    >
                      {/* Image Block */}
                      <div
                        className={`w-full lg:w-1/2 h-[200px] md:h-[220px] lg:h-[240px] relative rounded-2xl lg:rounded-3xl overflow-hidden shrink-0 shadow-xs ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <Image
                          src={sub.image}
                          alt={sub.title}
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Content Block */}
                      <div
                        className={`w-full lg:w-1/2 space-y-2 lg:space-y-3 ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-orange-50 text-[#ff5a36] flex items-center justify-center border border-orange-100">
                          <FiCheckCircle className="w-4 h-4 lg:w-5 lg:h-5" />
                        </div>

                        <h3 className="text-lg lg:text-xl font-bold text-[#1a0c2e]">
                          {sub.title}
                        </h3>
                        
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

        </div>

        {/* CTA Card for Mobile Only */}
        {sidebarCta && (
          <div className="mt-8 md:hidden relative rounded-2xl overflow-hidden p-6 text-white min-h-[320px] flex flex-col justify-end shadow-md">
            <Image
              src={sidebarCta.bgImage}
              alt={sidebarCta.title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="relative z-10 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#ff5a36] text-white flex items-center justify-center mx-auto mb-2">
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#ff5a36]">
                {sidebarCta.tagline}
              </p>
              <h4 className="text-lg font-bold leading-snug">
                {sidebarCta.title}
              </h4>
              <Link
                href={sidebarCta.buttonUrl}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#ff5a36] hover:bg-[#e04f2e] text-white font-bold rounded-xl text-sm transition-all shadow-md mt-2"
              >
                {sidebarCta.buttonText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}