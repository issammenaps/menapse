import Button from "../button/Button"
import Card from "../card/Card"
import Grid from "../grid/Grid"
import Section from "../Section/Section"
import Widget from "../widget/Widget"
import { ICarousel } from "./ICarousel"

export default function Carousel(props: ICarousel){
    return (<>

<div className=" sliderstyle"  >
      <img className="Silhouette-image" src="/Silhouette-Home.png" alt="First slide" />
        <Grid className=" main-wrapper slider-container">
         
          <Widget size={6} className="" >
          </Widget>
          <Widget size={6} className="footprint" >
          <Card styleHeaderPage="slidertitle  text-white" styleContentPage="text-white slidercontent " HeaderTitle="<h1>MENAPS,</h1>" content="  <span style='text-align: left;  letter-spacing: 0px; font-weight: 500;  ' data-stylerecorder='true'> is an <span style='color: rgb(5, 242, 242); text-align: left;  letter-spacing: 0px; font-weight: 500;  ' data-stylerecorder='true'>integrated,</span> strategic and <br>operational consulting group, <br> with a strong dimension of <br>technologicaland digital innovation</span>" />      
                <Button className="btn-padding btn-style    buttoncarousel" variant="link" title="Let's talk about it " href="/our-values" />
          </Widget>
        </Grid>
      </div>
    </>)
}