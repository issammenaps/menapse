import Link from "next/link";
import { useRef, useState } from "react";
import { IButtonSlider} from "./IButtonSlider";

export default function ButtonSlider({title, href, action, animated, className}: IButtonSlider){

    const btn = useRef(null)
    let x, y;

    const [coordonate, setCoordonate] = useState({x: 0, y:0})

    const handleMouseOver = (e: any) =>{
             x = e.pageX - btn.current?.offsetLeft;
             y = e.pageY - btn.current?.offsetTop;

             setCoordonate({x:x, y:y})

             console.log(coordonate)
            
    }
    return (
        <>
            <div ref={btn}  className={`master-button2 ${className ? className : ""}`} onMouseOver={()=>handleMouseOver(event)}>
                <Link href={href} className={`text-decoration-none ${animated ? "animated-link" : ""}`}>  {title} 
                {animated && <span className="hover-effect" style={{top: coordonate.y, left: coordonate.x}}></span>}
                </Link>
            </div> 
        </>
   
    )
}