import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";
import GalleryFootprint from "@/common/components/gallery/GalleryFootprint"; 
import React, { useRef, useEffect, useState } from "react";
import { exp } from "@/helpers/services/exp";
import { quoi, comment } from "@/helpers/quoi/quoi";
export default function ImaginSixthSection(props: any) {
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

  return <>
   <Section disableMargin className="main-wrapper2 iframesection" background={false} fullWidth={false}  >
        <Grid className="    ">

          <Widget size={6} className="   align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
            <div className="leftblocimagine ">
              <h2 className="rendezvoustitle">  Prenez 15’ pour parler de votre projet avec Damien !</h2>
              <img className="damien-img" src="/damien-b.png" alt="Card image cap" />
              <div className="damient-title1  ">Damien Bigot</div>
              <div className="   "> <span dangerouslySetInnerHTML={{ __html: "<div  > PhD intelligence artificielle<br><strong>Coordinateur<em> imagine<br></em></strong> Responsable Innovation MENAPS</div>" }} />  </div>
              <br />
              <div ref={rightDivRef} className={`box damient-desc  ${rightDivVisible ? "animate" : ""}`}> <span dangerouslySetInnerHTML={{ __html: "<p>Et sinon envoyez-nous un courrier électronique : <br><span style='color:#181236b0;'  >imagine@menaps.com</span></p>" }} />  </div>

            </div>
          </Widget>

          <Widget refWidget={leftDivRef} size={6} className={`box iframe mx-auto shadow-lg  mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4 ${leftDivVisible ? "animate" : ""}`}>

            <iframe src="https://calendly.com/damien-bigot/imag-ne-by-menaps?embed_domain=menaps.com&amp;embed_type=Inline&amp;hide_gdpr_banner=1" width="100%" height="100%" frameBorder="0"></iframe>

          </Widget>
        </Grid>

      </Section >

  </>

}