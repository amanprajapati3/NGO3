import data from "@/data/data.json"
import { FaqData } from "@/type/typeSection"
import Faq from "../component/layout/faq/Faq"

export default function FaqPage(){

const faq = data.faq as FaqData

    return(
        <>
        <Faq data = {faq}/>
        </>
    )
}