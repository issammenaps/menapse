import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
import { useState, useEffect } from "react";
export default function RecruitingThirdSection(props: any) {
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
  return   <Section className="main-wrapper section-margin-6 section-padding-x section-padding-y position-relative">
  <Card
    HeaderTitle="<h1>A simple
      and efficient</h1>"
    content="recruitment process.
      Our recruiters match the right candidate,<br /> not the other way around."
    styleContentPage="OurValuesheadertext"
    styleHeaderPage="left-border"
  />

  {screenWidth > 600 ?
    <Grid>
      <Widget size={6} className="d-flex align-items-center flex-column position-relative height-xl ">

        <img className="ampoule-image-1 ampoule-hover pe-pointer" src="/Process-de-recrutement-2-v2-1.png" onClick={() => setContent(steps['step_2'])} />
        <img src="/Process-de-recrutement-1-v2-1.png" className="ampoule-image-2 mr-4 ampoule-hover pe-pointer" onClick={() => setContent(steps['step_1'])} />
        <img src="/Ampoule-Recrutement-1.png" className="ampoule-image-3 " />
        <img src="/Process-de-recrutement-3-v3.png" className="ampoule-image-4 ml-4 ampoule-hover pe-pointer" onClick={() => setContent(steps['step_3'])} />
      </Widget>
      <Widget size={6} className="d-flex align-items-center justify-content-center">
        <Card
          HeaderTitle={content.title}
          content={content.content}
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="left-border"
        />
      </Widget>
    </Grid> : <Grid>
      <Widget size={12} className="d-flex justify-content-center mb-5">
        <img src="/Ampoule-Recrutement_1.png" width={300} />
      </Widget>
      {stepsArray.map((item: any, index: number) => {
        return <Widget key={index} className="d-flex justify-content-start">
          <Card
            HeaderTitle={item.title}
            content={item.content}
            styleContentPage="OurValuesheadertext"
            styleHeaderPage="left-border"
          />
        </Widget>
      })}
      <Widget>

      </Widget>
    </Grid>
  }
        <img src="/Fleche-1-1.png" width={screenWidth<=600 ? 50 : 60 } className="position-absolute" style={{right: screenWidth<=600 ? 190: 400 }} />

</Section>
}