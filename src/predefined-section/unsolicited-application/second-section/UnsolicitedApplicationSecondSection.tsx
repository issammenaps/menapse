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
import Typography from "@/common/components/typography/Typography";
import Input from "@/common/forms/input/Input";
import Textarea from "@/common/forms/textarea/Textarea";
export default function UnsolicitedApplicationSecondSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
 return   <Section className="section-padding-y" background>
 <Section className="main-wrapper section-margin-6 ">
   <Typography title="Send us your Resume!" />
   <Grid>
     <Widget size={12}>
       <Grid>
         <Widget size={6} mobile className="mt-5">
           <Input type="text" placeholder="First Name*" />
         </Widget>
         <Widget size={6} mobile className="mt-5">
           <Input type="text" placeholder="Name*" />
         </Widget>
       </Grid>
       <Grid className="mt-4">
         <Widget size={6} mobile className="mt-4">
           <Input type="text" placeholder="Phone*" />
         </Widget>
         <Widget size={6} mobile className="mt-4">
           <Input type="text" placeholder="Email*" />
         </Widget>
       </Grid>
     </Widget>
     <Widget size={12} className="d-flex justify-content-start mt-5">
       <p className="label">Download your Cv here (PDF)*</p>
       <div className="w-30">
         <Input type="file" background />
       </div>
     </Widget>
     <Widget size={12} className="mt-5">
       <p className="label">
         If you are creative, don’t hesitate to send us a portfolio or a video on talents@skourcing.com
       </p>
     </Widget>
     <Widget size={12} className=" mt-5">
       <Textarea placeholder="Message*" cols={40} rows={10} />
     </Widget>
     <Widget size={12} className="d-flex  mt-5">
       <div className="d-flex justify-content-start align-items-center">
         <Button className="btn-padding-m  btn-style" title="Send" variant="button"  action={()=> alert("hello world")}/>
       </div>
     </Widget>
   </Grid>
 </Section>

</Section>
   
}