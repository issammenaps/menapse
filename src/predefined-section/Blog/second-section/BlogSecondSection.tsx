import Section from "@/common/components/Section/Section";
import ContentOurOrigins from "@/common/components/contentOurOrigins/ContentOurOrigins";
import Card from "@/common/components/card/Card";
import Hotspot2 from '@/common/components/hotspot2/Hotspot2'
import Grid from "@/common/components/grid/Grid";
import Widget from "@/common/components/widget/Widget";
import CardBlog from "@/common/components/cardBlog/CardBlog";
export default function BlogSecondSection(props: any) {
  const dataCATEGORY = [
    { href: "https://menaps.com/category/data-sciences/", label: "Data Sciences" },
    { href: "https://menaps.com/category/expertise/", label: "Digital expertise" },
    { href: "https://menaps.com/category/digital/", label: "Digital transformation" },
    { href: "https://menaps.com/category/management/", label: "Management and operations advisory" },
    { href: "https://menaps.com/category/recruitment/", label: "Recruitment" }
  ];
  const data = [
    {
      id: 1,
      tag: "DIGITAL EXPERTISE",
      imgSrc: "blog/article-ux-design-menaps-miniature.jpg",
      cardTitle: "UX Design, a vision at the center of the human",
      cardContent: "Let’s start by defining the UX terminology. It represents the emotional experience of a user facing an interface, an object or a service. UX design.",
      href: "#"
    },
    {
      id: 2,
      tag: "DIGITAL EXPERTISE",
      imgSrc: "blog/lets-talk-digital-transformation-menaps.jpg",
      cardTitle: "Let’s Talk Digital Transformation",
      cardContent: "Digital Transformation (DT) can refer to anything from IT modernization (for example, Artificial Intelligence) for process optimization (improving operational processes) or to transform the business.",
      href: "#"
    },
    {
      id: 3,
      tag: "DIGITAL EXPERTISE",
      imgSrc: "blog/menaps-Configuration-Management-as-an-enabler-for-Digital-Transformation.jpg",
      cardTitle: "Configuration Management as an enabler for Digital Transformation",
      cardContent: "What is Configuration Management? Configuration Management is a ​​transverse discipline and enabler that pilots and manages the technical description of a product as well as.",
      href: "#"
    }
  ];
  return <>
    <Section className="my-5 main-wrapper" background={false} fullWidth={false}>
        <Grid>

          <Widget size={8} className=" ">
            <Grid>
              {data.map((item) => (
                <div key={item.id} className={"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-lg-4 cardClass"}>
                  <CardBlog tag={item.tag} imgsrc={item.imgSrc} Cardtitle={item.cardTitle} content={item.cardContent} href={item.href} />
                </div>
              ))}
            </Grid>
          </Widget>
          <Widget size={4} className="">
            <div>
              <h5>Categories</h5>
              <ul className="category">
                {dataCATEGORY.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Widget>


        </Grid>
      </Section >
  </>
}