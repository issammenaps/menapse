import { IComponent } from "@/admin/helpers/interfaces/IComponent";

export interface IGenericModal{
    id: string ,
    modal: boolean,
    toggle: ()=> void,
    className?: string,
    closeBtn: React.ReactNode,
    data?: IComponent[], 
    confirmBtn: ()=>void,
    props?: any
    editProps?: (event: any, key: any)=>void 
}