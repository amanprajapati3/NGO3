import { ServicesDetailsPageData } from "@/type/typeSection";
import ServiceDetails from "../component/layout/serviceDetails/ServiceDetails";
import data from "@/data/data.json"

export default function ServiceDetailsPage(){

const servicedetails = data.servicesdetailsPage as ServicesDetailsPageData

    return(
        <>
        <ServiceDetails data={servicedetails}/>
        </>
    )
}