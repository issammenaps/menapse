import ITypography from "./ITypography";

export default function Typography({title}: ITypography){
    return <p className="typography">
        {title}
    </p>
}