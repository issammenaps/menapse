import Link from "next/link"
import Img from "../image/Img"
import { IWidget } from "./IWidget"

export default function Widget({children, size, className, backgroundColor, mobile,refWidget}: IWidget){

    const mobileSize = mobile ? size : 12
    return(
        <div ref={refWidget}  className={`col-${mobileSize} col-sm-${mobileSize} col-md-${size} col-lg-${size} col-xl-${size} mx-auto mb-lg-4 ${className ? className: ""} ${backgroundColor ? "backgroundColor" : ""} `}>
            {children}
        </div>
    )
}
