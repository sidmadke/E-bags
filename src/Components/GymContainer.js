import "../CSS/gym.css"

export default function GymContainer(){
    return(
        <div className="containG">
            <img src={require("../img/thoratbags gym.png")} height="70%"></img>
            <div className="details">
                <p>Bag Name</p>
                <span>Price:###</span>
            </div>
        </div>
    )
}
