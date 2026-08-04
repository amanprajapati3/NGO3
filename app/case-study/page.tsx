import data from "@/data/data.json"
import { CaseStudyData } from "@/type/typeSection"
import CaseStudy from "../component/layout/casestudy/CaseStudy"

export default function CaseStudyPage(){

    const casestudy = data.caseStudyPage as CaseStudyData

    return(
        <>
        <CaseStudy data={casestudy}/>
        </>
    )
}