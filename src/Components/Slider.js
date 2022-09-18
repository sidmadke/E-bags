import { Link } from "react-router-dom"

export default function Slider(){
    return(
        <div className="slide">
            <img src={require("../img/slingbag.png")} height="70%"></img>
            <span>Now available</span>
            <p>New Arrivals</p>
            <button className="BuyNow"><Link to="./sling">Buy Now</Link></button>
        </div>
    )
}