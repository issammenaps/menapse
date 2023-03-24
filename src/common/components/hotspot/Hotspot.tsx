import { IHotspot } from "./IHotspot";

export default function Hotspot({className}: IHotspot){


    return(
        
        <div className={`position-relative ${className ? className : ""}`} >
            <img src="/strategic.png" className="hotspot-image"></img>

            <span className="highlight-spot center-y center-x  sectors" data-toggle="tooltip" data-placement="top" title="Aeronautics, Automotive, Banking..."></span>           
            <span className="highlight-spot center-y center-x businesses" data-toggle="tooltip" data-placement="top" title="Engineering, Configuration management,Conformity attestation..."></span>
            <span className="highlight-spot center-y center-x data" data-toggle="tooltip" data-placement="top" title="Artificial Intelligence, Analytics, Machine Learning..." ></span>
            <span className="highlight-spot center-y center-x technology" data-toggle="tooltip" data-placement="top" title="Full Stack, Cybersecurity, Automation..."></span>
           
            <span className="highlight-spot center-y center-x data-center" ></span>
            <span className="highlight-spot center-y center-x data-end"></span>


        </div>
    )
}