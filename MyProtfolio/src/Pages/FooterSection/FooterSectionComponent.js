import React from "react";
import "./FooterSectionStyle.css"
import mailPic from './images/mail.png'
import phoneImg from './images/icons8-phone-50.png'
import ContactMeButton from "../../Components/ContactMeButton";
import twitterImg from './images/twitter.png'
import githubIcon from './images/6214715_github_logo_icon.png'
import facebookIcon from './images/facebook.png'
class FooterSectionComponent extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid footerSection pt-5">
                <div className="row align-items-center  text-center">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <p className="text-white">GET IN TOUCH</p>
                        <a  href="mailto: alibayomy12@gmail.com">
                            <img src={mailPic} style={{width: "20px"}}></img> 
                            alibayomy12@gmail.com</a>
                        <p className="text-white mt-3">
                            <img src={phoneImg} style={{width: "20px"}}></img>
                            <span>01148164590</span>
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <ContactMeButton/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xsm-4">
                                <a href="https://github.com/alibayomy">
                                <img src={githubIcon} style={{width: "50px"}}></img>
                                </a>
                                
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xsm-4">
                                <a href="https://twitter.com/ali_bayomy">
                                    <img src={twitterImg} style={{width: "50px"}}></img>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xsm-4">
                                <a href="https://www.facebook.com/alibayomy12">
                                    <img src={facebookIcon} style={{width: "50px"}}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default FooterSectionComponent