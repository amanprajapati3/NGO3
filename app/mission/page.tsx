import Mission from "../component/layout/mission/Mission";
import data from "@/data/data.json";
import { MissionPageData } from "@/type/typeSection";

export default function MissionPage() {
  const missionData = data.missionPage as MissionPageData;

  return (
    <>
      <Mission data={missionData} />
    </>
  );
}