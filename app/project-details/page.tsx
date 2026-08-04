import data from "@/data/data.json"
import { ProjectDetailData } from "@/type/typeSection"
import ProjectDetails from "../component/layout/projectdetails/ProjectDetails"

export default function ProjectDetailsPage(){

const projectDetails = data.projectDetail as ProjectDetailData

    return(
        <>
        <ProjectDetails data={projectDetails}/>
        </>
    )
}