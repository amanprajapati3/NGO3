"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiUsers,
  FiMessageSquare,
  FiFileText,
  FiAward,
} from "react-icons/fi";

export interface StatItem {
  id?: string | number;
  number: string | number;
  suffix?: string;
  title: string;
  iconName?: string;
}

export interface StatsProps {
  data: {
    stats: StatItem[];
    bgImage?: string;
  };
}

// Icon mapper helper
const renderStatIcon = (iconName?: string) => {
  const iconClass = "w-6 h-6 text-white";

  switch (iconName?.toLowerCase()) {
    case "users":
    case "team":
      return <FiUsers className={iconClass} />;
    case "message":
    case "review":
      return <FiMessageSquare className={iconClass} />;
    case "project":
    case "file":
      return <FiFileText className={iconClass} />;
    case "award":
    case "trophy":
      return <FiAward className={iconClass} />;
    default:
      return <FiUsers className={iconClass} />;
  }
};

// Animated Counter Sub-Component
function AnimatedCounter({ value }: { value: string | number }) {
  const [count, setCount] = useState(0);

  // Extract raw numeric value and non-numeric letters (e.g. "80K" -> target 80, letter "K")
  const strVal = String(value);
  const targetNumber = parseFloat(strVal.replace(/[^0-9.]/g, "")) || 0;
  const letterSuffix = strVal.replace(/[0-9.]/g, "");

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds animation duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out quad formula for smooth deceleration
      const easeOutProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutProgress * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetNumber]);

  return (
    <span>
      {count}
      {letterSuffix}
    </span>
  );
}

export default function Stats({ data }: StatsProps) {
  const {
    stats = [],
    bgImage = "/NGO_Images/happy-diverse-kinds-park.jpg",
  } = data;

  return (
    <section className="relative w-full overflow-hidden mt-8 md:mt-16 font-sans py-5 md:py-12 px-4 sm:px-6 lg:px-12 bg-[#0B2219]">
      {/* =========================================================
          BACKGROUND IMAGE WITH GRAYSCALE & GRADIENT OVERLAY
      ========================================================== */}
      <div className="absolute inset-0 z-0">
        {/* Grayscale Background Image */}
        <Image
          src={bgImage}
          alt="Stats background"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale contrast-125 opacity-80"
          priority
        />

        {/* 
          Dark Green Left-to-Right Overlay:
          - Solid dark green on left (#0B2219)
          - Fades out gradually towards the right to reveal grayscale image
        */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #0B2219 0%, #0B2219 35%, rgba(11, 34, 25, 0.85) 60%, rgba(11, 34, 25, 0.3) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          STATS GRID CONTENT
      ========================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((item, index) => {
            const isLast = index === stats.length - 1;

            return (
              <div
                key={item.id || index}
                className="relative flex flex-col items-center justify-center text-center px-4 py-4 lg:py-0"
              >
                {/* Outlined Circle Icon */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white/40 flex items-center justify-center mb-6 bg-black/10 backdrop-blur-[2px]">
                  {renderStatIcon(item.iconName)}
                </div>

                {/* Stat Number with Animated Increment */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                  <AnimatedCounter value={item.number} /> {item.suffix || "+"}
                </h3>

                {/* Title */}
                <p className="text-sm sm:text-base font-medium text-gray-200 tracking-wide">
                  {item.title}
                </p>

                {/* 
                  VERTICAL YELLOW DASHED DIVIDER (DESKTOP)
                  Renders strictly to the right side of every item except the last item
                */}
                {!isLast && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-[1px] border-r-2 border-dashed border-[#E2B859]/70" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}