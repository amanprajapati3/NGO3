"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiUsers,
  FiSun,
  FiBriefcase,
  FiBookOpen,
  FiActivity,
  FiPlusSquare,
  FiCalendar,
  FiHelpCircle,
  FiAward,
  FiFileText,
  FiSmile,
} from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { CsrData, CsrProps, StatsData } from "@/type/typeSection";
import Banner from "../../shared/Banner";
import { HandHeart } from "../../shared/Icons";
import Stats from "../../shared/Stats";

interface CsrComponentProps {
  data: CsrData;
  statsData: StatsData;
}

export default function CSR({ data, statsData }: CsrComponentProps) {
  const {
    banner,
    commitment,
    focusAreas,
    impact,
    recentInitiatives,
    counterStats,
  } = data;

  // Helper map for distinct background and icon text colors per category
  const iconThemeMap: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    users: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
    },
    community: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
    },
    team: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
    },
    leaf: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
    },
    tree: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
    },
    environment: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
    },
    handshake: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
    },
    partner: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
    },
    shield: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-100",
    },
    integrity: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-100",
    },
    education: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-100",
    },
    healthcare: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-100",
    },
    health: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-100",
    },
    plus: {
      bg: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-100",
    },
    medical: {
      bg: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-100",
    },
    review: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
    project: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-100",
    },
    award: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-100",
    },
  };

  const getIconTheme = (iconName: string) => {
    return (
      iconThemeMap[iconName] || {
        bg: "bg-orange-50",
        text: "text-[#ff5a36]",
        border: "border-orange-100",
      }
    );
  };

  // Render icons corresponding exactly to the visual icons in the provided template image
  const renderIcon = (iconName: string, className: string = "w-7 h-7") => {
    switch (iconName) {
      case "users":
      case "community":
      case "team":
        return <FiUsers className={className} />;
      case "leaf":
      case "tree":
      case "environment":
        return <FiSun className={className} />;
      case "handshake":
      case "partner":
        return <FiBriefcase className={className} />;
      case "shield":
      case "integrity":
        return <GoShieldCheck className={className} />;
      case "education":
        return <FiBookOpen className={className} />;
      case "healthcare":
      case "health":
        return <FiActivity className={className} />;
      case "plus":
      case "medical":
        return <FiPlusSquare className={className} />;
      case "review":
        return <FiSmile className={className} />;
      case "project":
        return <FiFileText className={className} />;
      case "award":
        return <FiAward className={className} />;
      default:
        return <FiHelpCircle className={className} />;
    }
  };

  return (
    <div className="w-full bg-[#ffffff] font-sans">
      {/* 1. Banner Section */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* 2. OUR COMMITMENT SECTION */}
      {commitment && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading, Text & Button */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center md:item-start md:justify-start justify-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
                <HandHeart className="w-8 h-8 text-emerald-600" />
                <span className="italic font-serif">{commitment.subtitle}</span>
              </div>

              <h2 className="text-3xl text-center md:text-start sm:text-4xl lg:text-5xl font-extrabold text-[#1a0c2e] leading-tight">
                {commitment.title}
              </h2>

              <div className="w-16 h-1 my-3 bg-[#ff5a36] rounded-full"></div>

              <p className="text-base text-center md:text-start  sm:text-lg text-gray-600 leading-relaxed">
                {commitment.description}
              </p>

              <div className="pt-4 flex justify-center md:justify-start">
                <Link
                  href={commitment.buttonUrl}
                  className="inline-flex items-center gap-3 border-2 border-[#ff5a36] text-[#ff5a36] hover:bg-[#ff5a36] hover:text-white transition-all px-8 py-3.5 rounded-full text-base font-bold shadow-xs hover:shadow-md"
                >
                  <span>{commitment.buttonText}</span>
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {commitment.cards.map((card) => {
                const theme = getIconTheme(card.iconName);
                return (
                  <div
                    key={card.id}
                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center border ${theme.border}`}
                    >
                      {renderIcon(card.iconName, "w-8 h-8")}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a0c2e]">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. OUR FOCUS AREAS SECTION */}
      {focusAreas && (
        <section className="bg-[#f8faf9] py-8 border-y border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5a36]"></span>
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#ff5a36]">
                  {focusAreas.title}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {focusAreas.items.map((item) => {
                const theme = getIconTheme(item.iconName);
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Header with Floating Icon Badge */}
                      <div className="relative h-52 w-full">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div
                          className={`absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white ${theme.text} shadow-md flex items-center justify-center border ${theme.border}`}
                        >
                          {renderIcon(item.iconName, "w-7 h-7")}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="pt-10 px-6 pb-6 text-center space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a0c2e]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Bottom Link */}
                    <div className="pb-6 text-center">
                      <Link
                        href={item.linkUrl}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5a36] hover:text-[#e04f2e] transition-colors"
                      >
                        <span>{item.linkText}</span>
                        <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. OUR IMPACT SECTION */}
      {impact && (
        <section className="py-8 bg-[#f4f7f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5a36]"></span>
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#ff5a36]">
                  {impact.title}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {impact.stats.map((stat, idx) => {
                const theme = getIconTheme(stat.iconName);
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl text-center border border-gray-100 shadow-xs space-y-3 flex flex-col justify-center items-center"
                  >
                    <div className={theme.text}>
                      {renderIcon(stat.iconName, "w-8 h-8")}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#ff5a36]">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-bold text-[#1a0c2e]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. RECENT INITIATIVES SECTION */}
      {recentInitiatives && (
        <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5a36]"></span>
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#ff5a36]">
                {recentInitiatives.subtitle}
              </span>
            </div>

            {/* <Link
              href={recentInitiatives.viewAllUrl}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5a36] hover:text-[#e04f2e] transition-colors"
            >
              <span>{recentInitiatives.viewAllText}</span>
              <FiArrowRight className="w-4 h-4" />
            </Link> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recentInitiatives.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}  
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <FiCalendar className="w-4 h-4 text-gray-400" />
                      <span>{card.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1a0c2e] transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={card.linkUrl}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5a36] hover:text-[#e04f2e] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. DARK COUNTER STATS BANNER */}
      <div className="mt-0">
        <Stats data={statsData} />
      </div>
    </div>
  );
}
