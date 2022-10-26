import "../CSS/sling.css"
import {Link} from "react-router-dom"

export default function SlingContainer(){
    return(
        <div className="containSl">
            <Link to="/Details">
            <img src={require("../img/slingbag.png")} height="50%"></img></Link>
            <div className="details">
                <p>Bag Name&nbsp;&nbsp;&nbsp;<span>&nbsp;&nbsp;&nbsp;&nbsp;Price:###</span></p>
                 &nbsp;<text>Extensive Info</text>
            </div>
        </div>
    )
}
