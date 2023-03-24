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

export default function RecruitingSecondSection(props: any) {

  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
    return       <Section background className="section-padding-y ">
       
    <Section className="main-wrapper section-margin-6 section-padding-x section-padding-y">
      <Grid>
        <Widget size={4} className="position-relative" >
        <img src="/Fleche-1.png" width={ screenWidth <= 600 ? 70 :  150} className="position-absolute retation-60" style={{top: screenWidth <= 600 ? -70 : -200, right: screenWidth <= 600 ? 10 : screenWidth <= 900 ? -450 :  -600}} />

          <div className={`d-flex justify-content-${ screenWidth <= 600 ? "center" : "start"}`}>
            <img src="/Cadre-Recrutement.png" width={204} />
            
          </div>
        {screenWidth <= 600 && <> <img src="/Fleche-1-1.png" width={40} className="position-absolute" style={{right: 0}} /> 
          <p className="text-white text-center mb-4"><strong>Featured open positions</strong></p> </>}
          <p className="text-white">
            <strong>
              Cybersecurity EngineerFull Time
            </strong>
          </p>
          <p className="text-white">
            On constant watch for tools, applications,<br /> software to protect and enhance system security.
          </p>
          <p className="text-white">
            -&gt; Designs technical solutions <br />
            -&gt; Designs the architecture of an information technology system
          </p>
          {screenWidth <= 600 && <div className="d-flex justify-content-center  mb-5">
            <Button href="/unsolicited-application" title="Apply here" className="mt-4  btn-padding-m btn-style" />
          </div>}
        </Widget>
        {screenWidth > 600 && <Widget size={4} className="d-flex justify-content-center align-items-center flex-column">
          <p className="text-white">
            <strong>
              Featured open positions
            </strong>
          </p>
         <img src="/Fleche-1-1.png" width={100} />
          <Button href="/unsolicited-application" title="Apply here" className="mt-4 btn-padding-m btn-style" />
        </Widget>}

        <Widget size={4} className="d-flex flex-column justify-content-end align-items-center" >
          <Grid>
            {services.map((item: any, index: number) => {
              return <Widget key={index} mobile={screenWidth <= 600 ? true : false} size={screenWidth <= 600 ? 6 : 4} className="d-flex justify-content-center mt-4">
                <img src={item.icon} />
              </Widget>
            })}
          </Grid>
          <p className="text-white mt-4">
            We are looking for the rare pearl.
            Do not hesitate to consult our job offers!
          </p>
          <Button href="/unsolicited-application" title="Consult our offers" className="my-4   btn-padding-m  btn-style" />

        </Widget>
      </Grid>
    </Section>

  </Section>
}