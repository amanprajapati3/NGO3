import LegalLayout from "../component/layout/legal/LegalLayout";
import legalData from "@/data/data.json";

export default function DisclaimerPage() {
  return <LegalLayout data={legalData.disclaimer} />;
}