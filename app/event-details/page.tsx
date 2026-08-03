import data from "@/data/data.json"
import { EventDetailsData } from "@/type/typeSection"
import EventDetails from "../component/layout/eventdetails/EventDetails"

export default function EvenDetailsPage(){

const eventdetails = data.eventDetails as EventDetailsData

    return(
        <>
        <EventDetails data={eventdetails}/>
        </>
    )
}