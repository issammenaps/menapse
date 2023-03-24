import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";

export default function ServicesGridSection(props: any) {

    return <Section background={false} fullWidth={false} className="main-wrapper section-margin-6 section-padding-x">
        <Grid className="grid-gap" >
            {Icons.map((item, index) => {
                return <Widget key={index} size={3} className="d-flex align-items-center justify-content-start mb-lg-5 mt-xl-5 mb-sm-5 mt-sm-5">

                    <Icon text={item.text} icon={item.icon} desktopHeight={item.height} desktopWidth={item.width} mobileHeight={item.mobileHeight} mobileWidth={item.mobileWidth} />
                </Widget>
            })}

            <Widget size={12} className=" mt-lg-5 mt-sm-5">
                <Button className="btn-padding btn-style" title={props.btnTitle} href="/our-values" />
            </Widget>
        </Grid>
    </Section>
}