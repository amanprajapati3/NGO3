import data from "@/data/data.json"
import { SitemapData } from "@/type/typeSection"
import SiteMap from "../component/layout/sitemap/SiteMap"

export default function SitemapPage(){

const sitemap = data.sitemap as SitemapData

    return(
        <>
        <SiteMap data = {sitemap}/>
        </>
    )
}
