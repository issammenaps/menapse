import React from "react";

export interface IPageHeader{

    title: string,
    actions?:Array<
        {
            name?: string,
            icon: string
            action?: ()=> void
        }
    >

}