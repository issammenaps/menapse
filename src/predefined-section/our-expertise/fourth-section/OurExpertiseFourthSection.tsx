import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function OurExpertiseFourthSection(props: any) {
   
    return   <Section  className="position-relative " background={true} fullWidth={false}>
    <img src="/fleche-empreinte.png" className="fleche-blog  position-absolute" />
      <Section disableMargin className="my-5 main-wrapper " background={true} fullWidth={false}>
        <Grid>
          <Card cardStyle="my-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " HeaderTitle="<h1>Interested</h1>" content="<p>in our news? </p>" />
          <Button   className=" mb-5 btn-padding btn-style my-3" variant="link" title=" Discover them" href="/our-values" />

        </Grid>
      </Section >
    </Section >
}