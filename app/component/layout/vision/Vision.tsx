import React from "react";
import Image from "next/image";
import Banner from "@/app/component/shared/Banner";
import { VisionProps } from "@/type/typeSection";
import { Eye, Telescope, Flag, Users, Heart, Quote } from "lucide-react";
import { HandHeart } from "../../shared/Icons";

const renderIcon = (icon: string) => {
  const iconProps = { className: "w-5 md:w-12 md:h-12 h-5 text-[#005c36]" };
  switch (icon) {
    case "telescope":
      return <Telescope {...iconProps} />;
    case "flag":
      return <Flag className="w-5 h-5 md:w-12 md:h-12 text-[#ff5500]" />;
    case "users":
      return <Users {...iconProps} />;
    case "eye":
      return <Eye className="w-4 h-4 md:w-12 md:h-12 text-[#ff5500]" />;
    default:
      return <Eye {...iconProps} />;
  }
};

export default function Vision({ data }: VisionProps) {
  const { banner, introduction, visionCards, quote } = data;

  return (
    <>
      {/* Reusable Banner using exact banner object */}
      <Banner
        title={banner.breadcrumbCurrent}
        breadcrumbHome={banner.breadcrumbHome}
        breadcrumbCurrent={banner.breadcrumbCurrent}
        image={banner.bgImageUrl}
      />

      {/* Main Vision Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text & Steps */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
              <HandHeart className="w-8 h-8 text-emerald-600" />
              <span className="italic font-serif">{data.introduction.title}</span>
            </div>


            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: introduction.headingColor || "#08121e" }}>
              {introduction.heading.line1}{" "}
              <span style={{ color: introduction.highlightColor || "#005c36" }} className="block sm:inline">
                {introduction.heading.highlight}
              </span>
            </h2>


            <p className="text-gray-900 font-semibold text-base sm:text-lg leading-relaxed mb-2 max-w-xl">
              {introduction.mainStatement}
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {introduction.description}
            </p>

            {/* Vertical Timeline List */}
            <div className="relative pl-3 space-y-6 mb-8">
              {visionCards.map((item, index) => {
                const isLast = index === visionCards.length - 1;
                return (
                  <div key={item.id || index} className="relative flex items-start gap-4">
                    
                    {/* Vertical Connector Line */}
                    {!isLast && (
                      <div className="absolute left-5 top-10 w-[2px] h-[calc(100%+12px)] border-l-2 border-dashed border-gray-200" />
                    )}

                    {/* Circle Icon Badge */}
                    <div className="relative z-10 w-10 md:w-20 md:h-20 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      {renderIcon(item.icon)}
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="text-base font-bold text-[#08121e] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-sm text-gray-500 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Quote Block */}
            {quote && (
              <div className="relative p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-4">
                <Quote className="w-8 h-8 text-[#C99524] shrink-0 rotate-180" />
                <p className="text-sm font-medium italic text-slate-800 leading-relaxed">
                  {quote.text}
                </p>
              </div>
            )}

          </div>

          {/* Right Side: Featured Main Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={visionCards[0]?.image.src || banner.bgImageUrl}
                alt={visionCards[0]?.image.alt || "Our Vision"}
                width={700}
                height={850}
                className="w-full h-[480px] sm:h-[620px] object-cover rounded-[2.5rem]"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}