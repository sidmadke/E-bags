import "../CSS/School.css"

export default function SchoolContainer(){
    return(
        <div className="containS">
            <img src={require("../img/thoratbagsschool y.png")} height="70%"></img>
            <div className="details">
                <p>Bag Name</p>
                <span>Price:###</span>
            </div>
        </div>
    )
}