import { useEffect, useState } from "react"
import { IGrid } from "./IGrid"

export default function Grid({ children , className, backgroundColor}: IGrid) {


    return (
        <div className={`row     ${className} ${backgroundColor ? "backgroundColor" : ""}`}  >
            {children}
        </div>
    )
}