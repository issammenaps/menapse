import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";
import Hotspot2 from '@/common/components/hotspot2/Hotspot2' 
export default function OurFootprintFirstSection(props: any) {

    return  <>
     <Section className="main-wrapper" background={false} fullWidth={false}>
        <Card HeaderTitle=  {props.HeaderTitle} styleHeaderPage=" HeaderPage left-border " styleContentPage="text-content"
          content= {props.content}  />
      </Section>

      <Section className="  section-margin-6">
        <Hotspot2 className="section-padding  mt-lg-5" />
      </Section>
  </>
}