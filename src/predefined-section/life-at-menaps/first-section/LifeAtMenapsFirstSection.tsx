import Section from "@/common/components/Section/Section"; 
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Grid from "@/common/components/grid/Grid";
import Widget from "@/common/components/widget/Widget";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
import Card from "@/common/components/card/Card";
import { useEffect, useState } from "react";
export default function LifeAtMenapsFirstSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)

    return <Section className="main-wrapper section-margin-6 section-padding-x">
    <Card
      HeaderTitle={lifeAtMenapsPage["section_1"].title}
      content={lifeAtMenapsPage["section_1"].content}
      styleContentPage="OurValuesheadertext"
      styleHeaderPage="left-border"
    />

    <Grid>
      <Widget size={8} className={`d-flex ${screenWidth <= 900 ? "justify-content-start align-items-start" : "justify-content-center align-items-center"} `}>

        <div className={`d-flex ${screenWidth <= 900 ? screenWidth <= 600 ? "justify-content-center flex-column align-items-center " : "justify-content-start align-items-center " : "justify-content-center align-items-start"}   w-100 flex-wrap`}>
          {lifeAtMenapsPage["section_2"].icons.map((item: { icon: string, description: string, subDescription: string }, index: number) => {
            return <div key={index} className={`d-flex justify-content-start align-items-center flex-column w-20 mt-4`}>
              <img src={item.icon} />
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h2 className="main-description text-center">{item.description}</h2>
                <div className="sub-description text-center">{item.subDescription}</div>
              </div>
            </div>

          })}
        </div>
      </Widget>
      <Widget size={4} className="d-flex justify-content-center align-items-center p-10 w-32">
        <img src={lifeAtMenapsPage["section_2"].image} className="diamant-image" />
      </Widget>
    </Grid>
  </Section>
}