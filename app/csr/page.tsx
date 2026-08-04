import data from "@/data/data.json"
import { CsrData, StatsData } from "@/type/typeSection"
import CSR from "../component/layout/csr/CSR"

export default function CSRPage(){

const csr = data.csr as CsrData
const statsData = data.statsData as StatsData;

    return(
        <>
        <CSR data={csr} statsData={statsData}/>
        </>
    )
}