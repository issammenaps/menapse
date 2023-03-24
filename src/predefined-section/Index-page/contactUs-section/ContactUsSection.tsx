import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import Grid from "@/common/components/grid/Grid";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { useEffect, useState } from "react";

export default function ContactUsSection(props: any) {

    const [screenWidth, setScreenWidth] = useState(0)

    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
    }
 
    useEffect(() => {

        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);

    },)

    return <Section className="main-wrapper section-padding-x position-relative pb-6 " background={false} fullWidth={false}>
        <img src="/Fleche-5-Home.png" className="fleche-6-home position-absolute" />
        <Grid>
            <Widget size={5} className=" d-flex flex-column justify-content-start mt-5">

                <Card cardStyle="mt-sm-7" styleHeaderPage="left-border HeaderPage"
                    styleContentPage="OurValuesheadertext"
                    HeaderTitle={props.cardTitle}
                    content={props.cardContent} />
                {screenWidth > 600 && <div className="d-flex justify-content-end">
                    <Button className="btn-padding btn-style card-btn" variant="link" title={props.btnTitle} href="/contact" />
                </div>}
            </Widget>
            <Widget size={6} className={`d-flex align-items-center   ${screenWidth > 600 ? "justify-content-end" : "flex-column justify-content-center"} justify-content-end`}>
                <img src={props.image} className="bulle-image " />
                {screenWidth <= 600 &&

                    <Button className="btn-padding btn-style card-btn mt-5" variant="link" title={props.btnTitle} href="/contact" />
                }
            </Widget>
        </Grid>
    </Section>
}