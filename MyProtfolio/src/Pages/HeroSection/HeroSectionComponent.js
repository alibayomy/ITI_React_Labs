import React from "react";
import "./HeroSectionStyle.css"
import myImg from "./imags/IMG_5509.JPG"
import ContactMeButton from "../../Components/ContactMeButton";
class HeroSection extends React.Component
{
    render()
    {
        return(
            <div className=" heroSection container-fluid">
                <div className="row align-items-center  text-center">
                    <div className="col-md-6 col-sm-12">
                        <h1>Ali Bayomy</h1>
                        <h2 className="mt-5">Web developer & Software engineer</h2>
                        <ContactMeButton/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                         <img src={myImg} className="img-fluid" ></img> 
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroSection