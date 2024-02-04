import { useState } from "react"
import ToDoComponenet from "../Components/ToDoComponent"
import MyButton from "../Components/MyButton"
import './ToDoPage.css'
import DoneComponent from "../Components/DoneComponent"


function ToDoPage()
{
    
    

    // const [mydivs, setMyDivs]= useState([
       
    // ])
   
    // }
    // function deletingToDo(e){
    //     console.log("clicked")
    //     setMyDivs([
    //         ...mydivs
    //     ])    
    // }



    // function doneTask(e)
    // {
    //     console.log(e.target.parentElement)
    //     console.log(e.target.parentElement.id)
    //     console.log(mydivs)
    //     setMyDivs([
    //         mydivs[e.target.parentElement.id].props=
    //         <div className="d-flex toDoPage rounded-pill m-5 justify-content-between" id={e.target.parentElement.id}>   
    //             <s><ToDoComponenet Title={data.value}></ToDoComponenet></s>
    //             <MyButton title="Done" btnClass="btn-success" myfunction={(e)=>doneTask(e)}></MyButton>
    //             <MyButton title="Delete" btnClass="btn-danger" myfunction={(e)=>deletingToDo(e)}></MyButton>
    //         </div>
    //     ])
    //     console.log(mydivs)
    // }

    // function addComponenet()
    // {
    //     const oldId= data.id
    //     setData({
    //         ...data,
    //         id: oldId + 1
    //     })
    //     setMyDivs(
    //         [...mydivs,
    //         <div className="d-flex toDoPage rounded-pill m-5 justify-content-between" id={data.id}>   
    //             <ToDoComponenet Title={data.value}></ToDoComponenet>
    //             <MyButton title="Done" btnClass="btn-success" myfunction={(e)=>doneTask(e)}></MyButton>
    //             <MyButton title="Delete" btnClass="btn-danger" myfunction={(e)=>deletingToDo(e)}></MyButton>
    //         </div>]
    //     )
    //     console.log(mydivs)

    const [id, setId] = useState(0)
    const [data,setData]= useState("")

    function changeData(e)
    {
        setData(e.target.value)
    }
    const [myDivs, setMyDivs] = useState([
    ])
    
    function changeData(e)
    {
        setData(e.target.value)
    }
    function addComponenet(e)
    {
        setMyDivs([
            ...myDivs,
             <ToDoComponenet key={id} id={id} Title={data} btnClassDone ="btn-success" donetitle= "Done" deletetitle="Delete" btnClassDelete="btn-danger" deleteFunc={(e) => deleteComponent(e)} doneFunc= {(e) => setDone(e)} ></ToDoComponenet>
        ])
        console.log(myDivs)
        setId(id +1)
    }
    
    function setDone(e)
    {
       setMyDivs(myDivs.map((div) => {
        return (
         (div.props.id == e.target.parentElement.id) ? <DoneComponent id={e.target.parentElement.id} Title={e.parentElement.title} btnClassDone ="btn-success" donetitle= "Done" deletetitle="Delete" btnClassDelete="btn-danger" deleteFunc={(e) => deleteComponent(e)} doneFunc= {(e) => setDone(e)}/> : div
       )}))
    }

        
    

         
  
    function deleteComponent(e) {
        console.log(myDivs)
        debugger;
        setMyDivs(myDivs.filter(div => div.props.id !==  e.target.parentElement.id));
    }

    return(
        <>
            <input type="text" className="form-control"  placeholder="Enter new task" onChange={(e)=> changeData(e)}></input>
            <MyButton title="Add" btnClass="btn-info" myfunction={(e)=> addComponenet(e)}></MyButton>
            <div>
                    {myDivs}
            </div>

        </>


    )
}

export default  ToDoPage