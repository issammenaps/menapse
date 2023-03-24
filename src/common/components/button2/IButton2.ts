import { Url } from "url";

export interface IButton{
    title?: string,
    variant?: string,
    href?: any,
    action?: () => void,
    animated?: boolean
    styleButton?:string,
}