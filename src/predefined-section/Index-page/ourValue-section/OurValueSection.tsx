import Section from "@/common/components/Section/Section";
import { useEffect, useState } from "react";
import Hotspot from "@/common/components/hotspot/Hotspot";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";

export default function OurValueSection(props: any) {


    const [screenWidth, setScreenWidth] = useState(0)



    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
    }


    useEffect(() => {


        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);

    },)


    return <Section background={true} fullWidth={false} className="section-padding-y position-relative ">
        <img src="/Fleche-2-Home.png" className="fleche-2-home flech_width position-absolute" />
        <Section className={screenWidth > 900 ? "w-100 m-auto" : "main-wrapper"}>
            <Grid className="main-wrapper">
                <Widget size={screenWidth > 600 && screenWidth <= 900 ? 6 : 6} className={`order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  d-flex align-items-center ${screenWidth > 900 ? "justify-content-start" : "justify-content-center"}`}>
                    <Button className="btn-padding btn-style" variant="link" title={props.btnTitle} href="/our-values" />
                </Widget>
                <Widget size={screenWidth > 600 && screenWidth <= 900 ? 6 : 6} className={`order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-start mt-5`}>
                    <Card

                        styleHeaderPage="text-white left-border HeaderPagewhite" styleContentPage="text-white OurValuesheadertext"
                         HeaderTitle={props.cardTitle}
                        content={props.cardContent} />
                </Widget>
            </Grid>
        </Section>

    </Section>

}