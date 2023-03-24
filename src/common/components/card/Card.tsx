import { useState } from "react"
import CardHeader from "react-bootstrap/esm/CardHeader"
import Button from "../button/Button"
import { ICard } from "./ICard"
import { useTranslation } from 'react-i18next';


export default function Card({ HeaderTitle, styleHeaderPage, content, styleContentPage, cardStyle, bottomTitle }: ICard) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }
    const { t } = useTranslation();

    return (
        <section className={` ${cardStyle ? cardStyle : ""} `}>

            {HeaderTitle && <div className={` ${styleHeaderPage ? styleHeaderPage : "card-title HeaderPage"} `} >
                <div dangerouslySetInnerHTML={{ __html: t(HeaderTitle)     }} />
            </div>
            }
            <article className={` card-content ${styleContentPage ? styleContentPage : ""} `}>
                <div dangerouslySetInnerHTML={{ __html: t(content) }} />
            </article>
            {bottomTitle && <div className={` ${styleHeaderPage ? styleHeaderPage : "card-title HeaderPage"} `} >
                <div dangerouslySetInnerHTML={{ __html: bottomTitle }} />
            </div>
            }
        </section>


    )
}