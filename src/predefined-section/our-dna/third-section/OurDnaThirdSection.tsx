import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";

export default function OurDnaThirdSection(props: any) {
  let data = ["Relying on high value-added consulting and a wide range of integrated expertise in diversified sectors, MENAPS acts from strategic vision to operational implementation by combining innovation and new technologies, specifically digital.", "Added value and performance oriented, MENAPS offer is led by expert consultants with recognized experience, in a human-sized organization, remaining very attached to the vivacity and inventiveness of the initial start-up spirit, well adapted to the requirements of the current era.", "MENAPS group is also characterized by a strong ambition to democratize its high value-added services to the greatest number of companies. MENAPS is also committed to social, societal and environmental commitment.", "MENAPS group is driven by a dynamic of continuous development, based on a diversification of the consulting areas and an international scope in constant growth, as its network is deployed."]

  return <Section className="my-5 main-wrapper" background={false} fullWidth={false}>
    <Grid>

      <Widget size={6} className="  " >
        <div className="row pt-5"  >
          <div className="col-12 pt-5"  >
            <Card HeaderTitle={props.CardHeaderTitle} styleHeaderPage="HeaderPage left-border" styleContentPage="text-ourdna  "
              content={props.Cardcontent} />
          </div>
          <div className="col-12  d-md-block d-none "  >
            <Button title={props.titleButton} href=" " variant="btnLink" className="btn-padding btn-style" />
          </div>
        </div>
      </Widget>
      <Widget size={6} className="" >
        <div className=" "> <img className="hamdietmajd" src="Hamdi-et-Majd-ADN.png" /></div>

      </Widget>
      <Widget size={12} className="d-sm-block d-md-none py-5  " >
        <Button title={props.titleButton} href=" " variant="btnLink" className="btn-padding btn-style " />

      </Widget>

    </Grid>
  </Section >
}