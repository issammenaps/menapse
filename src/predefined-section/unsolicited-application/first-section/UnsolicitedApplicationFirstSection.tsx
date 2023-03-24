import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";
import Hotspot2 from '@/common/components/hotspot2/Hotspot2' 
import { useEffect, useState } from "react";
import Grid from "@/common/components/grid/Grid";
import Widget from "@/common/components/widget/Widget";

import UnsolicitedApplicationPage from "../../../json/UnsolicitedAplicationPage.json"
export default function UnsolicitedApplicationFirstSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)

    

  const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    }
 

  useEffect(() => {


      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  
    },)
    return  <>
        <Section className="main-wrapper section-margin-6 section-padding-x">
        <Grid>
          <Widget size={12}>
            <Card
              HeaderTitle={props.HeaderTitle}
              content={props.content}
              styleContentPage="OurValuesheadertext"
              styleHeaderPage="left-border"
            />
          </Widget>
          <Widget size={12} className={`d-flex justify-content-${screenWidth > 600 ? 'end': "center mb-5"} position-relative`}>
            <img src={props.img} width={200} />
            <img  src="/Fleche-1-recrutement.png"  className="position-absolute" width={screenWidth > 900 ? 65: 50} style={{left: screenWidth > 600 ? 350 : 60, top:  180}}/>
          </Widget>
        </Grid>
      </Section>
  </>
}