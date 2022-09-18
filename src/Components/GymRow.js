import GymContainer from "./GymContainer"
import "../CSS/gym.css"

export default function SchoolRow(){
    return(
        <div className="row rowG">
            <GymContainer/>
            <GymContainer/>
            <GymContainer/>
            <GymContainer/>
            <GymContainer/>
            <GymContainer/>
            <GymContainer/>
        </div>
    )
}