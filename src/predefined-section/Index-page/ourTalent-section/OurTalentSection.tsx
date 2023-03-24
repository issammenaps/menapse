import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function OurTalentSection(props: any){

    return  <Section background={false} fullWidth={false} className="main-wrapper section-margin-6  position-relative">
        
    <img src="/Fleche-5-Home.png" className="fleche-5-home position-absolute" />
    <Grid className="gap-2 ">
      <Widget size={6} className="d-flex align-items-start justify-content-center">
        <img className="talent-image" src={props.image}/>
      </Widget>
      <Widget size={4} className=" d-flex align-items-start justify-content-start mt-5 ">
        <Card styleHeaderPage="left-border HeaderPage"
         styleContentPage="OurValuesheadertext"
         HeaderTitle={props.cardTitle}
         content={props.cardContent} />
      </Widget>
      <Widget size={12} className="mt-lg-5 mt-sm-6">
        <Button className="btn-padding btn-style" title={props.btnTitle} href="/our-values" />
      </Widget>
    </Grid>
  </Section>
}