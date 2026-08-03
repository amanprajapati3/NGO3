import data from "@/data/data.json"
import { AwardData } from "@/type/typeSection"
import Award from "../component/layout/award/Award"

export default function AwardPage(){

const award = data.award as AwardData

    return(
        <>
        <Award data={award}/>
        </>
    )
}