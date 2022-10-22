import { Link } from "react-router-dom"
import "../CSS/slider.css"
// export default function Slider(){
//     return(
//         <div className="slide">
//             <img src={require("../img/slingbag.png")} height="70%"></img>
//             <span>Now available</span>
//             <p>New Arrivals</p>
//             <button className="BuyNow"><Link to="./sling">Buy Now</Link></button>
//         </div>
//     )
// }

import React from 'react'

const Slider = () => {
    return (
        <div className='slides'>
            <div id="slider">
                <figure>
                    <div className="slide">
                        <img src={require("../img/slingbag.png")} height="400px"></img>
                        <span>Now available</span>
                        <p>New Arrivals</p>
                        <button className="BuyNow"><Link to="./sling"><img src={require("../img/ordernow33.png")} height="150px"></img></Link></button>
                    </div>
                    <div className="slide">
                        <img src={require("../img/thoratbags gym.png")} height="400px"></img>
                        <span>Now available</span>
                        <p>New Arrivals</p>
                        <button className="BuyNow"><Link to="./Gym"><img src={require("../img/ordernow33.png")} height="150px"></img></Link></button>
                    </div>
                    <div className="slide">
                        <img src={require("../img/thoratbagsschool y.png")} height="400px"></img>
                        <span>Now available</span>
                        <p>New Arrivals</p>
                        <button className="BuyNow"><Link to="./school"><img src={require("../img/ordernow33.png")} height="150px"></img></Link></button>
                    </div>
                    <div className="slide">
                        <img src={require("../img/bags/bag5.png")} height="400px"></img>
                        <span>Now available</span>
                        <p>New Arrivals</p>
                        <button className="BuyNow"><Link to="#trending"><img src={require("../img/ordernow33.png")} height="150px"></img></Link></button>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Slider;