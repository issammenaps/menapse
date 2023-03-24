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
export default function OurExpertiseSecondSection(props: any) {
  const [screenWidth, setScreenWidth] = useState(0)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
 return  <Section className="main-wrapper selectcarr" background={false} fullWidth={false}>
  <div className="secltion-expbg  d-none  d-md-block"><img src="/carre-bg.png" /></div>
  <Grid className="">
        {exp.map((item, index) => {
          return <Widget key={index} size={4} className="expStyle">
            <div className="exp_content">
                  <div className="item_content ">
                        <div className="title">{item.Sous_title}</div>
                        <div className="desp">{item.text}</div>
                        <div className="btn">
                          { item.isShowing ?  (<Button className="button-exp" titleStyle="button-title-exp " variant="link" title={item.Text_btn}   href={item.url}  />) : <></>                         
                          }

                        
                        </div>
                   </div>
                <img src={item.image}   className="fade-in-image"/>
            </div>
          <p>{item.title} </p>
          </Widget>
         
        })}
      </Grid>
  </Section>
   
}