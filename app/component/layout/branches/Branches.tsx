"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Users,
  Heart,
  Handshake,
  Sprout,
  HeartHandshake,
} from "lucide-react";

import { BranchesProps } from "@/type/typeSection";
import Banner from "../../shared/Banner";
import { HandHeart } from "../../shared/Icons";

export default function Branches({ data }: BranchesProps) {
  const { banner, content } = data;
  const [showAll, setShowAll] = useState(false);

  // Show only 3 cards initially unless showAll is toggled
  const visibleLocations = showAll
    ? content?.locations
    : content?.locations?.slice(0, 3);

  return (
    <div className="w-full bg-[#f8fafc] text-[#1c1c1c] font-sans antialiased pb-16">
      {/* Banner */}
      <Banner
        title={banner?.title}
        breadcrumbHome={banner?.breadcrumbHome}
        breadcrumbCurrent={banner?.breadcrumbCurrent}
        image={banner?.bgImageUrl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg">
            <HandHeart className="w-8 h-8 text-emerald-600" />
            <span className="italic font-serif">{content?.tagline}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {content?.mainTitle}
            <span className="text-slate-900">{content?.highlightTitle}</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            {content?.description}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleLocations?.map((branch, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-row hover:shadow-md transition-shadow"
            >
              {/* Branch Image */}
              <div className="relative w-40 sm:w-44 self-stretch shrink-0 bg-slate-100 overflow-hidden">
                <img
                  src={branch.image || "/NGO_Images/branch-placeholder.jpg"}
                  alt={branch.name}
                  className="absolute inset-0 w-full rounded-md h-full object-cover"
                />

                {branch.isHeadOffice && (
                  <span className="absolute bottom-3 left-3 bg-[#0d7a42] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    Head Office
                  </span>
                )}
              </div>

              {/* Branch Info */}
              <div className="p-2 flex-1 flex flex-col justify-between min-w-0">
                <div className="space-y-3">
                  <h3 className="font-bold text-emerald-600 text-base">
                    {branch.name}
                  </h3>

                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{branch.phone}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{branch.email}</span>
                    </div>
                  </div>
                </div>

                {/* View Details Link */}
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <a
                  href="/branches"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.reload();
                      window.scrollTo(0, 0);
                    }}
                    className="inline-flex border-2 px-4 py-2 rounded-md items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    {branch.buttonText || "View Details"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Branches Button */}
        {content?.locations && content.locations.length > 3 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-[#0d7a42] hover:bg-[#0a6335] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              {showAll
                ? "Show Less Branches"
                : content?.viewAllButtonText || "View All Branches"}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAll ? "-rotate-90" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Feature Pillars Box (Matched directly to reference image) */}
        <div className="bg-[#f2f9f5] border border-emerald-100/60 rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/60">
            {content?.features?.map((feature, idx) => {
              const iconName = feature.icon.toLowerCase();
              return (
                <div
                  key={idx}
                  className={`flex  gap-4 ${
                    idx !== 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""
                  }`}
                >
                  {/* Round Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#dcf2e5] flex items-center justify-center shrink-0">
                    {iconName.includes("users") && (
                      <Users className="w-7 h-7 text-[#0d7a42]" />
                    )}
                    {iconName.includes("heart") && (
                      <HeartHandshake className="w-7 h-7 text-[#0d7a42]" />
                    )}
                    {iconName.includes("handshake") && (
                      <Handshake className="w-7 h-7 text-[#0d7a42]" />
                    )}
                    {iconName.includes("sprout") && (
                      <Sprout className="w-7 h-7 text-[#0d7a42]" />
                    )}
                  </div>

                  {/* Feature Text */}
                  <div>
                    <h4 className="font-bold text-[#0d7a42] text-sm sm:text-base mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner with Us & Contact Section */}
        <div className="bg-emerald-50 rounded-3xl border border-slate-200/80 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          {/* Left Illustration & Text */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-5/12 h-full bg-emerald-50 rounded-2xl flex items-center justify-center p-4">
              <img src="/branches.png" alt="" />
            </div>

            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                {content?.partnerCta?.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
                {content?.partnerCta?.description}
              </p>
              <button className="bg-[#0d7a42] hover:bg-[#0a6335] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs">
                <a href="/contact-us">{content?.partnerCta?.buttonText}</a>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Contact Info */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm mb-2">
              {content?.partnerCta?.getInTouchTitle}
            </h4>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{content?.partnerCta?.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{content?.partnerCta?.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{content?.partnerCta?.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Green Callout Banner */}
        <div className="w-full bg-[#036a38] text-white rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Left Section: Icon & Primary Text */}
          <div className="flex items-center gap-4">
            {/* Hands holding heart icon */}
            <div className="shrink-0 text-white">
              <HandHeart className="w-9 h-9 stroke-[1.75]" />
            </div>

            {/* Text Lines */}
            <div className="text-sm md:text-[15px] md:w-[300px] font-semibold leading-snug tracking-normal">
              <p>{content?.bottomCta?.text}</p>
            </div>
          </div>

          {/* Right Section: Secondary Text & Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto justify-end">
            {/* Subtext aligned to the left of button */}
            <p className="text-sm md:text-[15px] font-semibold text-white whitespace-nowrap">
              {content?.bottomCta?.subtext}
            </p>

            {/* Button with Heart Icon */}
            <a
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#036a38] hover:bg-emerald-50 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Heart className="w-4 h-4 fill-[#036a38] text-[#036a38]" />
              <span>{content?.bottomCta?.buttonText || "Donate Now"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
