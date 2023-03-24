import { IComponent } from "@/admin/helpers/interfaces/IComponent";

export interface ILanguageModal{
   
    modal: boolean,
    toggle: ()=> void,
    className?: string,
    closeBtn: React.ReactNode,
    data?: IComponent[], 
}