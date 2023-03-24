import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import React, { useRef, useEffect, useState } from "react";
export default function ImagineFourthSection(props: any) {
  const domaine = [
    "Gestion De Projet", "Dev Fullstack", "Data & IA", "Cybersécurité", "Robotique", "Big Data", "Dev Ops", "Communication", "Marketing Digital"
  ];
  const topDivRef = useRef<HTMLDivElement>(null);
  const bottomDivRef = useRef<HTMLDivElement>(null);
  const leftDivRef = useRef<HTMLDivElement>(null);
  const rightDivRef = useRef<HTMLDivElement>(null);
  const [topDivVisible, setTopDivVisible] = useState(false);
  const [bottomDivVisible, setBottomDivVisible] = useState(false);
  const [leftDivVisible, setLeftDivVisible] = useState(false);
  const [rightDivVisible, setRightDivVisible] = useState(false);
  const [topAnimationStarted, setTopAnimationStarted] = useState(false);
  const [bottomAnimationStarted, setBottomAnimationStarted] = useState(false);
  const [leftAnimationStarted, setLeftAnimationStarted] = useState(false);
  const [rightAnimationStarted, setRightAnimationStarted] = useState(false);
  useEffect(() => {
    const topDiv = topDivRef.current;
    const bottomDiv = bottomDivRef.current;
    const leftDiv = leftDivRef.current;
    const rightDiv = rightDivRef.current;

    const handleScroll = () => {
      if (topDiv) {
        const topDivPos = topDiv.getBoundingClientRect();
        const topDivTop = topDivPos.top;
        const topDivBottom = topDivPos.bottom;

        if (topDivTop >= 0 && topDivBottom <= window.innerHeight && !topAnimationStarted) {
          setTopDivVisible(true);
          setTopAnimationStarted(true);
        }
      }

      if (bottomDiv) {
        const bottomDivPos = bottomDiv.getBoundingClientRect();
        const bottomDivTop = bottomDivPos.top;
        const bottomDivBottom = bottomDivPos.bottom;

        if (bottomDivTop >= 0 && bottomDivBottom <= window.innerHeight && !bottomAnimationStarted) {
          setBottomDivVisible(true);
          setBottomAnimationStarted(true);
        }
      }

      if (leftDiv) {
        const leftDivPos = leftDiv.getBoundingClientRect();
        const leftDivLeft = leftDivPos.left;
        const leftDivRight = leftDivPos.right;

        if (leftDivLeft >= 0 && leftDivRight <= window.innerWidth && !leftAnimationStarted) {
          setLeftDivVisible(true);
          setLeftAnimationStarted(true);
        }
      }

      if (rightDiv) {
        const rightDivPos = rightDiv.getBoundingClientRect();
        const rightDivLeft = rightDivPos.left;
        const rightDivRight = rightDivPos.right;

        if (rightDivLeft >= 0 && rightDivRight <= window.innerWidth && !rightAnimationStarted) {
          setRightDivVisible(true);
          setRightAnimationStarted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [topAnimationStarted, bottomAnimationStarted, leftAnimationStarted, rightAnimationStarted]);


    return   <Section disableMargin className="main-wrapper" background={false} fullWidth={false}>

    <p className="textdamien"  >imagine accueille tous les projets innovants conjuguant solutions digitales et nouvelles technologies.</p>

    <Grid className="    ">

      <Widget size={6} className="   align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
        <div className="leftblocimagine ">
          <p className="textheaderdamien">  Un point de contact unique</p>
          <img className="damien-img" src="/damien-b.png" alt="Card image cap" />
          <div className="damient-title1  ">Damien Bigot</div>
          <div className="   "> <span dangerouslySetInnerHTML={{ __html: "<div  > PhD intelligence artificielle<br><strong>Coordinateur<em> imagine<br></em></strong> Responsable Innovation MENAPS</div>" }} />  </div>
          <br />
          <div className="damient-desc "> <span dangerouslySetInnerHTML={{ __html: "<p>Après une thèse en intelligence artificielle en partenariat avec&nbsp;<b data-stringify-type='bold'>Renault</b>&nbsp;et<b data-stringify-type='bold'>&nbsp;IBM</b>, Damien a cofondé&nbsp;<b data-stringify-type='bold'>Coovia,&nbsp;</b>une start-up spécialisée dans le déplacement domicile-travail.<br>Il rejoint un<b data-stringify-type='bold'>&nbsp;</b>cabinet conseil en tant que responsable innovation grands comptes :&nbsp;<b data-stringify-type='bold'>Airbus</b>&nbsp;et&nbsp;<b data-stringify-type='bold'>Renault.</b><br>En 2021, Damien rejoint&nbsp;<b data-stringify-type='bold'>linkeys</b>&nbsp;une jeune start-up suisse afin de les aider à industrialiser leur concept.</p>" }} />  </div>

        </div>
      </Widget>

      <Widget refWidget={topDivRef} size={6} className={`box bluebloc    mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4 ${topDivVisible ? "animate" : ""}`} >

        <h4 className="text1imagineblocblue mb-5"  ><span dangerouslySetInnerHTML={{ __html: "Une force de frappe </br>opérationnelle" }} /></h4>
        <p className="text2imagineblocblue" ><span dangerouslySetInnerHTML={{ __html: "locale (France), et globale (nearshore et offshore)</br> activable à très court terme." }} /></p>
        <ul className="domainelist">
          {domaine.map((item, index) => (

            <li className="list-item" key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>

      </Widget>
    </Grid>
    <div className=" mt-5 mb-5 ">
      <Button hoverClassName="hoverclass" className=" btnpaddingbtnimagine  btn-style backgroundColor  " animated title="I am interested!" href="/" />
    </div>
    {/* <div className={` containerbtn  mt-4    `}>
      <Link href={'/*'} className={` btnimagine2  mt-4    `}> Je suis intéresssé ! </Link>
    </div> */}
  </Section >
}