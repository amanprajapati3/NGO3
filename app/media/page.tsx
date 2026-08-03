import data from "@/data/data.json"
import { MediaData } from "@/type/typeSection"
import Media from "../component/layout/media/Media"

export default function MediaPage(){

const media = data.media as MediaData

    return(
        <>
        <Media data={media}/>
        </>
    )
}