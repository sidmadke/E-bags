import "../CSS/sling.css"

export default function SlingContainer(){
    return(
        <div className="containSl">
            <img src={require("../img/slingbag.png")} height="50%"></img>
            <div className="details">
                <p>Bag Name&nbsp;&nbsp;&nbsp;<span>&nbsp;&nbsp;&nbsp;&nbsp;Price:###</span></p>
                 &nbsp;<text>Extensive Info</text>
            </div>
        </div>
    )
}
