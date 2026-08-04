import AboutSection from "../../homelayout/AboutSection";
import Banner from "../../homelayout/Banner";
import data from "@/data/data.json";
import {
  AboutPageData,
  ServiceData,
  WhyChooseUsData,
  StatsData,
  TestimonialData,
  CtaBannerData,
  BlogData,
} from "@/type/typeSection";
import ServicesSection from "../../homelayout/ServicesSection";
import Choose from "../../layout/choose/Choose";
import Stats from "../../shared/Stats"; // Adjust path to match your directory structure
import TestimonialSection from "../../homelayout/TestimonialSection";
import CTABannerSection from "../../homelayout/CTABanner";
import BlogSection from "../../homelayout/BlogSection";

export default function HomeSection() {
  const aboutdata = data.AboutPage as AboutPageData;
  const servicedata = data.service as ServiceData;
  const choosedata = data.whyChooseUs as WhyChooseUsData;
  const statsdata = data.statsData as StatsData;
  const testimonialdata = data.Testimonial as TestimonialData;
  const ctadata = data.CtaBanner as CtaBannerData;
  const blogdata = data.blog as BlogData;

  return (
    <>
      <Banner />
      <AboutSection data={aboutdata} />
      <ServicesSection
        data={servicedata}
        limit={3}
      />
      <Choose data={choosedata} />
      <Stats data={statsdata} />
      <TestimonialSection data={testimonialdata} />
      <CTABannerSection data={ctadata} />
      <BlogSection data={blogdata} />
    </>
  );
}