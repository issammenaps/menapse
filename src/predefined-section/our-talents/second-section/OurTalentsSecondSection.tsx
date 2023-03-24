import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import OurTalentPage from "../../../json/OurTalentPage.json"
import { groupArray } from "@/helpers/helpers";
export default function OurTalentsSecondSection(props: any) {
    let data = ["Relying on high value-added consulting and a wide range of integrated expertise in diversified sectors, MENAPS acts from strategic vision to operational implementation by combining innovation and new technologies, specifically digital.", "Added value and performance oriented, MENAPS offer is led by expert consultants with recognized experience, in a human-sized organization, remaining very attached to the vivacity and inventiveness of the initial start-up spirit, well adapted to the requirements of the current era.", "MENAPS group is also characterized by a strong ambition to democratize its high value-added services to the greatest number of companies. MENAPS is also committed to social, societal and environmental commitment.", "MENAPS group is driven by a dynamic of continuous development, based on a diversification of the consulting areas and an international scope in constant growth, as its network is deployed."]

    return<>  {    groupArray(OurTalentPage['section_2'], 3).map((item: any, index: number) => {

        return <Section key={index} disableMargin background={index % 2 !== 0} className="section-padding-x section-padding-y d-flex justify-content-center ">
          <Grid  key={index} className=" main-wrapper">
            {item.map((item: any, i: number) => {
              return <Widget key={i} size={4} className="d-flex justify-content-center align-items-center ">
                <Section className="d-flex flex-column justify-ceontent-center align-items-center" >
                  <img src={item.picture} className="igure-img img-fluid" />
                  <h2 className={`figure-caption text-center description ${index % 2 !== 0 ? "text-white" : "globale-primary-color"} `}>{item.speciality}</h2>
                </Section>
              </Widget>
            })}
          </Grid>
        </Section>


      })
      } </>

    }
 