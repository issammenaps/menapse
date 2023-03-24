import React from "react";
import { AdminComponents } from "@/admin";
import { useDispatch, useSelector } from 'react-redux';


export default function Admin(){
    const dispatch = useDispatch();
    let page: string  = useSelector(state => state?.pageModel?.page);

    return( <>
     {React.createElement(AdminComponents[page])}
    </>
       
    )
}