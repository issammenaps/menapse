import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";

export default function OurValuesFirstSection(props: any) {

    return  <><Section disableMargin className="mt-5 main-wrapper" background={false} fullWidth={false}>
    <Card styleHeaderPage="HeaderPage left-border "
     styleContentPage="OurValuesheadertext   "
     HeaderTitle={props.HeaderTitle}  
     content={props.content}
            />
  </Section>
  <Section className=" ourvaluesimagesection" background={false} fullWidth={true}>
    <img className="ourvaluesimage  " src="VALEURS-UK.png" />
  </Section>
  </>
}