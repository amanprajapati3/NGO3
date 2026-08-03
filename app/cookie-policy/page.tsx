import LegalLayout from "../component/layout/legal/LegalLayout";
import legalData from "@/data/data.json";

export default function CookiePolicyPage() {
  return <LegalLayout data={legalData.cookiePolicy} />;
}