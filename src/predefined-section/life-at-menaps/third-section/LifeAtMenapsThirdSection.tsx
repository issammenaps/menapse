import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
export default function LifeAtMenapsThirdSection(props: any) {
  let data = ["Relying on high value-added consulting and a wide range of integrated expertise in diversified sectors, MENAPS acts from strategic vision to operational implementation by combining innovation and new technologies, specifically digital.", "Added value and performance oriented, MENAPS offer is led by expert consultants with recognized experience, in a human-sized organization, remaining very attached to the vivacity and inventiveness of the initial start-up spirit, well adapted to the requirements of the current era.", "MENAPS group is also characterized by a strong ambition to democratize its high value-added services to the greatest number of companies. MENAPS is also committed to social, societal and environmental commitment.", "MENAPS group is driven by a dynamic of continuous development, based on a diversification of the consulting areas and an international scope in constant growth, as its network is deployed."]

  return <Section className="main-wrapper section-margin-6 section-padding-x">
  <Card 
     HeaderTitle={props.HeaderTitle}    
     content={props.content}
    bottomTitle={props.HeaderTitle}    
    styleHeaderPage=""

  />
  <div className="position-relative w-100 relative-div-2">
    <img src="/Fleche-1-1.png" className="life-page-fleche-2" />
  </div>
</Section>
}