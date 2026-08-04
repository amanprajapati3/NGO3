import data from "@/data/data.json"
import { ServiceData, StatsData, TestimonialData } from "@/type/typeSection"
import Service from "../component/layout/service/Service"

export default function ServicePage(){

const service = data.service as ServiceData
const statsData = data.statsData as StatsData;
const testimonialdata = data.Testimonial as TestimonialData

    return(
        <>
        <Service data={service} statsData={statsData} testimonial={testimonialdata}/>
        </>
    )
}