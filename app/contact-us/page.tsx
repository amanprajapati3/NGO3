import data from "@/data/data.json"
import { ContactSectionData } from "@/type/typeSection"
import Contact from "../component/layout/contact/Contact"

export default function ContactPage(){

const contact = data.contact as ContactSectionData

    return(
        <>
        <Contact data={contact}/>
        </>
    )
}