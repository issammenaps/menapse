import { Url } from "url";

export interface IButtonSlider{
    title?: string,
    variant?: string,
    href?: any,
    action?: () => void,
    animated?: boolean
    className?:string,
}