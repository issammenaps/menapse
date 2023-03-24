import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import { useEffect, useState } from "react";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"

export default function LifeAtMenapsSecondSection(props: any) {

  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
    return  <Section fullWidth background className="section-padding-y position-relative ">

    <img src="/Fleche-1.png" className="life-page-fleche-1" />

    <Section className={`  main-wrapper main-wrapper  section-padding-x d-flex ${screenWidth <= 600 ? "justify-content-center" : "justify-content-start"}`}>
      <Card
        cardStyle={`${screenWidth <= 600 ? "w-75" : ""}`}
        HeaderTitle={lifeAtMenapsPage["section_3"].section_1.title}
        content={lifeAtMenapsPage["section_3"].section_1.content}
        styleContentPage=" text-white"
        styleHeaderPage="text-white"
      />
    </Section>
    <Section className="main-wrapper main-wrapper section-margin-0 section-padding-x">
      <Grid >
        <Widget size={6} className="d-flex justify-content-start flex-column section-padding-x ">

          <div className="d-flex justify-content-start flex-column section-margin-6 ">
            <p className="what-you-will-find mb-5 text-left ">{lifeAtMenapsPage['section_3'].section_2.you_will_find.title}</p>
            {lifeAtMenapsPage['section_3'].section_2.you_will_find.items.map((item: string, index: number) => {
              return <Icon key={index} className="mt-4" text={item} textColor="text-white" icon={lifeAtMenapsPage['section_3'].section_2.icon} />

            })}
          </div>

        </Widget>
        <Widget size={6} className={`d-flex   ${screenWidth <= 600 ? "justify-content-start mt-5" : "justify-content-center"} wont-find-container  section-padding-x`}>
          <div className="d-flex justify-content-start  flex-column section-margin-6">
            <p className="what-you-will-find mb-5 text-left del"><del>{lifeAtMenapsPage['section_3'].section_2.you_wont_find.title}</del></p>
            {lifeAtMenapsPage['section_3'].section_2.you_wont_find.items.map((item: string, index: number) => {
              return <Icon key={index} deletedText className="mt-4" text={item} textColor="text-white del" icon={lifeAtMenapsPage['section_3'].section_2.icon} />

            })}
          </div>

        </Widget>

      </Grid>

    </Section>
  </Section>
}