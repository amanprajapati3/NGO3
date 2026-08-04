import data from "@/data/data.json"
import { ProjectsPageData } from "@/type/typeSection"
import Projects from "../component/layout/projects/Project"

export default function Projectpage(){

    const project = data.projectsPage as ProjectsPageData

    return(
        <>
        <Projects data={project}/>
        </>
    )
}