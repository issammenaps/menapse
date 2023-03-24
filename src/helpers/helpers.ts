import { IComponent } from "@/admin/helpers/interfaces/IComponent";
import React from "react";
import { useDispatch } from "react-redux";


export function groupArray(array: any, rows: number): any {

    let talents = [...Array(array.length / rows)]
    const talentsRow = talents.map((row, idx) => array.slice(idx * rows, idx * rows + rows));
    return talentsRow;

}

export function findNestedItem(obj: IComponent, id: string, component: IComponent): any {
    if (obj.id === id) {//first element in  page
        obj.childrens?.push(component)
        return
    } else {
        obj.childrens?.map((item: IComponent) => {

            return findNestedItem(item, id, component)
        }
        )
    }
}

export function addProps(obj: IComponent, id: string, props: any): any {

    console.log({ objId: obj.id, id: id })

    if (obj.id === id) {
        let newProps = { ...obj.props, ...props }
        console.log(obj.props)
        console.log(props)
        obj.props = JSON.parse(JSON.stringify(newProps))
        return
    } else {
        obj.childrens?.map((item: IComponent) => {

            return addProps(item, id, props)
        }
        )
    }
}

export function deleteNestedItem(arr: IComponent[], id: string) {

    arr.map((item, index) => {
        if (item.id === id) {


            return arr.splice(index, 1);


        } else if (item.childrens) {
            return deleteNestedItem(item.childrens, id)
        }
    })

    console.log(arr);


}
export function refactorProps(obj: any, languages?: any, props?: any) {

 
    if (obj) {
        const initialObject = JSON.parse(JSON.stringify(obj))
        const formatedObj = {};
        let translation = {}

        console.log(initialObject)
        Object.keys(initialObject).map((item, index) => {

          

            if(languages && props[item]?.isTranslated === true ){
                languages.map((lang: any, index: number)=>{

                    let key = obj[item];
                    let keyTranslation = obj[item+"_"+lang.iSOCode];


                    translation =  {...translation, [lang.iSOCode]: {...translation[lang.iSOCode], [key]: keyTranslation} }

                })
            }
           
            
            

           if(props[item]) {
            props[item].value = obj[item]
           }else{
            Object.assign(props, {[item]: {value: obj[item], isHiden: true }});
           }
        })

        return {translation: translation, object: props}
        
    }
    return {}



}


export function formatObject(obj: any, languages?:any) {
    if (obj) {
        const initialObject = JSON.parse(JSON.stringify(obj))
        const formatedObj = {}
        let lang = {}
        Object.keys(initialObject).map((item, index) => {
            if(languages && obj[item]?.isTranslated === true ){
                languages.map((lang: any, index: number)=>{

                   lang =  {...lang, [lang.iSOCode]: obj[item+"_"+lang.iSOCode || ""]}
                })
               
              return  Object.assign(formatedObj, { [item]: obj[item]?.value, ...lang });
            }else{
               return Object.assign(formatedObj, { [item]: obj[item]?.value});
            }
            
        })
        
        return formatedObj
    }
    return {}
}

export function stringToKey(str: string) {

    return str
        .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
}

export function  camelToFlat(str: string){
    const camelCase =str.replace(/([a-z])([A-Z])/g, '$1 $2')

    return camelCase
}

