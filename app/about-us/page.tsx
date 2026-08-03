import AboutUs from "../component/layout/about/About";
import data from "@/data/data.json";
import {
  AboutPageData,
  WhyChooseUsData,
  HowWeHelpProps,
  FactsProps,
} from "@/type/typeSection";

export default function AboutPage() {
  const about = data.AboutPage as AboutPageData;
  const choose = data.whyChooseUs as WhyChooseUsData;
  const howWeHelp = data.howWeHelp as HowWeHelpProps["data"];
  const facts = data.facts as FactsProps["data"];

  return (
    <>
      <AboutUs
        data={about}
        choose={choose}
        howWeHelp={howWeHelp}
        facts={facts}
      />
    </>
  );
}