import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";
import Hotspot2 from '@/common/components/hotspot2/Hotspot2' 
export default function VseSmeSolutionsFirstSection(props: any) {

    return  <>
        <Section className="vesfirstblock main-wrapper position-relative" background={false} fullWidth={false}>
        <img src="/icone-tpe-pme-intro.png" className=" icone-tpe-pme-intro position-absolute" />
        <Card 
       
        HeaderTitle={props.HeaderTitle}  
        content={props.content}
        cardStyle="TitleHeader" 
        styleHeaderPage="HeaderPage left-border " 
        styleContentPage="text-content"
          
          />
      </Section>
  </>
}