import Image from "next/image";
import { IImg } from "./IImg";

export default function Img({ image, alt, width, height, marginRight, hover }: IImg) {

    return (
        <div className={`${hover ? "img " : "" }`}>
            <Image
                src={image}
                alt={alt}
                width={width}
                height={height} 
                className={` ${hover ? "main-image": ""}${marginRight && "marginRight"}`}
            />

           {hover && <div className="image-middle">
                <p>hello world</p>
            </div> } 

        </div>
    )


}