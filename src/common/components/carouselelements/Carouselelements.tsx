import { useEffect, useState } from "react";
import { ICarouselelement } from "./ICarouselelement";

export default function Carouselelement({ icon, text, textColor, desktopHeight, desktopWidth, mobileHeight, mobileWidth, className, deletedText, iconCentre }: ICarouselelement) {

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

    <div className={`carouselelcontainer   align-items-center  w-auto ${className ? className : ""}`}> 
      {icon &&
        <img className="  iconMobile" src={icon} width={screenWidth > 600 ? desktopWidth : mobileWidth} height={screenWidth > 600 ? desktopHeight : mobileHeight} />}
      {text &&
        <p className={`text-start icon-text-font  m-0 ${textColor ? textColor : ""}`}>
          {deletedText ? <del>{text}</del> : text}</p>
      }
    </div>
  )
}