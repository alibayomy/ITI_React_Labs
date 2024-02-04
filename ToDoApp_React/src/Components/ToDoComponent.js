import { useState } from "react"
import MyButton from "./MyButton"
import './ToDoComponent.css'

function ToDoComponenet(props)
{

    return (
        <div className="d-flex toDoPage rounded-pill m-5 justify-content-between" id={props.id}>   
            <p className="ps-5 mt-3 toDoDiv">{props.Title}</p>
            <button className={`btn m-3   ${props.btnClassDone}`} onClick={props.doneFunc} >{props.donetitle}</button>
            <button className={`btn m-3   ${props.btnClassDelete}`} onClick={props.deleteFunc} >{props.deletetitle}</button>
         </div>
    )
}
export default ToDoComponenet
