"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Heart,
  HandHeart,
} from "lucide-react";
import { DonateData, DonateProps, StatsData } from "@/type/typeSection";
import Stats from "../../shared/Stats";
import Banner from "../../shared/Banner";



export default function Donate({ data,}: DonateProps) {
  if (!data) return null;

  const { banner, content, sidebar } = data;

  // Selected Amount State
  const [selectedAmount, setSelectedAmount] = useState<string>(
    content?.amounts?.find((a) => a.isSelected)?.amount || "$ 100"
  );
  const [customAmount, setCustomAmount] = useState<string>("");

  // Selected Payment Method State
  const [paymentMethod, setPaymentMethod] = useState<string>(
    content?.paymentMethods?.find((p) => p.isDefault)?.value || "test"
  );

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmountClick = (amt: string) => {
    setSelectedAmount(amt);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount("");
  };

  return (
    <div className="w-full bg-[#fcfcfc] text-slate-800 font-sans antialiased min-h-screen">
      {/* 1. Page Hero Banner */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* 2. Main Container (Main Form + Right Sidebar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Donation Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            
            {/* Hero Image Card Header */}
            {content?.heroCard && (
              <div className="relative w-full h-[220px] sm:h-[300px] md:h-[340px]">
                <Image
                  src={content.heroCard.imageUrl}
                  alt="Donation Hero"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 text-white flex items-center gap-3.5 max-w-[260px] sm:max-w-xs">
                  <div className="p-2.5 bg-orange-500/80 rounded-xl text-white shrink-0">
                    <HandHeart className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-sm font-bold tracking-wider text-orange-300 uppercase">
                      {content.heroCard.badgeText}
                    </span>
                    <p className="text-sm sm:text-sm font-semibold leading-snug">
                      {content.heroCard.subtext}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Donation Form Body */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              
              {/* Heading & Subtitle */}
              <div className="space-y-3">
                {content?.sectionBadge && (
                  <div className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-orange-500 uppercase">
                    <Heart className="w-4 h-4 fill-orange-500" />
                    <span>{content.sectionBadge}</span>
                  </div>
                )}

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {content?.title}{" "}
                  <span className="text-orange-500">
                    {content?.highlightedTitleWord}
                  </span>
                </h1>

                {content?.description && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {content.description}
                  </p>
                )}
              </div>

              {/* SECTION: Choose Donation Amount */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {content?.amountSectionTitle || "Choose your donation amount"}
                </h3>

                {/* Custom Amount Input */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-slate-400">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder={
                      content?.customAmountPlaceholder || "Enter custom amount"
                    }
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-9 pr-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Preset Amount Grid */}
                {content?.amounts && (
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
                    {content.amounts.map((amtObj, idx) => {
                      const isSelected = selectedAmount === amtObj.amount;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleAmountClick(amtObj.amount)}
                          className={`py-3 px-2 rounded-xl text-sm sm:text-sm font-bold border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20"
                              : "bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-300 hover:bg-slate-100/70"
                          }`}
                        >
                          {amtObj.amount}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* SECTION: Select Payment Method */}
              {content?.paymentMethods && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-sm flex items-center justify-center font-bold">
                      💳
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {content?.paymentSectionTitle || "Select payment method"}
                    </h3>
                  </div>

                  <div className="p-2 sm:p-3 bg-slate-50/70 border border-slate-100 rounded-2xl flex flex-wrap gap-4 sm:gap-8">
                    {content.paymentMethods.map((pm) => (
                      <label
                        key={pm.id}
                        className="inline-flex items-center gap-2.5 text-sm sm:text-sm font-semibold text-slate-700 cursor-pointer py-1 px-2"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={pm.value}
                          checked={paymentMethod === pm.value}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-slate-300"
                        />
                        <span>{pm.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: Personal Information */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-sm flex items-center justify-center font-bold">
                    👤
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {content?.personalInfoTitle || "Personal information"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={
                      content?.formFields?.firstNamePlaceholder || "First name"
                    }
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={
                      content?.formFields?.lastNamePlaceholder || "Last name"
                    }
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder={
                    content?.formFields?.emailPlaceholder || "Enter your e-mail"
                  }
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder={
                    content?.formFields?.phonePlaceholder || "Enter your phone no."
                  }
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder={
                    content?.formFields?.messagePlaceholder ||
                    "Write a message (optional)"
                  }
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button & Security Notice */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-orange-500/25 group cursor-pointer"
                >
                  <span>
                    {content?.formFields?.submitButtonText || "Donate Now"}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                  <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    {content?.formFields?.securityNotice ||
                      "Your donation is secure and encrypted"}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sidebar Widget 1: Search Here */}
            {sidebar?.searchPlaceholder && (
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 border-b border-orange-500 pb-2 inline-block">
                  Search Here
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={sidebar.searchPlaceholder}
                    className="w-full pl-4 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-500">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Sidebar Widget 2: Recent Causes */}
            {sidebar?.recentCauses && sidebar.recentCauses.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-slate-900 border-b border-orange-500 pb-2 inline-block">
                  {sidebar.recentCausesTitle || "Recent Causes"}
                </h3>

                <div className="space-y-4">
                  {sidebar.recentCauses.map((item) => (
                    <Link
                      key={item.id}
                      href={item.slug || "#"}
                      className="flex items-center gap-3.5 group"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          sizes="64px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.date}</span>
                        </div>
                        <h4 className="text-sm sm:text-sm font-bold text-slate-800 group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>

                {sidebar.viewAllLinkText && (
                  <Link
                    href={sidebar.viewAllLinkUrl || "/causes"}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors pt-2"
                  >
                    <span>{sidebar.viewAllLinkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            )}

            {/* Sidebar Widget 3: Promo Card Banner */}
            {sidebar?.promoBanner && (
              <div className="relative bg-[#031b33] rounded-3xl p-8 text-white overflow-hidden shadow-md flex flex-col items-center text-center space-y-5">
                {/* Visual Icon Header */}
                <div className="p-3 bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">
                  <HandHeart className="w-10 h-10 text-orange-400 stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-orange-300 tracking-wide uppercase">
                    {sidebar.promoBanner.tagline}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {sidebar.promoBanner.title}
                  </h3>
                </div>

                <Link
                  href={sidebar.promoBanner.buttonUrl || "/contact"}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-sm px-6 py-3 rounded-full transition-all shadow-md group mt-2"
                >
                  <span>{sidebar.promoBanner.buttonText}</span>
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}