import LegalLayout from "../component/layout/legal/LegalLayout";
import legalData from "@/data/data.json";

export default function PrivacyPolicyPage() {
  return <LegalLayout data={legalData.privacyPolicy} />;
}