import data from "@/data/data.json"

import Career from "../component/layout/career/Career";
import { CareerData } from "@/type/typeSection";

export default function CareerPage(){

const career = data.career as CareerData

    return(
        <>
        <Career data={career}/>
        </>
    )
}