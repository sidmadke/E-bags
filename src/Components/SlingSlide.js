import "../CSS/sling.css"

export default function SlingSlider(){
    return(
        <div className="slideSl">
            <img src={require("../img/slingbag.png")} height="70%"></img>
            {/* <span>Now available</span> */}
            <p>New Arrivals</p>
            
            <a href="#Title"><h2>Scroll and Checkout!</h2></a>
            {/* <button className="BuyNow"><Link to="./sling">Buy Now</Link></button> */}
        </div>
    )
}