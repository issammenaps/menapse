import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import GalleryFootprint from "@/common/components/gallery/GalleryFootprint"; 
import { exp } from "@/helpers/services/exp";
import { quoi, comment } from "@/helpers/quoi/quoi";
import Expertise from "@/common/components/expertise/Expertise";
import React, { useRef, useEffect, useState } from "react";
export default function ImagineFifthSection(props: any) {
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
  let data = [{ image1: "/majd.png", image2: "/aero.png", title1: "Majd Benabdallah", title2: "Secteur Aéronautique", text: "Majd has more than 15 years seniority in aerospace within international companies (<strong>Airbus</strong>, <strong>Bombardier</strong>, <strong>Safran</strong>, <strong>Stelia</strong> <strong>Aerospace</strong>) and seized perfectly its ecosystem. His skills combine not only technical aspects ( Electrical, Mechanical &amp; Structural design and stress) but also a strong Process, Methods and Tools dimension to manage Aircraft program lifecycle development and management. During his career, he worked on different programs such as A350, A380, A320 Neo, Cseries / A220, Global 7000/8000." },
  { image1: "/emmanuel.png", image2: "/aero.png", title1: "Emmanuel Strub", title2: "  Automotive Industry", text: "Emmanuel, with more than 20 years within <strong>PSA group / Stellantis</strong>, has a strong expertise in R&amp;D, Quality and PMT activities. From mechatronics system design to process improvement and customization to support system engineering deployment, up to the setup of the data strategy&nbsp; for engineering activities. Before joining Menaps, he created at Stellantis the Data and Connected Cars R&amp;D business unit." },
  { image1: "/mehdi.png", image2: "/aero.png", title1: "Mehdi Sekkouri", title2: "Insurance Industry", text: "Mehdi has 22 years of experience in large Moroccan and international brokerage and insurance groups. He has been a correspondent for <strong>Marsh</strong> and <strong>Verspieren</strong> for more than 15 years. He also managed a subsidiary of <strong>AXA</strong> for 3 years. Holder of a Ministry of Finance agreement&nbsp;as an “all-branch” insurance broker, he has specialized in niches areas such as credit insurance, factoring, reinsurance and affinity products. He also assists large groups in auditing their insurance programmes, drawing up risk maps and optimizing guarantees and costs." },
  { image1: "/michel.png", image2: "/aero.png", title1: "Michel Rascol", title2: "Logistics Industry", text: " <span style='font-weight: 400;'>Michel first worked for nearly 25 years in the Electronics (<strong>HP</strong>), Automotive (<strong>Valeo</strong>), Chemicals (<strong>Rhône Poulenc</strong>), Nuclear (<strong>Areva</strong>) and IT Services Engineering (<strong>CSC Euriware</strong>) sectors in positions of responsibility within support functions such as IT and Purchasing. </span><span style='font-weight: 400;'><br></span><span style='font-weight: 400;'>He then turned to entrepreneurship, supporting start-ups of the project stage, from ideation to maturity and market launch. Passionate about entrepreneurship, Michel supports them in the achievement of their strategic visions and the concretization of their objectives.&nbsp;</span>" },]
  const domaine = [
    "Gestion De Projet", "Dev Fullstack", "Data & IA", "Cybersécurité", "Robotique", "Big Data", "Dev Ops", "Communication", "Marketing Digital"
  ];
  return <>
    <Section disableMargin className="  nossecteurs"  >
        <h1 className="text-center text-offres mb-5" >Nos secteurs d’expertise</h1>
        <div className={` main-wrapper     mt-4    `}>
          <div className={`box textexpertise ${bottomDivVisible ? "animate" : ""}`} ref={bottomDivRef}><span>L’expérience du groupe MENAPS sur ces trois secteurs historiques permet à imagine d’offrir un accompagnement enrichi sur ces thématiques et un accès privilégié à des interlocuteurs C-Level de ces industries.</span></div>


          <div className="d-flex  flex-wrap-our-values     mx-1">

            {data.map((item, i: number) => (
              <Expertise image1={item.image1} image2={item.image2} title1={item.title1} title2={item.title2} text={item.text} />
            ))}


          </div>
        </div>
      </Section >
  </>

}