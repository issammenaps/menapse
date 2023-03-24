import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { useEffect, useState } from "react";
import OurTalentPage from "../../../json/OurTalentPage.json"
export default function OurTalentsThirdSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  return  <Section className={`main-wrapper section-margin-6 section-padding-x position-relative margin-bottom-xxl ${screenWidth <= 600 ? "mobile-margin" : "" } `}>
  <img src="Fleche-nos-metiers-2.png" className="fleche-nos-metiers-2"/>
  <Grid>
    <Widget size={ screenWidth <=990 ? 8 : 6} className="d-flex justify-content-start flex-column">
      <Card
        HeaderTitle={props.HeaderTitle}  
        content={props.content}

        styleContentPage="OurValuesheadertext"
        styleHeaderPage="left-border"
      />
      </Widget>
    <Widget size={ screenWidth <=990 ? 4 : 6}></Widget>
    {/* <Grid>
      <Widget size={ screenWidth <=990 ? 8 : 6}>
        <div className={`d-flex ${screenWidth <= 600 ? "justify-content-center": "justify-content-end"} `}>
          <Button className="btn-padding btn-style card-btn" variant="link" title="Parlons-en" href="/contact" />
        </div>
      </Widget>
      <Widget size={ screenWidth <=990 ? 4 : 6}></Widget>

    </Grid> */}
    <div  className="d-flex flex-column align-items-center   justify-content-center ">
    <Button hoverClassName="hoverclass" className=" btn-padding btn-style card-btn "   title="Apply here" href="/" />
    </div>

  </Grid>

</Section>
}