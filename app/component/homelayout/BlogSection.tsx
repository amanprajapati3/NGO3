"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogProps } from "@/type/typeSection";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { HandHeart } from "../shared/Icons";

export default function BlogSection({ data }: BlogProps) {
  if (!data) return null;

  const { pretitle, title, desc, button, posts } = data;

  // Display only the first 3 posts for the homepage section
  const featuredPosts = posts?.slice(0, 3) || [];

  return (
    <section className="w-full py-8 md:py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADER
        ========================================================== */}
        <div className="text-center max-w-2xl mx-auto sm:mb-10">
          {/* Pretitle with Heart Icon */}
          
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
              <HandHeart className="w-8 h-8 text-emerald-600" />
              <span className="italic font-serif">{pretitle}</span>
            </div>

          {/* Main Title */}
          <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-extrabold text-[#081E38]">
            {title ? (
              <>
                {title.replace(/Our Blog/i, "")}{" "}
                <span className="text-[#E56A00] relative inline-block">
                  Our Blog
                </span>
              </>
            ) : (
              "Latest from Our Blog"
            )}
          </h2>

          {/* Description */}
          {desc && (
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
              {desc}
            </p>
          )}
        </div>

        {/* =========================================================
            BLOG CARDS GRID (3 Columns)
        ========================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-8 sm:mt-0">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 group"
            >
              {/* Image Container with Category Badge */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Pill Badge */}
                {post.category && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full text-sm font-semibold text-white bg-[#E56A00]/90 shadow-md backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-sm text-[#E56A00] font-semibold mb-3">
                    <FaCalendarAlt className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#081E38] line-clamp-2 leading-snug mb-3 group-hover:text-[#E56A00] transition-colors duration-200">
                    <Link href={post.slug || "/blog"}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                  <Link
                    href={post.slug || "/blog"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E56A00] hover:text-[#081E38] transition-colors duration-200 group/link"
                  >
                    <span>Read More</span>
                    <span className="w-6 h-6 rounded-full bg-[#E56A00] text-white flex items-center justify-center text-sm transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:bg-[#081E38]">
                      <FaArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            BOTTOM CTA BUTTON
        ========================================================== */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-[#E56A00] hover:bg-[#c95b00] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <span>{button?.label || "View All Blogs"}</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
