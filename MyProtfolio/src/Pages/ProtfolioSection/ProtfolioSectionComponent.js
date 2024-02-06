import React from "react";
import './ProtfolioSectionStyle.css'
import CardComponent from "../../Components/CardComponent";
class ProtfolioSectionComponent extends React.Component{

    render()
    {
        return(
            <div className="container ">
                <div className="row text-center text-sm-start">
                    <div className="col-12">
                        <h1 className="portfolioHead mb-5">Protfolio</h1>
                    </div>
                    <CardComponent bgColor="#949198" cardTitle="Web Desgin"/>
                    <CardComponent bgColor="#2C2C2C" cardTitle="Mobile Desgin"/>
                    <CardComponent bgColor="#959188" cardTitle="Logo Desgin"/>
                    <CardComponent bgColor="#2C2C2C" cardTitle="Api Creation"/>
                    <CardComponent bgColor="#959188" cardTitle="Logo Desgin"/>
                    <CardComponent bgColor="#2C2C2C" cardTitle="Responsive Desgin"/>

                   
                </div>
            </div>
        )
    }

}
export default ProtfolioSectionComponent