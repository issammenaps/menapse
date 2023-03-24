import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
import { useState, useEffect } from "react";
export default function ContactUsThirdSection(props: any) {
  const steps = {
    step_1: {
      title: "<h1>step 1</h1>",
      content: "<p>Check the match between the need and the profiles</p>"
    },
    step_2: {
      title: "<h1>step 2</h1>",
      content: "<p>Technical and HR meeting to discuss the candidate's projects and explain our expectations.</p>"
    },
    step_3: {
      title: "<h1>step 3</h1>",
      content: "<p>Response within one week. At MENAPS we are committed to providing feedback to each candidate, regardless of the outcome.</p>"
    }
  }

  const stepsArray = [
    {
      title: "<h1>step 1</h1>",
      content: "<p>Check the match between the need and the profiles</p>"
    },
    {
      title: "<h1>step 2</h1>",
      content: "<p>Technical and HR meeting to discuss the candidate's projects and explain our expectations.</p>"
    },
    {
      title: "<h1>step 3</h1>",
      content: "<p>Response within one week. At MENAPS we are committed to providing feedback to each candidate, regardless of the outcome.</p>"
    }

  ]



  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  const [content, setContent] = useState(steps["step_1"])
  return     <Section disableMargin className=" joinus main-wrapper position-relative" background={false} fullWidth={false}>
  <div className="imgflech2container text-center mb-5 "   >
    <img src="/fleche-contact-2-ourvalues.png   " className=" text-center imgflech2" />
  </div>
  <Card styleHeaderPage="HeaderPage left-border " 
         HeaderTitle=  {props.HeaderTitle}
         styleContentPage="OurValuesheadertext   "
    content= {props.content}
     />
    <Button   className="btn-padding btn-style    " animated title= {props.btnTitle}  href= {props.btnUrl} />

</Section>
}