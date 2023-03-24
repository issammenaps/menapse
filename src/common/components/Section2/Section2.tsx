import { ISection2 } from "./ISection2"

export default function     Section2({children, background, fullWidth,className} : ISection2) {
    return (
      
        <section className={`     ${background ? "backgroundColor" : ""} ${className ? className: ""} ${fullWidth ? "w-100": ""}`}>
                {children}
        </section>
    )
  }
  