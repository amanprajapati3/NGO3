import React from "react";
import Image from "next/image";
import Banner from "@/app/component/shared/Banner";
import { MissionPageProps } from "@/type/typeSection";
import { GraduationCap, Briefcase, IndianRupee, Users2, Globe2, Target, Heart } from "lucide-react";
import { HandHeart } from "../../shared/Icons";

const renderIcon = (icon: string) => {
  const iconProps = { className: "w-5 md:w-12 md:h-12 h-5 text-[#005c36]" };
  switch (icon) {
    case "education":
      return <GraduationCap {...iconProps} />;
    case "skill":
      return <Briefcase className="w-5 h-5 md:w-12 md:h-12 text-[#ff5500]" />;
    case "finance":
      return <IndianRupee {...iconProps} />;
    case "community":
      return <Users2 className="w-5 h-5 md:w-12 md:h-12 text-[#ff5500]" />;
    case "transform":
      return <Globe2 {...iconProps} />;
    default:
      return <GraduationCap {...iconProps} />;
  }
};

export default function Mission({ data }: MissionPageProps) {
  return (
    <>
      {/* Reusable Banner */}
      <Banner
        title={data.title}
        breadcrumbHome={data.breadcrumbHome}
        breadcrumbCurrent={data.breadcrumbCurrent}
        image={data.bannerImage}
      />

      {/* Main Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text & Steps */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
              <HandHeart className="w-8 h-8 text-emerald-600" />
              <span className="italic font-serif">{data.eyebrow}</span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl text-center md:text-start lg:text-5xl font-extrabold text-[#08121e] leading-tight mb-4">
              {data.sectionTitle}{" "}
              <span className="text-[#005c36] block sm:inline">{data.highlightedTitle}</span>
            </h2>



            <p className="text-gray-600 text-sm text-center md:text-start sm:text-base leading-relaxed mb-8 ">
              {data.sectionText}
            </p>

            {/* Vertical Timeline List */}
            <div className="relative pl-3 space-y-6">
              {data.highlights.map((item, index) => {
                const isLast = index === data.highlights.length - 1;
                return (
                  <div key={item.id || index} className="relative flex items-start gap-4">
                    
                    {/* Vertical Connector Line */}
                    {!isLast && (
                      <div className="absolute left-5 top-10 w-[2px] h-[calc(100%+12px)] bg-dashed border-l-2 border-dashed border-gray-200" />
                    )}

                    {/* Circle Icon Badge */}
                    <div className="relative z-10 w-10 h-10 md:w-20 md:h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
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

          </div>

          {/* Right Side: Large Rounded Card Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={data.sectionImage}
                alt={data.sectionTitle}
                width={700}
                sizes="(min-width: 1024px) 50vw, 512px"
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