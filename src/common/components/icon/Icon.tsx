import { useEffect, useState } from "react";
import { IIcon } from "./IIcon";

export default function Icon({ icon, text, textColor, desktopHeight, desktopWidth, mobileHeight, mobileWidth, className, deletedText, iconCentre }: IIcon) {

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

    <div className={`d-flex  align-items-center  w-auto ${className ? className : ""}`}>
      {icon &&
        <img className="icon" src={icon} width={screenWidth > 600 ? desktopWidth : mobileWidth} height={screenWidth > 600 ? desktopHeight : mobileHeight} />}
      {text &&
        <p className={`text-start icon-text-font  m-0 ${textColor ? textColor : ""}`}>
          {deletedText ? <del>{text}</del> : text}</p>
          
      }
    </div>
  )
}