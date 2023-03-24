import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";
import Hotspot2 from '@/common/components/hotspot2/Hotspot2' 
export default function OurExpertiseFirstSection(props: any) {

    return  <>
    <Section className="main-wrapper" background={false} fullWidth={false}>
        <Card HeaderTitle="<h1>Nos expertises</h1>" cardStyle="TitleHeader" styleHeaderPage="HeaderPage left-border " styleContentPage=" OurValuesheadertext"
          content={"<p>sont pluridisciplinaires.</br> Grâce à nos différentes branches MENAPS, nous pouvons répondre à chacune de vos problématiques.</p>"} />
          <div className=" fleche-1-exp-container d-none  d-md-block d-flex justify-content-end w-90 mb-lg-5">
              <img src="/Fleche-exp-1.png" className="fleche-1-exp" />
           </div> 
       </Section>
  </>
}