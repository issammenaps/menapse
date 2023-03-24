import { offres } from "@/helpers/offres/offres"
import { useState } from "react"
import Cardscroll from "../cardScroll/CardScroll"
import { IScrollComponent } from "./IScrollComponent"

export default function ScrollComponent({ content, styleContentPage }: IScrollComponent) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (
        <div className="item site-padding">
            <div className="meta mx-5">
                <img
                    className="image"
                    src="/imagine.svg"
                />
            </div>
            <div>
                {offres.map((item, index) => {
                    return <Cardscroll key={index} imgsrc={item.icon} title1={item.title1} title2={item.title2} title3={item.title3} content={item.content} />

                })}
            </div>
        </div>

    )
}