import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";
import Hotspot2 from '@/common/components/hotspot2/Hotspot2'
export default function BlogFirstSection(props: any) {

  return <>
    <Section disableMargin className="blogHeader" background={false} fullWidth={false}>

      <div className="blogtitle ">
        <h1 className="blogHone ">{props.Title}</h1>
      </div>


    </Section>
  </>
}