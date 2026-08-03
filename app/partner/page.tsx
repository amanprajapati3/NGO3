import data from "@/data/data.json"
import { PartnersData } from "@/type/typeSection"
import Partner from "../component/layout/partners/Partner"

export default function PartnersPage(){

const partner = data.partnersSponsors as PartnersData

    return(
        <>
        <Partner data={partner}/>
        </>
    )
}