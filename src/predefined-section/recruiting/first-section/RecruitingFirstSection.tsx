import Section from "@/common/components/Section/Section"; 
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Grid from "@/common/components/grid/Grid";
import Widget from "@/common/components/widget/Widget";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
import Card from "@/common/components/card/Card";
import { useEffect, useState } from "react";
export default function RecruitingFirstSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)

    return  <Section className="main-wrapper section-margin-6 section-padding-x ">
    <Card
            
          HeaderTitle={props.HeaderTitle}    
          content={props.content}
          styleContentPage="OurValuesheadertext"
      styleHeaderPage="left-border"
    />
    <Grid>
      <Widget size={6} className="d-flex align-items-center">
        <Card
          content={props.WidgetContent}       />
      </Widget>
      <Widget size={6} className="d-flex justify-content-center mb-5">
        <img src="/Diamant-Vie-chez.png" width={250} />
      </Widget>
    </Grid>
  </Section>
}