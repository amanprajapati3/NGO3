import data from "@/data/data.json"
import { BrochureData } from "@/type/typeSection"
import Brochure from "../component/layout/brochure/Brochure"

export default function BrochurePage(){

const brochure = data.brochure as BrochureData

    return(
        <>
        <Brochure data={brochure}/>
        </>
    )
}