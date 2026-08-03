import data from "@/data/data.json"
import { DonateData } from "@/type/typeSection"
import Donate from "../component/layout/donate/Donate"

export default function Donatepage(){

const donate = data.donate as DonateData

    return(
        <>
        <Donate data={donate} />
        </>
    )
}