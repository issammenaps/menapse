import Link from "next/link";
import { IButton } from "./IButton2";

export default function Button2({title, variant, href, action,styleButton}: IButton){
    return (
        <>
          {variant === "button" ? <button className={` btn main-btn animated-button ${styleButton ? styleButton : ""}   `}>
                {title}
            </button> : <Link href={href} className={` btn main-btn animated-button ${styleButton ? styleButton : ""}   `}>  {title} </Link>}
        </>
   
    )
}