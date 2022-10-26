import "../CSS/gym.css"
import {Link} from "react-router-dom"

export default function GymContainer(){
    return(
        <div className="containG">
            <Link to="/Details">
            <img src={require("../img/thoratbags gym.png")} height="70%"></img></Link>
            <div className="details">
                <p>Bag Name&nbsp;&nbsp;&nbsp; <span>&nbsp;&nbsp;&nbsp;Price:###</span></p>
                 &nbsp;<text>Extensive Info</text>
            </div>
        </div>
    )
}
