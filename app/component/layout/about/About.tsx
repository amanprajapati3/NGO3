import Banner from "@/app/component/shared/Banner";
import AboutSection from "@/app/component/homelayout/AboutSection";
import Choose from "../choose/Choose";
import HowWeHelp from "../howwehelp/HowWeHelp";
import Facts from "../facts/Facts";

import {
  AboutPageProps,
  WhyChooseUsProps,
  HowWeHelpProps,
  FactsProps,
} from "@/type/typeSection";

interface AboutUsProps {
  data: AboutPageProps["data"];
  choose: WhyChooseUsProps["data"];
  howWeHelp: HowWeHelpProps["data"];
  facts: FactsProps["data"];
}

export default function AboutUs({
  data,
  choose,
  howWeHelp,
  facts,
}: AboutUsProps) {
  return (
    <>
      {/* Page Banner */}
      <Banner
        title={data.banner.breadcrumbCurrent}
        breadcrumbHome={data.banner.breadcrumbHome}
        breadcrumbCurrent={data.banner.breadcrumbCurrent}
        image={data.banner.bgImageUrl}
      />

      {/* About Section */}
      <AboutSection data={data} />

      {/* How We Help Section */}
      <HowWeHelp data={howWeHelp} />

      {/* Why Choose Us Section */}
      <Choose data={choose} />

      {/* Facts Section */}
      <Facts data={facts} />
    </>
  );
}