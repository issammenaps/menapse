import Section from "@/common/components/Section/Section"; 
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Grid from "@/common/components/grid/Grid";
import Widget from "@/common/components/widget/Widget";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
import Card from "@/common/components/card/Card";
import { useEffect, useState } from "react";
export default function ContactUsFirstSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)

    return  <Section className="main-wrapper section-margin-6 section-padding-x">
    <Grid>
      <Widget size={6}>
        <Card
          HeaderTitle={props.HeaderTitle}
          content={props.content}
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="  HeaderPage left-border  "
        />
      </Widget>
      <Widget size={6} className={`d-flex justify-content-${screenWidth > 600 ? 'end' : "center mb-5"} position-relative`}>
        <img src="/chat.png"  width={250} />
      </Widget>
    </Grid>
  </Section>
}