import { useEffect, useState } from "react"
import Button from "../button/Button"
import { IExpertise } from "./IExpertise"

export default function Expertise({ image1, image2, title1, title2, text }: IExpertise) {

  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  },)

  return (
    <div className="m-2  expertiseflex">
      <div className="row m-2">
        <div className="col-md-6  col-12">
          <img src={image1} alt="" className="damien-img img-fluid" />
        </div>
        <div className="col-md-6  col-12">
          <img src={image2} alt="" className=" img2expertise img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h5 className=" ">{title1}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="   title2expertise">{title2}</p>
        </div>
      </div>
      <div className="  mt-4 justify-content-center">
      <p className=" contentexpertise" dangerouslySetInnerHTML={{ __html:text}} />
 
         
      </div>
    </div>



  )
}