import Link from "next/link";
import { useRef, useState } from "react";
import { IButton } from "./IButton";
import { useTranslation } from 'react-i18next';

export default function Button({ title, href, action, animated, className, variant,hoverClassName, titleStyle }: IButton) {

    const { t } = useTranslation();

    const btn = useRef(null)
    let x, y;

    const [coordonate, setCoordonate] = useState({ x: 0, y: 0 })

    const handleMouseOver = (e: any) => {
        console.log(e,btn)
        if (btn.current) {
            x = e.pageX - btn.current['offsetLeft'];
            y = e.pageY - btn.current['offsetTop'];

            setCoordonate({ x: x, y: y })
        }

    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div ref={btn} className={`master-button  ${className ? className : ""}`} onMouseOver={() => handleMouseOver(event)}>
                {variant === "button" ? <div className="pointer" onClick={action}>
                 {t(`${title}`)}               

                </div> : <Link href={href} className={`text-decoration-none ${animated && hoverClassName ? "text-white" : ""} ${titleStyle} ${animated ? "animated-link" : ""}`}>     {t(`${title}`)}  
                    {animated && <span className={`hover-effect ${hoverClassName ? hoverClassName : ""}`} style={{ top: 0, left:0 }}></span>}
                </Link>}

            </div>
        </div>

    )
}