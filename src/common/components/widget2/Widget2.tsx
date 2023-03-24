import Link from "next/link"
import Img from "../image/Img"
import { IWidget2 } from "./IWidget2"

export default function Widget2({children, size, className, backgroundColor}: IWidget2){

    return(
        <div className={`col-12 col-sm-12 col-md-${size} col-lg-${size} col-xl-${size}  mb-lg-4 ${className ? className: ""} ${backgroundColor ? "backgroundColor" : ""} `}>
            {children}
        </div>
    )
}
