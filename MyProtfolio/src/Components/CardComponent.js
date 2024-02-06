import React from "react";
import './CardComponentStyle.css'
import { Card } from "reactstrap";
class CardComponent extends React.Component{

    constructor(props){
        super()
    }
    render()
    {
        return(
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3 text-center">
                <div className=" prtofolioCard  p-3 mb-5  d-flex align-items-center justify-content-center" style={{backgroundColor: `${this.props.bgColor}`}}>
                    <p className="protfolioCardTitle">{this.props.cardTitle}</p>
                </div>
            </div>
        )
    }
}
export  default CardComponent