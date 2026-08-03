import data from "@/data/data.json"
import { BlogDetailsData } from "@/type/typeSection"
import BlogDetails from "../component/layout/blogdetails/BlogDetails"

export default function BlogDetailsPage(){

const blogdetails = data.blogDetails as BlogDetailsData

    return(
        <>
        <BlogDetails data={blogdetails}/>
        </>
    )
}