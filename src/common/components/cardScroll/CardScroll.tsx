import { useEffect, useState } from "react"
import Button from "../button/Button"
import { ICardScroll } from "./ICardScroll"

export default function Cardscroll({ imgsrc, Cardtitle, content ,href,title1, title2,title3 }: ICardScroll) {

    const [screenWidth, setScreenWidth] = useState(0)

    

    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
      }
   

    useEffect(() => {  
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize); 
      },)

    return (
        <div className="  cardscroll"  >
             
            <img className="card-img-top" src= {imgsrc}  alt="Card image cap" />
            <div className="title1-scroll  ">{title1}</div>
            <div className="title2-scroll  ">{title2}</div>
            <div className="title3-scroll  ">{title3}</div>  
            <p className="content-scroll"   >    {content} </p>
               
           
        </div>


    )
}