import data from "@/data/data.json"
import { TeamDetailsData } from "@/type/typeSection"
import TeamDetails from "../component/layout/teamdetails/TeamDetails"

export default function TeamDetailsPage(){

const teamdetails = data.teamDetails as TeamDetailsData

    return(
        <>
        <TeamDetails data={teamdetails}/>
        </>
    )
}