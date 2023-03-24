import { IComponent } from "./IComponent";


export interface IPage {
    _id:string
    pagesloaded: boolean,
   
    title: string,
    url: string,
    updated_at: string,
    created_at : string,
    author: string,
    content:IComponent,
}