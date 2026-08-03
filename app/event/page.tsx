import data from "@/data/data.json"
import { EventsData } from "@/type/typeSection"
import Event from "../component/layout/event/Event"

export default function EventPage(){

const event = data.events as EventsData

    return(
        <>
        <Event data={event}/>
        </>
    )
}