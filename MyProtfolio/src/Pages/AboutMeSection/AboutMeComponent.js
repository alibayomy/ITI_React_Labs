import React from "react";
import "./AboutMeStyle.css"
import DownloadResumeButton from "../../Components/DownloadResumeButton";
class AboutMeComponent extends React.Component{

    render()
    {
        return(
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 text-center">
                        <h1 className="aboutMeHead">About Me</h1>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <p className="m-0">Education: Faculty of engineering AinShams University</p>
                        <p>Ex-Facade Engineer, was holding the new postoffice</p>
                        <h4>Current:</h4>
                        <p>Passoinate about software developing && web developing tools
                         , also i have made a lot of responsive websites using different
                         different tools
                        </p>
                        <DownloadResumeButton/>
                    </div>
                </div>
            </div>
        )
    }

}
export default AboutMeComponent