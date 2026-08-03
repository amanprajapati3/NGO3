import LegalLayout from "../component/layout/legal/LegalLayout";
import legalData from "@/data/data.json";

export default function TermsPage() {
  return <LegalLayout data={legalData.termsConditions} />;
}