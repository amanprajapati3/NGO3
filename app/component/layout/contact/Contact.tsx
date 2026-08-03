import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Share2, 
  Send, 
  User, 
  MessageSquare, 
  ChevronRight,
} from 'lucide-react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


import { ContactSectionProps } from "@/type/typeSection"; // Adjust import path as needed
import { HandHeart } from '../../shared/Icons';
import Banner from "@/app/component/shared/Banner";

export default function Contact({ data }: ContactSectionProps) {
  const { banner, heading, officeInfo, formLabels, map } = data;

  return (
    <div className="w-full bg-white text-[#1c1c1c] font-sans antialiased">
      {/* Hero Banner */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* Main Content Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading, Info Cards, Map */}
          <div className="lg:col-span-6 space-y-10">
            {/* Header Text */}
            <div>
            <div className="flex justify-center items-center md:justify-start gap-2 text-emerald-700 font-semibold text-base sm:text-lg">
              <HandHeart className="w-8 h-8 text-emerald-600" />
              <span className="italic font-serif">{heading.pretitle}</span>
            </div>
              <h2 className="text-3xl text-center md:text-start md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">
                {heading.title}
              </h2>
              <p className="text-slate-600 text-center md:text-start leading-relaxed text-sm md:text-base">
                {heading.desc}
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {officeInfo.map((item, index) => (
                <div key={index} className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/60 flex items-start gap-4">
                  <div className="p-3 bg-emerald-100/70 text-emerald-700 rounded-full shrink-0">
                    {item.iconTitle.toLowerCase() === 'location' && <MapPin className="w-5 h-5" />}
                    {item.iconTitle.toLowerCase() === 'phone' && <Phone className="w-5 h-5" />}
                    {item.iconTitle.toLowerCase() === 'email' && <Mail className="w-5 h-5" />}
                    {item.iconTitle.toLowerCase() === 'social' && <Share2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{item.iconTitle}</h3>
                    {item.values?.map((val, idx) => (
                      <p key={idx} className="text-sm text-slate-500 leading-snug">{val}</p>
                    ))}
                    {item.socialLinks && (
                      <div className="flex items-center gap-2 mt-2">
                        <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-emerald-600 border border-slate-200 text-sm transition-colors">
                          <FaFacebookF className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-emerald-600 border border-slate-200 font-bold text-sm transition-colors">
                          <FaInstagramSquare className="w-3.5 h-3.5"/>
                        </a>
                        <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-emerald-600 border border-slate-200 text-sm transition-colors">
                          <FaLinkedin className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-emerald-600 border border-slate-200 text-sm transition-colors">
                          <FaTwitter className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Interactive Map Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 h-72">
              <iframe 
                title={map.title}
                src={map.embedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
              
              <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[220px]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    {map.address}
                  </p>
                </div>
                {map.directionsUrl && (
                  <a 
                    href={map.directionsUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 font-bold mt-2 hover:underline"
                  >
                    {map.directionsText || 'Get Directions'} &rarr;
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-white p-3 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 relative">
            <div className="w-12 h-12 rounded-full bg-emerald-100/60 flex items-center justify-center text-emerald-600 mb-6">
              <Send className="w-5 h-5 -rotate-12" />
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              {formLabels.title}
            </h3>
            <p className="text-slate-500 text-sm md:text-sm mb-1">
              {formLabels.subtitle}
            </p>
            <p className="text-slate-500 text-sm md:text-sm mb-8">
              {formLabels.note}
            </p>

            <form className="space-y-4" >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={formLabels.namePlaceholder} 
                  className="w-full py-3.5 px-4 pr-10 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                  required
                />
                <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  placeholder={formLabels.emailPlaceholder} 
                  className="w-full py-3.5 px-4 pr-10 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                  required
                />
                <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  placeholder={formLabels.phonePlaceholder} 
                  className="w-full py-3.5 px-4 pr-10 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                />
                <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <textarea 
                  rows={4}
                  placeholder={formLabels.messagePlaceholder} 
                  className="w-full py-3.5 px-4 pr-10 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 resize-none"
                  required
                ></textarea>
                <MessageSquare className="w-4 h-4 text-slate-400 absolute right-3.5 top-5 pointer-events-none" />
              </div>

              <button 
                type="submit" 
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg mt-4 cursor-pointer"
              >
                {formLabels.buttonText}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}