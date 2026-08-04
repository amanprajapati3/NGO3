import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/app/component/shared/Banner";
import { EventDetailsProps } from "@/type/typeSection";
import { Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function EventDetails({ data }: EventDetailsProps) {
  const { banner, content, sidebar } = data;

  return (
    <>
      <Banner
        title={banner.title}
        breadcrumbHome={banner.breadcrumbHome}
        breadcrumbCurrent={banner.breadcrumbCurrent}
        image={banner.bgImageUrl}
      />

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-sm mb-6">
              <Image
                src={content.featuredImage}
                alt={content.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Meta Information Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm sm:text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ff5500]" />
                <span>{content.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff5500]" />
                <span>{content.location}</span>
              </div>
            </div>

            {/* Main Title & Intro */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08121e] mb-4">
              {content.title}
            </h1>

            <p className="text-gray-500 text-sm sm:text-sm md:text-base leading-relaxed mb-8">
              {content.intro}
            </p>

            {/* Summary Section */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#08121e] mb-3">
              {content.summaryTitle}
            </h2>

            <p className="text-gray-500 text-sm sm:text-sm md:text-base leading-relaxed mb-8">
              {content.summaryDesc}
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {content.checklists.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff5500] shrink-0" />
                  <span className="text-sm sm:text-sm font-bold text-[#08121e]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            {content.gallery && content.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {content.gallery.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="relative h-60 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <Image
                      src={imgUrl}
                      alt={`Event detail image ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33.33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Embedded Google Map */}
            {content.mapLocation && (
              <div className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Event Location Map"
                  src={content.mapLocation.iframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Recent Posts Card */}
            {sidebar.recentPosts && sidebar.recentPosts.length > 0 && (
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#08121e] mb-6 pb-2 border-b border-gray-200">
                  {sidebar.recentPostsTitle}
                </h3>

                <div className="space-y-4">
                  {sidebar.recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-4 items-center group">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="64px"
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-1">
                          <Calendar className="w-3 h-3 text-[#ff5500]" />
                          <span>{post.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#08121e] group-hover:text-[#ff5500] transition-colors line-clamp-2">
                          <Link href={post.slug}>{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Promotional Widget Card */}
            {sidebar.promoWidget && (
              <div className="relative bg-[#061426] rounded-2xl p-8 text-white overflow-hidden shadow-lg min-h-[340px] flex flex-col justify-center items-center text-center">
                {/* Background Accent Graphics */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/10 rounded-full filter blur-2xl" />

                <div className="mb-4">
                  <span className="text-sm font-bold text-[#ff5500] uppercase tracking-wider">
                    {sidebar.promoWidget.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold mb-8 leading-snug">
                  {sidebar.promoWidget.title}
                </h3>

                <Link
                  href={sidebar.promoWidget.buttonHref}
                  className="inline-flex items-center gap-2 bg-[#ff5500] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#e04b00] transition-colors shadow-md"
                >
                  <span>{sidebar.promoWidget.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}