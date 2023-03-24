import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import { services } from "@/helpers/services/services";

export default function OurFootprintThirdSection(props: any) {
  const data = [
    { country: 'Toulouse - France', address: '18 place Roguet, 31300 Toulouse' },
    { country: 'Paris - France', address: 'Tour coeur Défense, 110 Espl Charles de Gaulle, 92400 Courbevoie' },
    { country: 'Casablanca - Morocco', address: '34 bd Zerktouni, Casablanca 20000' },
    { country: 'Tunis - Tunisia', address: '14 av de la Bourse Lac 2, Tunis 1053' },
    { country: 'Bangalore - India', address: '1321, 27th Main Rd, PWD Quarters, Sector 2, HSR Layout, Bengaluru, Karnataka 560102' }
  ];
    return   <Section  disableMargin className="addressvalues main-wrapper " background={false} fullWidth={false}> 
    <div className="d-flex  flex-wrap-our-values     mx-1"> 
      {data.map((item, i: number) => (
        <div key={i} className="content-location content  " >
          <p className="headercontetn  " key={i} dangerouslySetInnerHTML={{ __html: item.country }} />
          <p className="contentourvalues " key={i} dangerouslySetInnerHTML={{ __html: item.address }} /> 
        </div> 
      ))} 
    </div>
  </Section>
}