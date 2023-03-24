import Section from "@/common/components/Section/Section";
import { useEffect, useState } from "react";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";

import Card from "@/common/components/card/Card";

export default function ourServicesSection(props: any) {

    const [screenWidth, setScreenWidth] = useState(0)



    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
    }


    useEffect(() => {


        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);

    },)

    return <Section background={false} fullWidth={false} className="main-wrapper section-margin-6 section-margin-15 section-padding-x position-relative margin-bottom-xxl">
        <img src="/Fleche-3-Home.png" className="fleche-3-home position-absolute" />
        <Grid>
            <Widget size={6} className={` d-flex ${screenWidth <= 600 ? "justify-content-center " : "justify-content-start "} align-items-start mt-mobile`}>
                <img src={props.image} className="hands-home" />
            </Widget>
            <Widget size={6} className=" d-flex align-items-start justify-content-end mt-5 ">
                <Card
                    styleContentPage="OurValuesheadertext"
                    cardStyle="w-100"
                    styleHeaderPage="left-border  "
                    HeaderTitle={props.cardTitle}
                    content={props.cardContent} />
            </Widget>
        </Grid>
    </Section>
}