import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function OurDnaSecondSection(props: any) {
    let data = ["Relying on high value-added consulting and a wide range of integrated expertise in diversified sectors, MENAPS acts from strategic vision to operational implementation by combining innovation and new technologies, specifically digital.", "Added value and performance oriented, MENAPS offer is led by expert consultants with recognized experience, in a human-sized organization, remaining very attached to the vivacity and inventiveness of the initial start-up spirit, well adapted to the requirements of the current era.", "MENAPS group is also characterized by a strong ambition to democratize its high value-added services to the greatest number of companies. MENAPS is also committed to social, societal and environmental commitment.", "MENAPS group is driven by a dynamic of continuous development, based on a diversification of the consulting areas and an international scope in constant growth, as its network is deployed."]

    return <Section className="section2-ourdna   position-relative " background={true} fullWidth={false}>
    <div className=" image-starour-dna2  d-flex justify-content-end  mb-lg-5">
        <img src="/Fleche-DMC-1.png" className="fleche-2-exp" />
      </div>
      <div className=" image-starour-dna3  d-flex justify-content-end  mb-lg-5">
        <img src="/Fleche-DMC_3.png" className="fleche-3-exp" />
      </div>
      <Section className="section2-ourdna main-wrapper " background={true} fullWidth={false}>
        <Grid>


          {data.map((item: string, i: number) => (
            <Widget key={i} size={12} className="" >
              <div className="text-ourdna my-5" key={i} dangerouslySetInnerHTML={{ __html: item }} />

            </Widget>

          ))}


        </Grid>
      </Section >
    </Section >
}