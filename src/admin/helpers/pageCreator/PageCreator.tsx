import React from "react";
import { IComponent } from "@/admin/helpers/interfaces/IComponent";
import { siteComponents } from "@/admin/helpers/import/SiteComponents";
import { formatObject } from "@/helpers/helpers";

export default function CreatePage(data: IComponent): React.ReactNode{

    if(!data) return null;

    function createComponent(component: IComponent ): React.ReactNode{

        if(!component) return null;

        const {type, props, childrens} = component;

        return React.createElement(
            siteComponents[type],
            formatObject(props),
            Array.isArray(childrens) ? childrens.map(render) :  render(childrens ?? null)

        )
    }

    function render(data: IComponent | null): React.ReactNode{

        if(!data) return null

        return createComponent(data)

    }

    return render(data);

}