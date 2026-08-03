import data from "@/data/data.json"
import { TestimonialData } from "@/type/typeSection"
import Testimonial from "../component/layout/testimonial/Testimonial"

export default function TestimonialPage(){

const testimonial= data.Testimonial as TestimonialData

    return(
        <>
        <Testimonial data={testimonial}/>
        </>
    )
}