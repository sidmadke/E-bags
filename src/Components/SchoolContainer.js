import "../CSS/School.css"
import { Link } from "react-router-dom";
import Details from "../Details";

export default function SchoolContainer(){
    return(
        <div className="contain containS">
            <Link to="/Details">
            <img src={require("../img/thoratbagsschool y.png")} height="70%"></img></Link>
            <div className="details">
                <p>Bag Name&nbsp;&nbsp;&nbsp; <span>&nbsp;&nbsp;&nbsp;Price:###</span></p>
                 &nbsp;<text>Extensive Info</text>
            </div>
        </div>
    )
}
