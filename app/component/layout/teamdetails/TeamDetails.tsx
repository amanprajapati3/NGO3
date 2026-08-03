"use client";

import React, { useState } from "react";
import Image from "next/image";
import Banner from "@/app/component/shared/Banner";
import { TeamDetailsData } from "@/type/typeSection";
import { CheckCircle2 } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface TeamDetailsProps {
  data: TeamDetailsData;
}

export default function teamdetails({ data }: TeamDetailsProps) {
  const {
    banner,
    name,
    role,
    image,
    contactInfo,
    tabs,
    personalExperience,
  } = data;

  // Set default active tab ID to "professional-skills" as matching the design
  const [activeTabId, setActiveTabId] = useState<string>(
    tabs[1]?.id || tabs[0]?.id || ""
  );

  const activeTabData = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <Banner
        title={banner.title}
        breadcrumbHome={banner.breadcrumbHome}
        breadcrumbCurrent={banner.breadcrumbCurrent}
        image={banner.bgImageUrl}
      />

      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Top Profile Card Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-8">
            {/* Left Image */}
            <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 flex flex-col justify-center pt-2">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#08121e]">
                    {name}
                  </h1>
                  <p className="text-sm font-medium text-gray-500 mt-1">
                    {role}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  <a
                    href={data.socialLinks.twitter}
                    className="w-8 h-8 rounded-full bg-[#ff5500] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={data.socialLinks.facebook}
                    className="w-8 h-8 rounded-full bg-[#ff5500] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={data.socialLinks.instagram}
                    className="w-8 h-8 rounded-full bg-[#ff5500] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Contact Information Box */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 my-6 flex flex-col gap-4">
                <div>
                  <span className="text-sm font-bold text-black uppercase">
                    Phone No:
                  </span>
                  <span className="text-sm text-gray-600 ml-2">
                    {contactInfo.phone}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold text-black uppercase">
                    E-Mail :
                  </span>
                  <span className="text-sm text-gray-600 ml-2">
                    {contactInfo.email}
                  </span>
                </div>
              </div>

              {/* Dynamic Tabs Header */}
              <div className="border-b border-gray-200 mb-6 flex gap-8">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`pb-3 text-sm cursor-pointer sm:text-sm font-bold tracking-wide transition-colors ${
                        isActive
                          ? "text-[#ff5500] border-b-2 border-[#ff5500]"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Tab Content */}
              {activeTabData && (
                <div className="space-y-6">
                  <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
                    {activeTabData.description}
                  </p>

                  <div className="space-y-5">
                    {activeTabData.skills.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm sm:text-sm font-bold text-[#08121e] mb-2">
                          <span>{item.skill}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[#ff5500] h-full rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Personal Experience Section */}
          <div className=" border-t border-gray-100 pt-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08121e] mb-4">
              {personalExperience.title}
            </h2>
            <p className="text-sm sm:text-sm text-gray-500 leading-relaxed mb-8 max-w-6xl">
              "{personalExperience.description}"
            </p>

            {/* Checkmark List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
              {personalExperience.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <span className="text-sm sm:text-sm font-bold text-[#08121e]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}