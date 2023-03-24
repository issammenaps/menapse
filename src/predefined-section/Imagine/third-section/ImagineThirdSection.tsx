import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import { useEffect, useState } from "react";
import ScrollComponent from "@/common/components/scrollComponent/ScrollComponent";
import { offres } from "@/helpers/offres/offres";
export default function ImagineThirdSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  return <Section disableMargin className="     "  >
  <h1 className="text-center text-offres" >Nos offres</h1>
  <ScrollComponent styleContentPage="btn-footer my-3 " content={offres} />
</Section >
}