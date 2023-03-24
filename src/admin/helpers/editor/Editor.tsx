import React, { useEffect, useState, useRef } from "react";
import { IComponent } from "@/admin/helpers/interfaces/IComponent";
import { siteComponents } from "@/admin/helpers/import/SiteComponents";
import { useDispatch, useSelector } from 'react-redux';
import GenericModal from "@/admin/components/common/modals/GenericModal";
import { formatObject } from "@/helpers/helpers";



export default function Editor(data: IComponent): React.ReactNode {
console.log(data)
    if (!data) return null;
    const dispatch = useDispatch();

    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

    const componentRef = useRef(null);


    const [modal, setModal] = useState(false);
    const [componentId, setId] = useState("0");
    const [componentProps, setComponentProps] = useState(undefined)
    const toggle = () => {
        if (modal === true) {
            setComponentProps(undefined)
            console.log(data)
        }

        setModal(!modal)
        forceUpdate();



    };
    const changeId = (id: string) => {
        setId(id)
        toggle()
    }

    const closeModal = () => {
        setModal(false);
        console.log(modal)
    }

    const setProps = (props: any, id: string) => {
        setId(id)
        setComponentProps(props)
        toggle();
    }
    const closeBtn = (
        <button className="btn" style={{ fontSize: 16 }} onClick={toggle} type="button">
            &times;
        </button>
    );


    function createComponent(component: IComponent): React.ReactNode {


        if (!component) return null;


        let { type, id, category, props, childrens } = component;

      

        const deleteElement = function (id: string) {
            dispatch.pageModel.deleteElement(id)
            forceUpdate()
        }

        return <div  className=" d-flex flex-column justify-content-center mb-2">
            <div className=" d-flex justify-content-between border border-bottom-0">
                
                <button className="btn" disabled={!props ? true : false} onClick={() => setProps(props, id)}> <i className="bi bi-gear-fill"></i></button>
                <button className="btn" onClick={() => deleteElement(id)}> <i className="bi bi-x-lg"></i></button>
            </div>
            <div className="w-80 border border w-100 p-4">
                {React.createElement(
                    siteComponents[type],
                    formatObject(props),
                    Array.isArray(childrens) ? childrens.map((item) => render(item)) : render(childrens ?? null)

                )}
                {
                    category === "CONTAINER" && <div className="mt-2">
                        <button className="btn" onClick={() => changeId(id)}> <i className="bi bi-plus-square"></i> insert Module(s)</button>
                    </div>
                }

            </div>


        </div>
    }

    function render(data: IComponent | null): React.ReactNode {

        if (!data) return null


        return createComponent(data)

    }

    return <>
               {modal && <GenericModal modal={modal} toggle={toggle} closeBtn={closeBtn} id={componentId} confirmBtn={forceUpdate} props={componentProps} />

} 

{render(data)}
    </>

}