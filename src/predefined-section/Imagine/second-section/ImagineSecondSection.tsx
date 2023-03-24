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
import { quoi, comment } from "@/helpers/quoi/quoi";
export default function ImagineSecondSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  return <>
    <div>
      <div className="divider"></div>
    </div>
    <Section disableMargin className="position-relative text-white imagine-section2  " background={true} fullWidth={false}>
      <Section disableMargin className="  main-wrapper2  position-relative " background={true} fullWidth={false}>
        <p className="textexperience">Fort de plus de 100 ans d’expérience terrain cumulée dans les services digitaux, l’innovation et les nouvelles technologies auprès de grands groupes dans différents secteurs, MENAPS met à la disposition de votre projet ses experts ainsi qu’un accès privilégié à son réseau de clients  .</p>
        <h1 className="text-center" >Quoi ?</h1>
        <Grid className="    ">
          {quoi.map((item, index) => {
            return <Widget key={index} size={3} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
              <div className="qouiItem"><p className="qouiItemtext"> <span dangerouslySetInnerHTML={{ __html: item }} /> </p></div>
            </Widget>
          })}
        </Grid>
        <h1 className="text-center" >Comment ?</h1>
        <Grid className="  d-flex justify-content-center  ">
          {comment.map((item, index) => {
            return <Widget key={index} size={3} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
              <div className="qouiItem">
                <p className="qouiItemtext"> <span dangerouslySetInnerHTML={{ __html: item }} /> </p></div>
            </Widget>
          })}
        </Grid>

      </Section>
      <Section disableMargin className="position-absolute pool  flex-column d-flex align-items-center justify-content-center shadow-lg main-wrapper2 bg-white mx-auto "  >
        <p className="textpool "  >Un pool unique de compétences.</p>
        <div className="  parlons-ens ">
          <Button hoverClassName="hoverclass" className="btn-padding btn-style backgroundColor  " animated title="Parlons-en !" href="/" />
        </div>
        {/* <Link href={'/*'} className={`position-relative btnimagine     `}>  Parlons-en ! </Link> */}
      </Section>
    </Section>

  </>

}