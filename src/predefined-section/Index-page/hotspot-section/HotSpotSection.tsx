import Section from "@/common/components/Section/Section";
import { useEffect, useState } from "react";
import Hotspot from "@/common/components/hotspot/Hotspot";


import Card from "@/common/components/card/Card";


export default function HotspotSection(props: any) {


    const [screenWidth, setScreenWidth] = useState(0)

    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
    }
    useEffect(() => {


        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);

    },)


    return <Section className={`main-wrapper  section-padding-x position-relative  ${screenWidth <= 600 ? "mobile-margin" : "section-margin-6"}`}>

        <img src="/Fleche-1-Home.png" className="fleche-1-home flech_width position-absolute" />

        <Card
            styleContentPage="OurValuesheadertext"
            HeaderTitle={props.cardTitle}
            styleHeaderPage="left-border HeaderPage"
            content={props.cardContent} />
        <Hotspot className="section-padding mt-lg-5" />
    </Section>
}