import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function TrustUsSection(props: any) {

    return <Section background={true} fullWidth={false} className="section-padding-y section-padding-x  ">
        <Section className="main-wrapper section-padding-x section-padding-y ">
            <Card
                styleHeaderPage="left-border text-white HeaderPagewhite" styleContentPage="text-white OurValuesheadertext"
                HeaderTitle={props.cardTitle}
                content={props.cardContent} />
            <div className=" fleche-4-home-container d-flex justify-content-end w-90 mb-lg-5">
                <img src="/Fleche-4-Home.png" className="fleche-4-home" />
            </div>

            <Grid className="gap-5 grid-gap">
                {services.map((item, index) => {
                    return <Widget key={index} size={3} className=" d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
                        <Icon text={item.text} textColor="text-white" icon={item.icon} />
                    </Widget>
                })}
            </Grid>
        </Section>
    </Section>
}