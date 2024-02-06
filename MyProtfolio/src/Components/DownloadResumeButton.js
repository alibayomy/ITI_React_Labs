import React from "react";
import "./DownloadResumeButtonStyle.css"
import '../Pages/AboutMeSection/Ali_Tarek_Mohamed_Said.pdf'
class DownloadResumeButton extends React.Component {

    render()
    {
        return(
            <button className="downloadResumeBt">
                <a href="../Pages/AboutMeSection/Ali_Tarek_Mohamed_Said.pdf" download>Download Resume</a>
            </button>
        )
    }
}
export default DownloadResumeButton 