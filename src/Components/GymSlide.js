import "../CSS/School.css"
import "../CSS/gym.css"

export default function GymSlider(){
    return(
        <div className="slideG">
            <img src={require("../img/thoratbags logo black.png")} height="80%"></img>
            <span>VARIETY OF GYM BAGS 
            <p><center>AVAILABLE HERE</center></p>
            </span>
        </div>
    )
}