
function MyButton(props)
{
 

    return(
            <button className={`btn m-3   ${props.btnClass}`}
            onClick={props.myfunction}>{props.title}</button>
    )
}
export default MyButton