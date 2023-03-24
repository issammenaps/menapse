import { useEffect, useState } from "react"
import { IGrid2 } from "./IGrid2"

export default function Grid2(props: any) {




    return (

        <div className="row d-flex">
            {props.children} 
        </div>

    )
}