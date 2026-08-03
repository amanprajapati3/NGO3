import { GalleryPageData } from "@/type/typeSection"
import Gallery from "../component/layout/gallery/Gallery"
import data from "@/data/data.json"

export default function GalleryPage(){

    const gallery = data.gallery as GalleryPageData

    return(
        <>
        <Gallery data={gallery}/>
        </>
    )
}