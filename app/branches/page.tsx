import data from "@/data/data.json"
import { BranchesData } from "@/type/typeSection"
import Branches from "../component/layout/branches/Branches"

export default function BranchesPage(){

const branches = data.branches as BranchesData

    return(
        <>
        <Branches data={branches}/>
        </>
    )
}