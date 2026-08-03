import data from "@/data/data.json"
import { StatsData, SupportData } from "@/type/typeSection"
import Support from "../component/layout/support/Support"

export default function SupportPage(){

const support = data.support as SupportData
const statsData = data.statsData as StatsData

    return(
        <>
        <Support data={support} statsData={statsData}/>
        </>
    )
}