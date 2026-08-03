import Vision from "../component/layout/vision/Vision";
import data from "@/data/data.json";
import { VisionData } from "@/type/typeSection";

export default function VisionPage() {
  const visionData = data.vision as VisionData;

  return (
    <>
      <Vision data={visionData} />
    </>
  );
}