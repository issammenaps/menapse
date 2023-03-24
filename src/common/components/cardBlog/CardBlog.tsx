import { useState } from "react"
import Button from "../button/Button"
import { ICardBlog } from "./ICardBlog"

export default function CardBlog({ imgsrc, Cardtitle, content ,href,tag  }: ICardBlog) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (
        <div className="card cardstyle shadow"  >
            <div className="textstyleblog rounded">{tag}</div>
            <img className="card-img-top-blog" src= {imgsrc}  alt="Card image cap" />
            <div className="card-body">
                <h5 className="  categoryTitle">{Cardtitle}</h5>
                <p className="  categoryContent">{content}</p>
                <a href={href} className="  readmore">READ MORE »</a>
            </div>
        </div>


    )
}