import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function LetsFind(props: any) {

    return <Section className=" " background={true} fullWidth={false}>
        <Section className="mt-2 main-wrapper " background={true} fullWidth={false}>
            <Grid>
                <Card cardStyle="my-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " 
                HeaderTitle= {props.HeaderTitle} content={props.HeaderTitle} />
                <Button className="  mb-5 btn-padding btn-style my-1" variant="link" title="Let's talk about it" href="/our-values" />

            </Grid>
        </Section>
    </Section>
}