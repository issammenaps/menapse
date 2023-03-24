import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import GalleryFootprint from "@/common/components/gallery/GalleryFootprint";

export default function OurFootprintSecondSection(props: any) {
  <Section disableMargin className=" gallerywallaper " background={true} fullWidth={false}>
  <div className="secltion-expbg2  d-none  d-md-block"><img src="/carre-bg2.png" /></div>
  <Card cardStyle="main-wrapper mainindex text-white my-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " HeaderTitle={props.HeaderTitle}   content={props.HeaderTitle}  />
  <GalleryFootprint padding={true} data={[
    {
      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Tunis</div>
          <div className="style-element2">Tunisie</div>
        </div>
      ),

      src: "/galerie/Tunis-V2-1.png",
      original: "/galerie/Tunis-V2-1.png",
      width: 250,
      height: 280,


    },
    {
      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Toulouse</div>
          <div className="style-element2">France</div>
        </div>
      ),
      src: "/galerie/Toulouse-V2-3.png",
      original: "/galerie/Toulouse-V2-3.png",
      width: 600,
      height: 280,

    },
    {
      src: "/galerie/Paris-V2-3.png",
      original: "/galerie/Paris-V2-3.png",
      width: 320,
      height: 280,

      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Paris</div>
          <div className="style-element2">France</div>
        </div>
      ),
    },
    {
      src: "/galerie/Maroc-2-V2-1.png",
      original: "/galerie/Maroc-2-V2-1.png",
      width: 600,
      height: 280,
      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Casablanca</div>
          <div className="style-element2">Moroc</div>
        </div>
      ),
    },
    {
      src: "/galerie/Paris-V2-2.png",
      original: "/galerie/Paris-V2-2.png",
      width: 280,
      height: 280,

      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Paris</div>
          <div className="style-element2">France</div>
        </div>
      ),
    },
    {
      src: "/galerie/Bangalore-V2-1.png",
      original: "/galerie/Bangalore-V2-1.png",
      width: 300,
      height: 280,
      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Bangalore</div>
          <div className="style-element2">India</div>
        </div>
      ),
    },

    {
      src: "/galerie/Toulouse-V2-2.png",
      original: "/galerie/Toulouse-V2-2.png",
      width: 270,
      height: 280,
      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Toulouse</div>
          <div className="style-element2">France</div>
        </div>
      ),
    },
    {
      src: "/galerie/Maroc-2-V2-copie.png",
      original: "/galerie/Maroc-2-V2-copie.png",
      width: 400,
      height: 280,
      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Casablanca</div>
          <div className="style-element2">Moroc</div>
        </div>
      ),
    },
    {
      src: "/galerie/Tunis-2-V2-1.png",
      original: "/galerie/Tunis-2-V2-1.png",
      alt: "Big Ben - London",
      width: 450,
      height: 280,
      customOverlay: (
        <div className="style-image ">
          <div className="style-element1">Tunis</div>
          <div className="style-element2">Tunisie</div>
        </div>
      ),
    },

  ]
  }>

  </GalleryFootprint>

</Section>
}