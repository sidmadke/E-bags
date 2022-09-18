import "../CSS/School.css"

export default function SchoolContainer(){
    return(
        <div className="contain containS">
            <img src={require("../img/thoratbagsschool y.png")} height="70%"></img>
            <div className="details">
                <p>Bag Name&nbsp;&nbsp;&nbsp; <span>&nbsp;&nbsp;&nbsp;Price:###</span></p>
                 &nbsp;<text>Extensive Info</text>
            </div>
        </div>
    )
}
