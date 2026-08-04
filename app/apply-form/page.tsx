import data from "@/data/data.json"
import { JobApplyData } from "@/type/typeSection"
import Apply from "../component/layout/apply/Apply"

export default function JobApplyPage(){

    const applyform = data.jobApplyData as JobApplyData

    return(
        <>
        <Apply data={applyform}/>
        </>
    )
}