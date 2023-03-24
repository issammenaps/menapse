import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";

export default function DigitalTransformation(props: any) {

    return <Section background={false} fullWidth={true}>
        <ContentOurOrigins padding={true} styleContentPage="contentPage my-3" content={[{ year: "2017", content: ["The findings:<br>Digital transformation is in full<br>acceleration, but the offer does not match the expectations of the customers.",] }, { year: "2019", content: [" Birth of MENAPS", "Opening of offices in Toulouse (France), <br>Tunis (Tunisia), Casablanca (Morocco)"] }, { year: "2020", content: ["Opening of offices in Toulouse (France) ", " Cross-Fertilization and diversification<br>in the automotive sector "] }, { year: "2021", content: ["Opening of offices in Toulouse (France) ", " Cross-Fertilization and diversification<br>in the automotive sector "] }]} />
    </Section>
}