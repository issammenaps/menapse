import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function OurValuesThirdSection(props: any) {

    return   <Section disableMargin className="my-5 main-wrapper position-relative" background={false} fullWidth={false}>
    <div className="image-starour-1ourvalues d-flex justify-content-end  mb-lg-5">
      <img src="/fleche-contact-2-ourvalues.png" className="fleche-1ourvalues" />
    </div>
    <Grid>
      <Card styleHeaderPage=" textstyle left-border " styleContentPage=" OurValuesheadertext " 
        HeaderTitle={props.HeaderTitle}  
        content={props.content}
      />
      <Button className=" btn-padding btn-style mb-5" variant="link" title="The origin" href="/The origin" />

    </Grid>
  </Section>
}