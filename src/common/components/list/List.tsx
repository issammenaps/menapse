import { useEffect, useState } from "react"
import { IList } from "./IList"
import { Icons } from "@/helpers/icons/Icons"
import Widget from "../widget/Widget"
import Icon from "../icon/Icon"
export default function List({ list, children, className, backgroundColor }: IList) {


    return (
        <>
            {Icons.map((item, index) => {
                return <Widget key={index} size={3} className="d-flex align-items-center justify-content-start mb-lg-5 mt-xl-5 mb-sm-5 mt-sm-5">

                    <Icon text={item.text} icon={item.icon} desktopHeight={item.height} desktopWidth={item.width} mobileHeight={item.mobileHeight} mobileWidth={item.mobileWidth} />
                </Widget>
            })}

        </>
    )
}