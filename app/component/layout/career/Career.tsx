"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiTarget,
  FiUsers,
  FiBookOpen,
  FiHeart,
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiChevronRight,
  FiDollarSign,
  FiAward,
  FiSmile,
  FiArrowRight,
  FiSend,
  FiUserCheck,
  FiBarChart2,
  FiEdit3,
} from "react-icons/fi";
import { FaBalanceScaleLeft, FaHandshake } from "react-icons/fa";
import { IoMegaphone } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";
import type { CareerData } from "@/type/typeSection";
import Banner from "../../shared/Banner";

export interface CareerProps {
  data: CareerData;
}

// Icon mapper for dynamic section icons
const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "FiTarget":
      return <FiTarget className={className} />;
    case "FiUsers":
      return <FiUsers className={className} />;
    case "FiBookOpen":
      return <FiBookOpen className={className} />;
    case "FiHeartHandshake":
      return <FaHandshake className={className} />;
    case "FiScale":
      return <FaBalanceScaleLeft className={className} />;
    case "FiDollarSign":
      return <FiDollarSign className={className} />;
    case "FiHeart":
      return <FiHeart className={className} />;
    case "FiAward":
      return <FiAward className={className} />;
    case "FiCalendar":
      return <FiCalendar className={className} />;
    case "FiSmile":
      return <FiSmile className={className} />;
    default:
      return <FiTarget className={className} />;
  }
};

// Helper for job position icons
const renderJobIcon = (index: number, className: string) => {
  const icons = [
    <FiUserCheck key="1" className={className} />,
    <IoMegaphone key="2" className={className} />,
    <FiBarChart2 key="3" className={className} />,
    <FiEdit3 key="4" className={className} />,
  ];
  return icons[index % icons.length];
};

export default function Career({ data }: CareerProps) {
  const { banner, whyWorkWithUs, openPositions, whatWeOffer, cta } = data;

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Banner Component */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* ================= 1. WHY WORK WITH US ================= */}
      {whyWorkWithUs && (
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a0c2e] mb-10 tracking-tight">
            {whyWorkWithUs.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyWorkWithUs.items?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center bg-[#fdfbf9] border border-slate-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 md:w-20 md:h-20 h-14 rounded-full bg-[#eaf5eb] text-[#2ba048] flex items-center justify-center text-2xl mb-4 border border-[#2ba048]/10">
                  {renderIcon(item.icon, "w-7 md:w-10 md:h-10 h-7")}
                </div>
                <h3 className="text-base font-bold text-[#1a0c2e] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 2. OPEN POSITIONS & WHAT WE OFFER ================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Open Positions */}
          <div className="lg:col-span-7">
            {openPositions && (
              <>
                <h2 className="text-2xl font-extrabold text-[#1a0c2e] mb-6">
                  {openPositions.title}
                </h2>

                <div className="space-y-4">
                  {openPositions.positions?.map((job, index) => {
                    const isOrange = index % 2 !== 0;

                    return (
                      <div
                        key={job.id}
                        className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#2ba048] hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                              isOrange
                                ? "bg-[#ff5a36] text-white"
                                : "bg-[#03513a] text-white"
                            }`}
                          >
                            {renderJobIcon(index, "w-6 h-6")}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-[#1a0c2e] mb-1.5">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                              <span className="inline-flex items-center gap-1">
                                <FiBriefcase className="text-gray-400" />
                                {job.type}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <FiMapPin className="text-gray-400" />
                                {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <FiCalendar className="text-gray-400" />
                                {job.experience}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={job.applyLink}
                          className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-[#1a0c2e] hover:bg-[#03513a] hover:text-white hover:border-[#03513a] transition-all self-start sm:self-center shrink-0"
                        >
                          View Details
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Don't see the right role */}
                {openPositions.customApplication && (
                  <div className="mt-6 bg-[#eaf5eb] border border-[#2ba048]/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#03513a] text-white flex items-center justify-center shrink-0">
                        <FiSend className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1a0c2e]">
                          {openPositions.customApplication.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {openPositions.customApplication.text}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`mailto:${openPositions.customApplication.email}`}
                      className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1a0c2e] hover:bg-[#03513a] hover:text-white transition-all shrink-0"
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Column: What We Offer */}
          <div className="lg:col-span-5">
            {whatWeOffer && (
              <div className="bg-[#f2f7f4] border border-slate-200/60 rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-[#1a0c2e] mb-6">
                  {whatWeOffer.title}
                </h2>

                <div className="space-y-6">
                  {whatWeOffer.benefits?.map((benefit, idx) => {
                    const isOrangeOffer = idx % 2 !== 0;

                    return (
                      <div key={benefit.id} className="flex items-start gap-4">
                        <div
                          className={`w-11 md:w-12 md:h-12 h-11 flex items-center justify-center shrink-0 ${
                            isOrangeOffer ? "text-[#ff5a36]" : "text-[#2ba048]"
                          }`}
                        >
                          {renderIcon(benefit.icon, "w-5 md:w-7 md:h-7 h-5")}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#1a0c2e]">
                            {benefit.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= 3. CAREERS WITH PURPOSE CTA ================= */}
      {cta && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="bg-[#fff1ed] border border-[#ff5a36]/15 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="hidden sm:flex w-16 h-16 rounded-full bg-[#ff5a36]/10 text-[#ff5a36] items-center justify-center shrink-0">
                <HiOutlineHeart className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#1a0c2e]">
                  {cta.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  {cta.desc}
                </p>
              </div>
            </div>

            <Link
              href={cta.button.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff5a36] text-white font-bold text-sm shadow-md shadow-[#ff5a36]/20 hover:bg-[#1a0c2e] transition-all duration-300 shrink-0"
            >
              <span>{cta.button.label}</span>
              <FiArrowRight className="text-base" />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}