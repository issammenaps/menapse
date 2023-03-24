import { ITextarea } from "./ITextarea";

export default function Textarea({rows, cols, id, placeholder}: ITextarea){
    return(
        <textarea placeholder={placeholder} className=" textarea form-control" id={id} rows={rows} cols={cols}></textarea>
    )
}