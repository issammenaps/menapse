import { IDiv } from "./IDiv";

export default function Div(props: IDiv) {

    return (<div className={props.className}>
        {props.children}

    </div>
    )
}