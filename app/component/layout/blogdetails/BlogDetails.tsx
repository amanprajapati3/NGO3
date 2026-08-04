import React from "react";
import Image from "next/image";
import Banner from "@/app/component/shared/Banner";
import { BlogDetailsData } from "@/type/typeSection";
import { FaQuoteLeft } from "react-icons/fa";

interface BlogDetailsSectionProps {
  data: BlogDetailsData;
}

export default function BlogDetails({ data }: BlogDetailsSectionProps) {
  const { banner, article } = data;

  return (
    <>
      <Banner
        title={banner.title}
        breadcrumbHome={banner.breadcrumbHome}
        breadcrumbCurrent={banner.breadcrumbCurrent}
        image={banner.bgImageUrl}
      />

      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans">
        <div className="max-w-5xl mx-auto">
          {/* Main Featured Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[580px] rounded-3xl overflow-hidden shadow-sm mb-10 md:mb-12">
            <Image
              src={article.featuredImage}
              alt={banner.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Introductory Paragraphs */}
          <div className="space-y-6 text-gray-500 text-sm sm:text-sm md:text-base leading-relaxed mb-10">
            {article.introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Featured Dark Callout Quote Box */}
          <div className="bg-[#040c16] rounded-2xl p-6 sm:p-8 md:p-10 my-10 relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 md:gap-6 shadow-md">
            <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center shrink-0">
              <FaQuoteLeft className="w-8 h-8 text-[#ff5500]" />
            </div>

            <blockquote className="text-white font-bold text-sm sm:text-base md:text-lg leading-relaxed z-10">
              {article.quote}
            </blockquote>
          </div>

          {/* Mid Section Paragraph */}
          <p className="text-gray-500 text-sm sm:text-sm md:text-base leading-relaxed mb-12">
            {article.midParagraph}
          </p>

          {/* Section Header & Description */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08121e] mb-4">
              {article.sectionTitle}
            </h2>

            <p className="text-gray-500 text-sm sm:text-sm md:text-base leading-relaxed mb-8">
              {article.sectionDescription}
            </p>

            {/* Bulleted Key Points */}
            <ul className="space-y-3.5 mb-10 pl-1">
              {article.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#ff5500] shrink-0" />
                  <span className="text-sm sm:text-sm md:text-base font-semibold text-gray-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Concluding Paragraph */}
            <p className="text-gray-500 text-sm sm:text-sm md:text-base leading-relaxed">
              {article.concludingParagraph}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}