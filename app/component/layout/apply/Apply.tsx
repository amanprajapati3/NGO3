"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiUploadCloud,
  FiSend,
  FiGlobe,
  FiPaperclip,
  FiCheckCircle,
  FiCalendar,
  FiAward,
  FiHeart,
  FiShield,
  FiUsers,
  FiLock,
} from "react-icons/fi";
import type { JobApplyprops } from "@/type/typeSection";
import Banner from "../../shared/Banner";

// Icon mapper with scaled up icon dimensions for sideCard & bottomTrustBadges
const renderDynamicIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "FiAward":
      return <FiAward className={className} />;
    case "FiHeart":
      return <FiHeart className={className} />;
    case "FiShield":
      return <FiShield className={className} />;
    case "FiUsers":
      return <FiUsers className={className} />;
    case "FiLock":
      return <FiLock className={className} />;
    default:
      return <FiAward className={className} />;
  }
};

export default function Apply({ data }: JobApplyprops) {
  const { banner, header, form, sideCard, bottomTrustBadges } = data;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    positionAppliedFor: "",
    currentLocation: "",
    yearsOfExperience: "",
    preferredJoiningDate: "",
    linkedinPortfolio: "",
    description: "",
    termsAccepted: false,
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="w-full bg-[#fcfcfd] overflow-hidden text-base">
      {/* Banner Component */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Feature Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] rounded-3xl overflow-hidden mb-8 shadow-sm">
          <Image
            src="/NGO_Images/happy-diverse-kinds-park.jpg"
            alt="Join Our Team"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Dynamic Header Title & Subtitle */}
        {header && (
          <div className="pb-8 mb-8 border-b border-gray-200">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a0c2e]">
              {header.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-medium mt-2">
              {header.subtitle}
            </p>
          </div>
        )}

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Dynamic Application Form */}
          <div className="lg:col-span-8">
            {isSubmitted ? (
              <div className="bg-[#eaf5eb] border border-[#2ba048]/20 rounded-3xl p-8 sm:p-12 text-center space-y-5">
                <div className="w-20 h-20 bg-[#2ba048] text-white rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
                  <FiCheckCircle />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a0c2e]">
                  Application Submitted Successfully!
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto">
                  Thank you for applying. Our recruitment team will review your application and get back to you shortly.
                </p>
                <Link
                  href="/careers"
                  className="inline-block mt-4 px-8 py-3 bg-[#03513a] text-white rounded-xl font-bold text-base hover:bg-[#1a0c2e] transition-all shadow-sm"
                >
                  Back to Careers
                </Link>
              </div>
            ) : (
              form && (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 space-y-7 shadow-xs"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#1a0c2e] border-b border-gray-100 pb-4">
                    Personal & Position Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiUser className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.fullNameLabel} *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={form.fullNamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiMail className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.emailLabel} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiPhone className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.contactNumberLabel} *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-base font-bold text-gray-600">
                          {form.defaultCountryCode || "+91"}
                        </span>
                        <input
                          type="tel"
                          name="contactNumber"
                          required
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          placeholder={form.contactNumberPlaceholder}
                          className="w-full px-4 py-3 rounded-r-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                        />
                      </div>
                    </div>

                    {/* Position Applied For */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiBriefcase className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.positionAppliedForLabel} *
                      </label>
                      <input
                        type="text"
                        name="positionAppliedFor"
                        required
                        value={formData.positionAppliedFor}
                        onChange={handleInputChange}
                        placeholder={form.positionPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                      />
                    </div>

                    {/* Current Location */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiMapPin className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.currentLocationLabel} *
                      </label>
                      <input
                        type="text"
                        name="currentLocation"
                        required
                        value={formData.currentLocation}
                        onChange={handleInputChange}
                        placeholder={form.currentLocationPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                      />
                    </div>

                    {/* Years of Experience */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiBriefcase className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.yearsOfExperienceLabel} *
                      </label>
                      <input
                        type="text"
                        name="yearsOfExperience"
                        required
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        placeholder={form.yearsOfExperiencePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                      />
                    </div>

                    {/* Preferred Joining Date */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiCalendar className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.preferredJoiningDateLabel}
                      </label>
                      <input
                        type="date"
                        name="preferredJoiningDate"
                        value={formData.preferredJoiningDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048] bg-white"
                      />
                    </div>

                    {/* LinkedIn / Portfolio */}
                    <div className="space-y-2">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                        <FiGlobe className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                        {form.linkedinPortfolioLabel}
                      </label>
                      <input
                        type="url"
                        name="linkedinPortfolio"
                        value={formData.linkedinPortfolio}
                        onChange={handleInputChange}
                        placeholder={form.linkedinPortfolioPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                      />
                    </div>
                  </div>

                  {/* Description / Additional Cover Letter */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm sm:text-base font-bold text-[#1a0c2e]">
                        {form.descriptionLabel}
                      </label>
                      {form.maxDescriptionLength && (
                        <span className="text-xs sm:text-sm text-gray-500">
                          {formData.description.length} /{" "}
                          {form.maxDescriptionLength} max
                        </span>
                      )}
                    </div>
                    <textarea
                      name="description"
                      rows={5}
                      maxLength={form.maxDescriptionLength || 1000}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder={form.descriptionPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-[#2ba048] focus:ring-1 focus:ring-[#2ba048]"
                    ></textarea>
                  </div>

                  {/* Resume Upload Box */}
                  <div className="space-y-2">
                    <label className="text-sm sm:text-base font-bold text-[#1a0c2e] flex items-center gap-2">
                      <FiPaperclip className="text-[#2ba048] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
                      {form.uploadResumeLabel} *
                    </label>
                    <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-[#2ba048] transition-all bg-[#fdfbf9]">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-14 h-14 rounded-full bg-[#eaf5eb] text-[#2ba048] flex items-center justify-center text-2xl sm:text-3xl">
                          <FiUploadCloud />
                        </div>
                        <p className="text-base sm:text-lg font-bold text-[#1a0c2e]">
                          {resumeFile
                            ? resumeFile.name
                            : form.uploadInstruction || "Click or drag resume here to upload"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {form.uploadFormat || "PDF, DOC, DOCX up to 10MB"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  {form.termsLabel && (
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        name="termsAccepted"
                        required
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-[#2ba048] border-gray-300 rounded focus:ring-[#2ba048] shrink-0"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm sm:text-base text-gray-600 leading-relaxed cursor-pointer"
                      >
                        {form.termsLabel}
                      </label>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#03513a] text-white font-bold text-base sm:text-lg rounded-xl hover:bg-[#1a0c2e] transition-all shadow-md flex items-center justify-center gap-3"
                  >
                    <FiSend className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>{form.submitButtonText || "Submit Application"}</span>
                  </button>
                </form>
              )
            )}
          </div>

          {/* Right Column: SideCard */}
          <aside className="lg:col-span-4 space-y-8">
            {sideCard && (
              <div className="bg-[#f2f7f4] border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#1a0c2e] italic leading-snug">
                    &ldquo;{sideCard.quote}&rdquo;
                  </h4>
                  <p className="text-sm sm:text-base text-[#2ba048] font-bold mt-3">
                    {sideCard.subquote}
                  </p>
                </div>

                <hr className="border-gray-200/80" />

                <div className="space-y-6">
                  {sideCard.features?.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white text-[#2ba048] shadow-xs flex items-center justify-center shrink-0 border border-gray-100">
                        {renderDynamicIcon(feat.icon, "w-6 h-6 sm:w-7 sm:h-7")}
                      </div>
                      <div>
                        <h5 className="text-base sm:text-lg font-bold text-[#1a0c2e]">
                          {feat.title}
                        </h5>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Bottom Trust Badges */}
        {bottomTrustBadges && bottomTrustBadges.length > 0 && (
          <div className="mt-14 pt-10 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottomTrustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200/70 rounded-2xl p-6 flex items-start gap-4 shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#eaf5eb] text-[#2ba048] flex items-center justify-center shrink-0">
                  {renderDynamicIcon(badge.icon, "w-6 h-6 sm:w-7 sm:h-7")}
                </div>
                <div>
                  <h5 className="text-base sm:text-lg font-bold text-[#1a0c2e]">
                    {badge.title}
                  </h5>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-1">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}