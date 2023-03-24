import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import { useEffect, useState } from "react";

export default function ImagineSection(props: any) {

    const [screenWidth, setScreenWidth] = useState(0)



    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
    }


    useEffect(() => {


        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);

    },)

    return <Section background={true} fullWidth={true} className=" section-padding-y ">

        <Section className="main-wrapper section-padding-x">
            <Card styleContentPage=" OurValuesheadertext text-white"
                HeaderTitle={props.cardTitle} styleHeaderPage="left-border  HeaderPagewhite text-white"
                content={props.cardContent} />
        </Section>

        <Section className="position-relative  height-l">
            <div className={`${screenWidth <= 600 ? "div-absolute" : ""}`}>
                <Button className={`${screenWidth > 600 ? "btn-absolute" : ""} btn-padding btn-style`} variant="link" title={props.btnTitle}href="/imagine" />
            </div>

            <img className="position-absolute imagine-image " src={screenWidth > 600 ? "/Bandeau-Imagine.png" : "Imagine_mobile.png"} />
        </Section>

    </Section>
}