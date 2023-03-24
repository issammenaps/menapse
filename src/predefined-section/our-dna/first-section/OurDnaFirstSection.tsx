import Section from "@/common/components/Section/Section"; 
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Grid from "@/common/components/grid/Grid";
import Widget from "@/common/components/widget/Widget";

export default function OurDnaFirstSection(props: any) {

    return <Section className="my-lg-5 main-wrapper position-relative" background={false} fullWidth={false}>
    <Grid>

      <Widget size={12} className=" d-sm-block d-md-none" >
        <div className=" "> <img className="imagemobile animate__animated  animate__zoomIn" src="Picto-Group.png" /></div>
      </Widget>
      <Widget size={12} className="" >
        <img className="image-menaps-group  " src="Logo-Group.png" />
      </Widget>
      <Widget size={12} className="position-relative" >

        <div className=" text-ourdna text-ourdna-mobile colorgrey "><span dangerouslySetInnerHTML={{ __html:  props.textOurdna }} /> </div>



        <div className="image-star  d-md-block d-sm-none"> <img className="star-img d-md-block d-none animate__animated  animate__zoomIn" src="Picto-Group.png" /></div>
      </Widget> 
    </Grid>
    
    <div className=" image-starour-dna d-none  d-md-block d-flex justify-content-end  mb-lg-5">
      <img src="/Fleche-1-recrutement.png" className="fleche-2-exp" />
    </div>
  </Section >
}