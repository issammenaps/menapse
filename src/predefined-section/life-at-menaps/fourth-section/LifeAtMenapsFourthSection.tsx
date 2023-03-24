import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
export default function LifeAtMenapsFourthSection(props: any) {
 
  return <Section background fullWidth className="section-padding-y">
  <Section className="main-wrapper section-margin-6 section-padding-x">
    <Card
      HeaderTitle={lifeAtMenapsPage["section_5"].title}
      content={lifeAtMenapsPage["section_5"].content}
      styleContentPage="OurValuesheadertext text-white"
      styleHeaderPage="left-border text-white"
    />
    <div className="d-flex justify-content-center align-items-center w-100">
      <Button className="btn-padding btn-style" title="Unsolicited application" href="/our-values" />

    </div>
  </Section>
</Section>
}