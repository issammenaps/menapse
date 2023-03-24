import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import { useEffect, useState } from "react";
import lifeAtMenapsPage from "../../../json/LifAtMenapsPage.json"
import Input from "@/common/forms/input/Input";
import Textarea from "@/common/forms/textarea/Textarea";
import Link from "next/link";

export default function ContactUsSecondSection(props: any) {

  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  const addresses = [{
    country: '/franceflag.png',
     addresses: ['• 18 Place Roguet, 31300 Toulouse, France', '• Tour Coeur Défense 110 Esplanade du Général de Gaulle, 92400 Courbevoie, Ile de France, France']
  },
  {
    country: '/tunisiaflag.png',
    addresses: [
      '• 14 avenue de la Bourse - Lac 2 Tunis 1053, Tunisie'
    ]
  },
  {
    country: '/morocco-flag.png',
    addresses: [
      '• 34 Boulevard Zerktouni Casablanca 20000, Maroc'
    ]
  },
  {
    country: '/india-flag.png',
    addresses: [
      '• 1321, 27th Main Rd, PWD Quarters, Sector 2, HSR Layout, Bengaluru, Karnataka 560102, Inde'
    ]
  }
  ]
    return    <Section disableMargin fullWidth background className=" section2contact section-padding-y position-relative ">
    <img src="/cadre-contact.png" className="cadreimg d-md-block d-none " width={250} />


    <Section className="  main-wrapper section-margin-0 section-padding-x">
      <Grid >
        <Widget size={6} className="bloc1 d-flex justify-content-start flex-column section-padding-x ">
          <Grid className="gridform">
            <Widget size={12} mobile className="mt-2">
              <div className="title1contact">You want to know more?<br />Contact us here</div>
            </Widget>
            <Widget size={12} mobile className="mt-2">
              <Input type="text" placeholder="  Name" />
            </Widget>
            <Widget size={12} mobile className="mt-2">
              <Input type="text" placeholder="Email " />
            </Widget>
            <Widget size={12} mobile className="mt-2">
              <Textarea placeholder="Message " cols={40} rows={10} />
            </Widget>
            <Widget size={12} mobile className="mt-5">
              <Link href={'/*'} className={`    btncontact  `}>send </Link>
            </Widget>

          </Grid>
        </Widget >


        <Widget size={6} className={`  bloc2 `}>
          <div className="title2contact">You can write directly to hello@menaps.com</div>
          <div className=" text-center mb-5 "   >
            <img src="/fleche-contact-22.png   " className=" text-center imgflech" />
          </div>
          <div className="title2contact text-center mt-5">Or visit us here</div>
          <div className="addresses">
            {addresses.map((item, index) => (
              <div key={index} className="address-container">
                <img src={item.country} className="contactflagimg" />
                <ul className="address-list">
                  {item.addresses.map((address, index) => (
                    <li className="address-list-item" key={index}>{address}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Widget>
      </Grid>

    </Section>
  </Section>
}