"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  Handshake,
  Gift,
  Megaphone,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
} from "lucide-react";
import { StatsData, SupportData, SupportProps } from "@/type/typeSection";
import Banner from "../../shared/Banner"; // Adjust import path as needed
import { HandHeart } from "../../shared/Icons";
import Stats from "../../shared/Stats";

interface SupportComponentProps {
  data: SupportData;
  statsData: StatsData;
}

export default function Support({ data, statsData }: SupportComponentProps) {
  const { banner, waysToSupport, helpSection } = data;

  // Track active accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Helper function to dynamically map icons for "Ways You Can Support"
  const getIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case "donate":
        return <Heart className="w-7 md:w-12 md:h-12 h-7 text-emerald-700" />;
      case "volunteer":
        return <Users className="w-7 md:w-12 md:h-12 h-7 text-amber-600" />;
      case "partner":
        return <Handshake className="w-7 md:w-12 md:h-12 h-7 text-sky-600" />;
      case "fundraise":
        return <Gift className="w-7 h-7 md:w-12 md:h-12 text-purple-600" />;
      case "spread":
        return <Megaphone className="w-7 md:w-12 md:h-12 h-7 text-amber-500" />;
      default:
        return (
          <Heart className="w-7 h-7 md:w-12 md:h-12     text-emerald-700" />
        );
    }
  };

  // Helper function to dynamically map button outline/border colors
  const getButtonClass = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case "donate":
        return "border-emerald-600 text-emerald-700 hover:bg-emerald-50";
      case "volunteer":
        return "border-amber-500 text-amber-600 hover:bg-amber-50";
      case "partner":
        return "border-sky-500 text-sky-600 hover:bg-sky-50";
      case "fundraise":
        return "border-purple-500 text-purple-600 hover:bg-purple-50";
      case "spread":
        return "border-amber-400 text-amber-500 hover:bg-amber-50";
      default:
        return "border-emerald-600 text-emerald-700 hover:bg-emerald-50";
    }
  };

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased">
      {/* 1. Page Hero Banner */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* 2. Ways You Can Support Section */}
      {waysToSupport && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {waysToSupport.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {waysToSupport.items?.map((item, index) => (
              <div
                key={index}
                className="bg-[#fafbfb] border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Rounded Icon Circle */}
                <div
                  className={`w-16 md:w-24 md:h-24 h-16 rounded-full flex items-center justify-center mb-5 ${
                    item.icon === "donate"
                      ? "bg-emerald-100/60"
                      : item.icon === "volunteer"
                        ? "bg-amber-100/60"
                        : item.icon === "partner"
                          ? "bg-sky-100/60"
                          : item.icon === "fundraise"
                            ? "bg-purple-100/60"
                            : "bg-amber-100/50"
                  }`}
                >
                  {getIcon(item.icon)}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Action Button */}
                <Link
                  href={item.buttonUrl || "#"}
                  className={`w-full py-2 px-3 border rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-1.5 ${getButtonClass(
                    item.icon,
                  )}`}
                >
                  {item.buttonText}
                  <span className="text-sm">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      <div className="mt">
        <Stats data={statsData} />
      </div>

      {/* 3. Frequently Asked Questions Section (Split Teal Layout) */}
      {helpSection && (
        <section className="w-full relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left Column: FAQ Accordion */}
            <div className="lg:col-span-7 py-12 md:py-16 px-4 sm:px-6 lg:pr-12 lg:pl-0 z-10">
              {/* Section Subtitle */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
                <HandHeart className="w-8 h-8 text-emerald-600" />
                <span className="italic font-serif">
                  {helpSection.subTitle}
                </span>
              </div>

              {/* Section Main Title */}
              <h2
                className="text-2xl md:text-4xl text-center md:text-start font-extrabold text-slate-900 tracking-tight mb-8"
                dangerouslySetInnerHTML={{
                  __html:
                    helpSection.title ||
                    "Frequently <span class='text-amber-500'>Asked</span> Questions",
                }}
              />

              {/* Accordion Container */}
              <div className="space-y-4">
                {helpSection.accordions?.map((accordion, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "bg-[#036a38] text-white shadow-md"
                          : "bg-slate-50 hover:bg-slate-100/80 text-slate-800 border border-slate-200/80"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-sm cursor-pointer"
                      >
                        <span>{accordion.title}</span>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                            isOpen
                              ? "bg-white/20 text-white"
                              : "bg-slate-200/60 text-slate-600"
                          }`}
                        >
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 md:px-5 md:pb-5 text-sm bg-white md:text-sm text-slate-800  border-t border-white/10 pt-3">
                          {accordion.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Teal Background & Dual Overlapping Images */}
            <div className="lg:col-span-5 relative bg-[#036a38] min-h-[380px] lg:min-h-full flex items-center justify-center p-6 lg:p-10">
              {/* Exact Pixel-Matched Torn Paper Edge SVG */}
              <div className="hidden lg:block absolute top-0 bottom-0 -left-12 w-12 h-full z-20 pointer-events-none">
                <svg
                  viewBox="0 0 100 1000"
                  preserveAspectRatio="none"
                  className="w-full h-full fill-[#036a38]"
                >
                  <path
                    d="M 100 0 
           C 85 10, 50 15, 52 35 
           C 54 50, 40 60, 48 75 
           C 52 85, 60 95, 50 105 
           L 42 110 L 58 120 
           C 50 135, 38 145, 46 160 
           C 52 172, 65 180, 52 195 
           C 40 210, 68 225, 60 240 
           L 50 255 L 42 270 L 68 285 
           C 55 300, 62 315, 58 330 
           C 52 350, 40 365, 48 385 
           C 54 400, 68 415, 60 435 
           C 52 455, 45 470, 50 490 
           C 55 510, 32 525, 40 540 
           L 28 555 L 55 565 
           C 42 585, 38 605, 45 625 
           C 52 645, 20 660, 35 680 
           C 48 700, 38 720, 50 735 
           L 30 750 L 48 760 
           C 55 775, 42 790, 52 810 
           C 62 830, 48 850, 58 870 
           C 68 890, 25 905, 35 925 
           C 45 945, 40 965, 50 980 
           C 58 990, 85 995, 100 1000 
           Z"
                  />
                </svg>
              </div>

              {/* Overlapping Image Cards Wrapper */}
              <div className="relative w-full max-w-md aspect-4/5 flex items-center justify-center z-10">
                {/* Main Image Frame */}
                <div className="w-[75%] h-[82%] relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl translate-x-[-10%] translate-y-[-5%]">
                  <Image
                    src={
                      helpSection.mainImage ||
                      "/NGO_Images/group-environmental-conservation-people-hands-planting-aerial-view.jpg"
                    }
                    alt="FAQ Primary Community"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary Inset Image Frame */}
                <div className="absolute top-[25%] right-[0%] w-[55%] h-[48%] rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20">
                  <Image
                    src={
                      helpSection.secondaryImage ||
                      "/NGO_Images/group-doctors-putting-their-hands-together-closeup.jpg"
                    }
                    alt="FAQ Secondary Detail"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decorative Amber Bar Accent */}
                <div className="absolute bottom-[8%] right-[8%] w-2.5 h-20 bg-amber-400 rounded-full z-30"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
