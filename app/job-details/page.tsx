import data from "@/data/data.json"
import { JobDetailsData } from "@/type/typeSection"
import JobDetails from "../component/layout/jobdetails/JobDetails"

export default function JobDetailsPage(){

const jobdetails = data.jobDetailsData as JobDetailsData

    return(
        <>
        <JobDetails data={jobdetails}/>
        </>
    )
}