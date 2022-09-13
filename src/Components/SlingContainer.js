import "../CSS/sling.css"

export default function SlingContainer(){
    return(
        <div className="containSl">
            <img src={require("../img/slingbag.png")} height="50%"></img>
            <div className="details">
                <p>Bag Name</p>
                <span>Price:###</span>
            </div>
        </div>
    )
}
