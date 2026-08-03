import data from "@/data/data.json"
import { TeamData } from "@/type/typeSection"
import Team from "../component/layout/team/Team"

export default function TeamPage(){

const team = data.Team as TeamData

    return(
        <>
        <Team data={team}/>
        </>
    )
}