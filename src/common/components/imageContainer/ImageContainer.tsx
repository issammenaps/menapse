import Image from "next/image";
import { IImageContainer } from "./IImageContainer";

export default function ImageContainer({ src,  className }: IImageContainer) {

    return ( <>
       <img src={src} className={className} />
        </>
    )


}