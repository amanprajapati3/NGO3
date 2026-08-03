import LegalLayout from "../component/layout/legal/LegalLayout";
import legalData from "@/data/data.json";


export default function RefundPage() {
  return <LegalLayout data={legalData.refundPolicy} />;
}