import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function OurValuesSecondSection(props: any) {
    let data = [{ title: "At Menaps, diversity is an international.", content: " Cosmopolitan and multicultural wealth, the MENAPS group has been resolutely so since its creation, by the dynamic forces that compose it. It is more than ever today and will be tomorrow, as it develops and expands. An identity carried by the deep conviction that uniqueness is a strength and plurality is a wealth. " },
    { title: "At Menaps equity is a requirement.", content: "To successfully achieve unity in diversity, beyond differences, requires a strong sense of justice, equity, parity. This is the insurance for everyone, regardless of gender, origin, culture or beliefs, of equal chances and opportunities for progress, based on merit, commitment. " },
    { title: "At Menaps integrity is an imperative.", content: " A strong commitment to uprightness, moral rigor and a sense of ethics, is one of the essential foundations values of the Menaps Group.   Interact with respect, act with transparency, conduct yourself with probity, loyalty and fidelity is more than an expectation, a requirement for everyone, with everyone." },
    { title: "At Menaps responsibility is a commitment. ", content: "The MENAPS Group expresses its sense of responsibility by respecting its commitments, both to its employees, its partners and its customers. With involvement and mobilization, efficiency and reliability, the efforts of all are directed towards the realization of missions and the achievement of results. A commitment that is coupled with a social, societal and environmental awareness, just as deeply rooted." },
    { title: "At Menaps, vivacity is our nature. ", content: "Born in start-up mode, the MENAPS Group has kept the mindset, which is now an integral part of its DNA. Agility and flexibility, mobility and speed, reactivity and adaptability, are all traits that make the MENAPS Group particularly in phase with trends and requirements of the time." }]

    return <Section disableMargin className="sectionourvalues " background={false} fullWidth={false}>
    <Section disableMargin className="  Section-ourdna py-5  main-wrapper" background={false} fullWidth={false}>
      <div className="d-flex  flex-wrap-our-values     mx-1">

        {data.map((item, i: number) => (
          <div key={i} className="content-ourvalues content  " >
            <p className="headercontetn  " key={i} dangerouslySetInnerHTML={{ __html: item.title }} />
            <p className="contentourvalues " key={i} dangerouslySetInnerHTML={{ __html: item.content }} />

          </div>

        ))}


      </div>
    </Section>
  </Section>
}