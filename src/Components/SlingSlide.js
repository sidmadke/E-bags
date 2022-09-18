import "../CSS/sling.css"

export default function SlingSlider(){
    return(
        <div className="slide slideSl">
            <img src={require("../img/slingbag.png")} height="70%"></img>
            {/* <span>Now available</span> */}
            <p>New Arrivals</p>
            <h2>Scroll and Checkout!</h2>
            {/* <button className="BuyNow"><Link to="./sling">Buy Now</Link></button> */}
        </div>
    )
}