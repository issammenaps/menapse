import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import { useEffect, useState } from "react";
export default function OurExpertiseThirdSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  return <Section background={true} fullWidth={false} className="section-padding-y position-relative ">

    <img src="/Fleche-exp-2.png" className="fleche-exp-2 flech_width position-absolute  d-none  d-md-block" />


    <Section className="main-wrapper section-padding-x">
      <Card styleContentPage="text-white OurValuesheadertext"
       styleHeaderPage=" text-white left-border HeaderPagewhite"
       HeaderTitle={props.HeaderTitle}  
       content={props.content}
        />
    </Section>
    <Widget size={screenWidth > 600 && screenWidth <= 900 ? 6 : 6} className={`order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  ${screenWidth > 900 ? "justify-content-center" : "justify-content-center"}`}>
      <Button className="btn-padding btn-style" variant="link" title={props.btnTitle} href={props.btnUrl}  />
    </Widget>

  </Section>
}