import React from "react";
import './BarChartComponentStyle.css'
class BarChartComponent extends React.Component
{
    constructor(props)
    {
        super()
    }
    render()
    {
        return(
            <>
                <div className="progress barChartContainer mt-3 mb-3">
                    <div className="progress-bar barCharTitle" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.props.title}</div>
                    <div className="progress-bar barChart" role="progressbar" style={{ width: `${this.props.skillPrecn}%` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </>
        )
    }
}
export default BarChartComponent