import React from "react";
import BarChartComponent from "../../Components/BarChartComponent";
import "./SkillsComponentStyle.css"

class SkillsComponent extends React.Component {
    render() {
        return (
            <div className="container skillsSection mb-5 pb-5">
                <div className="row">
                    <div className="skillsTitle col-12 text-center">
                        <h1 className="text-white fw-b m-5">
                            Skills</h1>
                    </div>
                    <div className="mySkills col-12 text-white text-center">
                        <p className="text-cente ms-5 me-5">
                        In the skills section, I present a comprehensive array of proficiencies cultivated through rigorous training at ITI Institute and the ALX Software Program, 
                        encompassing one year of intensive focus on web development. Equipped with hands-on experience in both frontend and backend development,
                        I command expertise in HTML, CSS, Bootstrap, JavaScript, jQuery, Python, Docker, Apache, React, Red Hat, and Linux environments. I leverage this skill set to architect dynamic web solutions, 
                        seamlessly integrating design elements with robust functionality. My proficiency extends beyond mere coding; I excel in problem-solving, collaborative teamwork, and navigating diverse development ecosystems. 
                        Continuously embracing learning opportunities, I remain dedicated to refining my craft and embracing emerging technologies to drive innovation and excellence in web development.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                        <div className="col-12 text-center mb-5">
                            <span className=" text-white border-bottom fs-1 p-3">MY FOCUS</span>
                        </div>
                        <div className="col-12 text-center text-white">
                            <p>Respnsive Desgin</p>
                            <p>Web Desgin</p>
                            <p>Api Creation</p>
                            <p>Laptop, tablet, mobile, Web Pages Desgin</p>

                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <BarChartComponent title="HTML" skillPrecn="70"/>
                        <BarChartComponent title="CSS" skillPrecn="65"/>
                        <BarChartComponent title="JavaScript" skillPrecn="40"/>
                        <BarChartComponent title="React" skillPrecn="35"/>
                        <BarChartComponent title="BootStrap" skillPrecn="40"/>
                        <BarChartComponent title="Python" skillPrecn="55"/>
                        <BarChartComponent title="C" skillPrecn="40"/>
                        <BarChartComponent title="Linux" skillPrecn="60"/>    
                    </div>
                 
                </div>
            </div>
        )
    }
}

export default SkillsComponent