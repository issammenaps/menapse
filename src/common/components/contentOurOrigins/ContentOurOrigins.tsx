import React, { useState } from "react"
import { IContentOurOrigins } from "./IContentOurOrigins"
import Image from "next/image";
export default function ContentOurOrigins({ content, styleContentPage, padding }: IContentOurOrigins) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (

        <article className={` ${padding ? "site-padding" : ""} ${styleContentPage ? styleContentPage : ""} `}>

            <div className="row">
                <div className="col-12 content-image" id="flech" >
                    <img className="flech" src="/Fleche.png" />
                </div>
                <div className="col-12">
                    <div className="row">
                        {content.map((element, index) => (
                            <React.Fragment key={index}>
                                <div className="col-md-6  col-12 ">
                                    {index % 2 !== 0 ? (
                                        <div>
                                            <div className=" mb-4" >
                                                <strong>{element.year}</strong>
                                            </div>
                                            <div >
                                                
                                                    <ul className="  bullet-before " >
                                                    {element.content.map((item: string, i: number) => (
                                                        <li   key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                                        ))}
                                                    </ul>
                                               
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="col-md-6   col-12 ">
                                    {index % 2 === 0 ? (
                                        <div>
                                            <div className=" ">
                                                <strong>{element.year}</strong>
                                            </div>
                                            <div className=" my-3">
                                              
                                                    <ul   className="  bullet-before " >
                                                    {element.content.map((item: string, i: number) => (
                                                        <li  key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                                        ))}
                                                    </ul>
                                             
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </article>


    )
}