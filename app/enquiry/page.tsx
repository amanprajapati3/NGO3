import data from "@/data/data.json";
import { EnquiryData, StatsData } from "@/type/typeSection";
import Enquiry from "../component/layout/enquiry/Enquiry";

export default function EnquiryPage() {
  const enquiry = data.enquiry as EnquiryData;
  const statsData = data.statsData as StatsData;

  return (
    <>
      <Enquiry data={enquiry} statsData={statsData} />
    </>
  );
}