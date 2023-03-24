import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import { useEffect, useState } from "react"; 
import { solutions } from "@/helpers/solutions/solutions"; 
import CardSolutions from "@/common/components/cardSolutions/CardSolutions";
export default function VseSmeSolutionsThirdSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  return<Section disableMargin background={false} fullWidth={false} className=" main-wrapper  ensavoirplus   ">
  <h1 className="Nosdomaines ">En savoir +</h1>
  <Grid className="  ">
    {solutions.map((item, index) => {
      return <Widget key={index} size={4} className="   d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
       <CardSolutions title={item.title}  text={item.text} icon={item.icon} /> 
      </Widget>
    })}
  </Grid>

</Section>
}