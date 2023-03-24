import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";
import Hotspot2 from '@/common/components/hotspot2/Hotspot2'
export default function ImagineFirstSection(props: any) {

  return <>
    <Section disableMargin className="main-wrapper section1imagine">
      <img src="/logo-imagine-vector.svg" className="logo-imagine-vector" />
      <p className="text1imagine"  >Un accompagnement stratégique et opérationnel pour les entrepreneurs.</p>
      <p className="text2imagine" ><em>imagine</em> investit dans les projets digitaux et technologiques. Nous fournissons un soutien opérationnel qualifié aux entrepreneurs et nous les aidons à construire des entreprises leaders de leurs marchés.</p>
      <p className="text3imagine d-md-block d-none"  >Nos expertises</p>
    </Section>
  </>
}