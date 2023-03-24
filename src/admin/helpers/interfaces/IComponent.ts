

export interface IComponent { 
    type: string,
    icon?: string
    id: string | null,
    category: "ATOMIC" | "CONTAINER",
    props?: {  [key: string]: unknown, },
    childrens?: Array<IComponent> ,
    
}