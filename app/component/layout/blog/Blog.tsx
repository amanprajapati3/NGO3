import React from "react";
import Banner from "@/app/component/shared/Banner";
import BlogSection from "@/app/component/homelayout/BlogSection";
import data from "@/data/data.json";
import { BlogData } from "@/type/typeSection";

export default function Blog() {
  const blogData = data.blog as BlogData;

  return (
    <>
      <Banner
        title="Our Blogs"
        breadcrumbHome={blogData.banner.breadcrumbHome}
        breadcrumbCurrent={blogData.banner.breadcrumbCurrent}
        image={blogData.banner.bgImageUrl}
      />
      <BlogSection data={blogData} showAll={true} />
    </>
  );
}