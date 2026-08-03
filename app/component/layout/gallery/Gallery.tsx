"use client";

import React, { useState } from "react";
import Image from "next/image";
import Banner from "@/app/component/shared/Banner";
import { GalleryProps, GalleryItem } from "@/type/typeSection";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { HandHeart } from "../../shared/Icons";

export default function Gallery({ data }: GalleryProps) {
  const { banner, items = [], videoItems = [], title, pretitle } = data;

  // Lightbox state for images
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  // Lightbox state for videos
  const [activeVideo, setActiveVideo] = useState<GalleryItem | null>(null);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? items.length - 1 : (prev as number) - 1,
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === items.length - 1 ? 0 : (prev as number) + 1,
      );
    }
  };

  // Helper function to extract YouTube embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    // Handles standard embed links
    if (url.includes("youtube.com/embed/")) {
      return url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
    }

    // Handles standard watch links (https://www.youtube.com/watch?v=VIDEO_ID)
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&enablejsapi=1`
      : url;
  };

  return (
    <>
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans">
        {/* Section Header */}
        <div className="text-center  mx-auto mb-10">
          <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold text-base sm:text-lg ">
            <HandHeart className="w-8 h-8 text-emerald-600" />
            <span className="italic font-serif">{pretitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08121e]">
            {title}
          </h2>
        </div>
        <div className="max-w-6xl mx-auto space-y-10">
          {/* IMAGE GALLERY SECTION */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImageIndex(index)}
                  className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* VIDEO GALLERY SECTION HEADER */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08121e]">
                {title}
              </h2>
            </div>

            {/* VIDEO GALLERY GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videoItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideo(item)}
                  className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    {/* Play Button Icon Overlay */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ff5500] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX DIALOGUE */}
      {selectedImageIndex !== null && items[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 cursor-pointer text-white/80 hover:text-white p-2 rounded-full bg-black/40 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white cursor-pointer p-3 rounded-full bg-black/50 hover:bg-[#ff5500] transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Main Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[selectedImageIndex].image}
              alt={items[selectedImageIndex].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-medium bg-black/60 py-2">
              {items[selectedImageIndex].alt}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-4 cursor-pointer text-white p-3 rounded-full bg-black/50 hover:bg-[#ff5500] transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* VIDEO LIGHTBOX DIALOGUE */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 cursor-pointer right-6 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-[#ff5500] transition-colors z-20"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Video Player Box */}
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={getEmbedUrl(activeVideo.videoUrl || "")}
              title={activeVideo.alt}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
