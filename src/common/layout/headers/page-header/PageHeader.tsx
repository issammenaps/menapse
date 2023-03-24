import { Navbar } from "reactstrap";
import { IPageHeader } from "./IPageHeader";


export default function PageHeader({ title, actions }: IPageHeader) {


    return (
        <div  className="d-flex justify-content-between mt-5 bg-white p-4 "  >
            <div className=" w-50 d-flex justify-content-start align-items-center">
                <h1>{title}</h1>

                 

            </div>
            <div className=" w-50 d-flex justify-content-end align-items-center flex-row">
                {actions && actions.map((item:{name?: string, icon: string, action?: ()=> void}, index: number)=>{
                    return <button className="btn btn-outline-secondary" onClick={item.action}> <i className={item.icon}></i> {item.name} </button>
                })}
            </div>
        </div>
    )
}