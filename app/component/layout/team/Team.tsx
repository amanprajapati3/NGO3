import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/app/component/shared/Banner";
import { TeamData } from "@/type/typeSection";
import { Plus, Heart } from "lucide-react";
import { HandHeart } from "../../shared/Icons";

interface TeamProps {
  data: TeamData;
}

export default function Team({ data }: TeamProps) {
  const { banner, heading, members } = data;

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
          {/* Section Header */}
          <div className="text-center   mb-8 relative">
             <div className="flex items-center justify-center  gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
               <HandHeart className="w-8 h-8 text-emerald-600" />
               <span className="italic font-serif">{data.heading.pretitle}</span>
             </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08121e]">
              {heading.title}
            </h2>

            {/* Decorative Heart Icon */}
            <div className="absolute -right-4 -top-2 hidden md:block">
              <Heart className="w-10 h-10 text-emerald-200 stroke-[1.5]" />
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="group relative bg-[#f8f9fa] rounded-2xl overflow-hidden p-3 transition-all duration-300 hover:shadow-lg"
              >
                {/* Member Image Wrapper */}
                <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Plus Action Badge */}
                  <Link
                    href={member.href}
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#0d2a20] group-hover:bg-[#ffaa00] text-white group-hover:text-black flex items-center justify-center shadow-md transition-colors duration-300"
                  >
                    <Plus className="w-5 h-5" />
                  </Link>
                </div>

                {/* Card Content */}
                <div className="pt-4 pb-2 px-2">
                  <h3 className="text-lg font-bold text-[#08121e] group-hover:text-[#005c36] transition-colors">
                    <Link href={member.href}>{member.name}</Link>
                  </h3>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}