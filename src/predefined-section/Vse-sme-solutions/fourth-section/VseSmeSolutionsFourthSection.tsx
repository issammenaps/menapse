import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function VseSmeSolutionsFourthSection(props: any) {
   
    return   <Section disableMargin className=" "  background={true} fullWidth={false}> 
        <Section disableMargin className="  main-wrapper position-relative " background={true} fullWidth={false}>
            <img src="/etoile-solution-tpe.png" className=" etoile-solution position-absolute" />
            <img src="/fleche-solution-tpe3.png" className="fleche-solution position-absolute" />
          <Grid>
            <Card cardStyle="mt-5" 
            styleHeaderPage="text-white left-border " 
            styleContentPage="text-white text-content " 
      
            
            HeaderTitle={props.HeaderTitle}  
            content={props.content}
            />
             
            <Button className=" btn-padding btn-style mb-5  my-3" variant="link" title="Découvrez-nous" href="/our-values" />
          </Grid>
        </Section>
    </Section>
}