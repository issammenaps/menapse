import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import GalleryFootprint from "@/common/components/gallery/GalleryFootprint";
import { useEffect, useState } from "react";
import { exp } from "@/helpers/services/exp";
import { domaines } from "@/helpers/domaines/domaines";
export default function VseSmeSolutionsSecondSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
 return     <Section    disableMargin background={true} fullWidth={false} className=" areasofintervention   ">

 <Section disableMargin className=" main-wrapper   section-padding-y position-relative">
   <h1 className="textvse">Nos domaines d’intervention</h1>
   <img src="/Fleche-exp-1.png" className="fleche-vse-sme-solutions position-absolute" />

   <Grid className="gap-5 grid-gap ">
     {domaines.map((item, index) => {
       return <Widget key={index} size={3} className=" d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
         <Icon text={item.text} textColor="text-white" icon={item.icon} />
       </Widget>
     })}
   </Grid>
   <img src="/fleche-solution-tpe2.png" className="fleche-bottom position-absolute" />
 </Section>

</Section>
   
}