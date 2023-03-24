import Section from "@/common/components/Section/Section"; 
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Grid from "@/common/components/grid/Grid";
import Widget from "@/common/components/widget/Widget";
import Card from "@/common/components/card/Card";
import OurTalentPage from "../../../json/OurTalentPage.json"
export default function OurTalentsFirstSection(props: any) {

    return <Section className="main-wrapper section-margin-6 section-padding-x">
    <Card
      HeaderTitle={props.HeaderTitle}  
      content={props.content}

     
      styleContentPage="OurValuesheadertext"
      styleHeaderPage="left-border HeaderPage "
    />
    <div className="position-relative relative-div">
         <img src="/Fleche-nos-metiers.png" className="fleche-nos-metiers" />
    </div>
  </Section>
}