"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Play,
  GraduationCap,
  Users,
  HandHeart,
  Utensils,
} from "lucide-react";
import data from "@/data/data.json";
import { FaRegHeart } from "react-icons/fa";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = data.banner || [];
  const featureCards = data.featureCards || [];

  // Auto-play slider every 5 seconds
  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const renderCardIcon = (iconName: string, index: number) => {
    const isEven = index % 2 === 0;

    const glowingClasses = isEven
      ? "bg-green-500 border border-white/30 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
      : "bg-orange-500 border border-white/30 shadow-[0_0_15px_rgba(249,115,22,0.4)]";

    const iconStyle = "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 fill-white text-white";

    const getIcon = () => {
      switch (iconName) {
        case "graduation-cap":
          return <GraduationCap className={iconStyle} />;
        case "users":
          return <Users className={iconStyle} />;
        case "heart-handshake":
          return <HandHeart className={iconStyle} />;
        case "utensils":
          return <Utensils className={iconStyle} />;
        default:
          return <GraduationCap className={iconStyle} />;
      }
    };

    return (
      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 ${glowingClasses}`}>
        {getIcon()}
      </div>
    );
  };

  if (!banners.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      {/* =====================================================
          HERO WRAPPER
      ====================================================== */}
      <div className="relative min-h-[800px] sm:min-h-[720px] md:min-h-[740px] lg:min-h-[780px] xl:min-h-[800px] overflow-hidden">
        
        {/* =====================================================
            CONTINUOUS SLIDING TRACK
        ====================================================== */}
        <div
          className="flex w-full h-full min-h-[800px] sm:min-h-[720px] md:min-h-[740px] lg:min-h-[780px] xl:min-h-[800px] transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((slide, index) => (
            <div
              key={index}
              className="relative w-full shrink-0 h-full min-h-[800px] sm:min-h-[720px] md:min-h-[740px] lg:min-h-[780px] xl:min-h-[800px]"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bgImageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/25" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full w-full mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 pt-32 md:pt-28 lg:pt-32 xl:pt-40 pb-52 sm:pb-48 md:pb-48 lg:pb-44 flex flex-col items-center sm:items-start">
                <div className="w-full max-w-2xl text-center sm:text-left space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Pretitle */}
                  {slide.pretitle && (
                    <div className="inline-flex items-center gap-2 border border-[#f9570c]/40 text-orange-400 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-sm md:text-sm font-semibold tracking-wider uppercase">
                      <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                      <span>{slide.pretitle}</span>
                    </div>
                  )}

                  {/* Heading */}
                  <div className="relative flex justify-center sm:justify-start">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-white max-w-xl">
                      {slide.title}
                    </h1>

                    <span className="absolute bottom-0 sm:bottom-3 left-24 sm:left-3/4 md:left-76 text-xl sm:text-2xl md:text-3xl text-orange-500 rotate-12">
                      <FaRegHeart />
                    </span>
                  </div>

                  {/* Orange line */}
                  <div className="h-0.5 w-32 sm:w-40 md:w-48 bg-orange-600 mx-auto sm:mx-0" />

                  {/* Description */}
                  <div className="min-h-[3.5rem] sm:min-h-[4rem] flex items-center justify-center sm:justify-start">
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-lg line-clamp-3">
                      {slide.desc}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                    {slide.buttons?.map((btn, bIdx) => {
                      if (btn.variant === "primary") {
                        return (
                          <Link
                            key={bIdx}
                            href={btn.href}
                            className="inline-flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-sm md:text-sm transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 whitespace-nowrap"
                          >
                            <span>{btn.label}</span>
                            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                          </Link>
                        );
                      }

                      return (
                        <Link
                          key={bIdx}
                          href={btn.href}
                          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-sm md:text-sm transition-all hover:-translate-y-0.5 whitespace-nowrap"
                        >
                          <span>{btn.label}</span>
                          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-white" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            NAVIGATION ARROWS
        ====================================================== */}
        {banners.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 cursor-pointer md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#f9570c] border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 cursor-pointer md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#f9570c] border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* =====================================================
            FEATURE CARDS
        ====================================================== */}
        {featureCards.length > 0 && (
          <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-0 right-0 z-30 px-3 sm:px-5 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 bg-black/65 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                {featureCards.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="relative p-2.5 sm:p-3 md:p-4 lg:p-5 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-3 md:gap-3.5 min-w-0 hover:bg-white/5 transition-all duration-300 group"
                  >
                    {/* Icon */}
                    {renderCardIcon(card.icon, cIdx)}

                    {/* Text */}
                    <div className="min-w-0 text-center sm:text-left">
                      <h3 className="font-bold text-white text-sm leading-snug line-clamp-2 group-hover:text-orange-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="mt-0.5 text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>
                    </div>

                    {/* Vertical divider */}
                    {cIdx !== featureCards.length - 1 && (
                      <span className="hidden lg:block absolute top-5 bottom-5 right-0 w-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}