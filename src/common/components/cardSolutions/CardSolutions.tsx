import { useEffect, useState } from "react";
import { ICardSolutions } from "./ICardSolutions";

export default function CardSolutions({ icon, title, text, textColor, desktopHeight, desktopWidth, mobileHeight, mobileWidth, className, deletedText }: ICardSolutions) {

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

        <div className="cardsolutions">
            <div className="iconsolutions">
                {icon &&
                    <img className="icon" src={icon} width={screenWidth > 600 ? desktopWidth : mobileWidth} height={screenWidth > 600 ? desktopHeight : mobileHeight} />}
            </div>
            <h2 className="titlesolutions">{title}</h2>
            <p className="contentcardsolution" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}