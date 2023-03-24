import { useEffect, useState } from "react"
import { ISlider } from "./ISlider"
 
 
export default function Slider({ children , className}: ISlider) {

  const [width, setWindowWidth] = useState(0);
  
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showTopNavMenu: width > 1023
  };

  console.log('App - width', width);
  return (
    <>
  <div></div>
   
    </>
  );
}

 