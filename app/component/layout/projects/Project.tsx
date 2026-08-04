"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps, ProjectItem } from "@/type/typeSection";
import Banner from "../../shared/Banner";

// Category Icons matching the visual theme in the layout image
import {
  FaGraduationCap,
  FaHeartbeat,
  FaLeaf,
  FaUsers,
  FaBriefcase,
  FaHandsHelping,
  FaThLarge,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaHandshake,
} from "react-icons/fa";

export default function Projects({ data }: ProjectsProps) {
  // Destructure banner directly from data as per the provided interface
  const { banner, categories, ctaSection, projects } = data;

  // Active Category State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  // Icon mapping helper
  const getCategoryIcon = (id: string) => {
    switch (id.toLowerCase()) {
      case "education":
        return <FaGraduationCap className="text-3xl text-emerald-600" />;
      case "health":
        return <FaHeartbeat className="text-3xl text-red-600" />;
      case "environment":
        return <FaLeaf className="text-3xl text-green-700" />;
      case "community":
        return <FaUsers className="text-3xl text-blue-700" />;
      case "livelihood":
        return <FaBriefcase className="text-3xl text-taupe-700" />;
      case "support":
        return <FaHandsHelping className="text-3xl text-pink-600" />;
      default:
        return <FaThLarge className="text-3xl text-orange-600" />;
    }
  };

  // Filter projects by active category tab
  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (selectedCategory === "all") return projects;
    return projects.filter(
      (proj) => proj.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [projects, selectedCategory]);

  // Calculate pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProjects, currentPage]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Shared Hero Banner */}
      {banner && (
        <Banner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          image={banner.bgImageUrl}
        />
      )}

      {/* Main Content Area */}
      <section className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Category Filter — mobile dropdown / tablet horizontal scroll / desktop wrap */}
          {categories && (
            <div className="w-full">
              {/* Mobile (<640px): centered dropdown */}
              <div className="flex sm:hidden justify-center">
                <div className="relative w-full max-w-xs">
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff5722]/30 focus:border-[#ff5722] transition-colors"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <FaChevronDown className="text-xs" />
                  </div>
                </div>
              </div>

              {/* Tablet (640px–1024px): horizontal scroll if overflowing */}
              <div
                className="hidden sm:block lg:hidden overflow-x-auto [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                <div className="inline-flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mx-auto w-max min-w-full justify-center">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`flex shrink-0 whitespace-nowrap items-center cursor-pointer gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-[#ff5722] text-white shadow-md shadow-[#ff5722]/30 scale-[1.02]"
                            : "bg-transparent text-gray-600 hover:text-[#ff5722] hover:bg-orange-50 border border-transparent"
                        }`}
                      >
                        <span>{getCategoryIcon(cat.id)}</span>
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop (1024px+): wrap, centered */}
              <div className="hidden lg:flex flex-wrap items-center justify-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`flex items-center cursor-pointer gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-[#ff5722] text-white shadow-md shadow-[#ff5722]/30 scale-[1.02]"
                          : "bg-transparent text-gray-600 hover:text-[#ff5722] hover:bg-orange-50 border border-transparent"
                      }`}
                    >
                      <span>{getCategoryIcon(cat.id)}</span>
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.length > 0 ? (
              currentProjects.map((project: ProjectItem) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-[235px] w-full overflow-visible">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />

                    {/* Floating Category Icon */}
                    <div
                      className="absolute left-5 bottom-[-30px] z-20 w-[62px] h-[62px] rounded-full bg-white border border-[#ff5722]/10 shadow-[0_3px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#ff5722]"
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>
                  </div>
                  <div className="px-5 sm:px-6 pt-12 pb-5 flex-1 flex flex-col">
                    {/* Title */}
                    <h3
                      className="text-[19px] sm:text-xl min-h-[60] font-bold text-[#172033] leading-[1.3] group-hover:text-[#ff5722] transition-colors duration-300"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[15px]  text-gray-500 mt-4 leading-[1.9] line-clamp-3"
                    >
                      {project.description}
                    </p>

                    {/* Read More */}
                    <div className="mt-auto pt-6">
                      <Link
                        href={project.slug}
                        className=" inline-flex items-center gap-5 text-[#ff5722] font-bold text-[15px] hover:gap-6 transition-all duration-300 "
                      >
                        <span>Read More</span>

                        <FaArrowRight className="text-[15px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                No projects found for this category.
              </div>
            )}
          </div>

          {/* Call-To-Action Banner */}
          {ctaSection && (
            <div className="bg-[#fff7f4] border border-[#ffebd0] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#ff5722] text-white flex items-center justify-center text-2xl shrink-0 shadow-md">
                  <FaHandshake />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {ctaSection.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {ctaSection.description}
                  </p>
                </div>
              </div>
              <Link
                href={ctaSection.buttonLink || "/contact"}
                className="bg-[#ff5722] hover:bg-[#e04818] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 shrink-0 shadow-md shadow-[#ff5722]/20"
              >
                {ctaSection.buttonText}
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          )}

          {/* Pagination Component */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 cursor-pointer rounded-xl border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous Page"
              >
                <FaChevronLeft className="text-xs" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl  cursor-pointer font-semibold text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#ff5722] text-white shadow-md shadow-[#ff5722]/20"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-xl cursor-pointer border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next Page"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}