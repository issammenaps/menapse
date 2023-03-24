import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function TrustUsSection(props: any) {

    return <Section className="main-wrapper" background={false} fullWidth={false}>
        <Card HeaderTitle= {props.HeaderTitle} styleHeaderPage="  HeaderPage left-border " styleContentPage="text-content"
            content={"<span>of our story</br>  MENAPS was born out of the desire to offer integrated consulting services starting from strategic vision to concrete operations combined with a strong digital dimension. </span>"} />
    </Section>
}