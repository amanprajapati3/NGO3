import { ServiceData, StatsData, TestimonialData } from "@/type/typeSection";
import Banner from "../../shared/Banner";
import ServicesSection from "../../homelayout/ServicesSection";
import Stats from "../../shared/Stats";
import TestimonialSection from "../../homelayout/TestimonialSection";

interface ServiceComponentProps {
  data: ServiceData;
  statsData: StatsData;
  testimonial:TestimonialData
}

export default function Service({ data, statsData, testimonial }: ServiceComponentProps) {
  const { banner } = data;

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

      <div className="mb-10">
        <ServicesSection data={data} />
        <div className="mt-12 md:mt-16">
          <Stats data={statsData} />
        </div>
        <div className="">
          <TestimonialSection data={testimonial} />
        </div>
      </div>
    </>
  );
}
