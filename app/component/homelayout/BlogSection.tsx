import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogData } from "@/type/typeSection";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { HandHeart } from "../shared/Icons";

interface BlogSectionProps {
  data: BlogData;
  showAll?: boolean;
}

export default function BlogSection({ data, showAll = false }: BlogSectionProps) {
  const { pretitle, title, desc, posts, button } = data;
  const displayPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-9">
          <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
            <HandHeart className="w-8 h-8 text-emerald-600" />
            <span className="italic font-serif">{pretitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08121e] mb-2">
           {title}
          </h2> 

          <p className="text-base sm:text-lg leading-relaxed text-gray-500 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#ff5500] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-[#08121e] group-hover:text-[#ff5500] transition-colors duration-200 line-clamp-2 mb-2">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={post.slug}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5500] hover:text-[#e04b00] transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Hidden on full blog page) */}
        {!showAll && button && (
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-[#ff5500] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#e04b00] transition-colors shadow-md"
            >
              {button.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}