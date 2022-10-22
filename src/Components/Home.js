import Slider from "./Slider"
import "../CSS/home.css"

export default function Home() {
    return (
        <>
            <Slider />
            <div className="trending">
                <main>
                    <h1 className="sectoin-heading">Latest Products</h1>
                    <div className="product-list">
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag1.png")} alt=" "></img>
                            <h1 className="product-name primary-headline">Camp Rock 8</h1>
                            <p className="product-price">₹800</p>
                            <p className="product-category meta">Camping Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag2.png")} alt=" " />
                            <h1 className="product-name primary-headline">Red Rock 4</h1>
                            <p className="product-price">₹500</p>
                            <p className="product-category meta">Unisex College Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag3.png")} alt=" " />
                            <h1 className="product-name primary-headline">Nike Ocean 4</h1>
                            <p className="product-price">₹500</p>
                            <p className="product-category meta">Men’s Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag4.png")} alt=" " />
                            <h1 className="product-name primary-headline">Blue mountain</h1>
                            <p className="product-price">₹400</p>
                            <p className="product-category meta">Women’s Shoes</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag7.png")} alt=" " />
                            <h1 className="product-name primary-headline">
                                Black Office Box 2
                            </h1>
                            <p className="product-price">₹300</p>
                            <p className="product-category meta">Office Tiffin Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag6.png")} alt=" " />
                            <h1 className="product-name primary-headline">Red Fire 2</h1>
                            <p className="product-price">₹500</p>
                            <p className="product-category meta">College Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/manWithBag.png")} alt=" " />
                            <h1 className="product-name primary-headline">Dasher 35</h1>
                            <p className="product-price">₹400</p>
                            <p className="product-category meta">Unisex College Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag5.png")} alt=" " />
                            <h1 className="product-name primary-headline">
                                Military Rock 2
                            </h1>
                            <p className="product-price">₹900</p>
                            <p className="product-category meta">Military Themed Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag8.png")} alt=" " />
                            <h1 className="product-name primary-headline">Camper 4</h1>
                            <p className="product-price">₹500</p>
                            <p className="product-category meta">Camping and Trekking Bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag9.png")} alt=" " />
                            <h1 className="product-name primary-headline">Camp Champ</h1>
                            <p className="product-price">₹800</p>
                            <p className="product-category meta">Men’s Trail Running Shoes</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/bag10.png")} alt=" " />
                            <h1 className="product-name primary-headline">Girl-Bag</h1>
                            <p className="product-price">₹400</p>
                            <p className="product-category meta">Ladies bag</p>
                        </article>
                        <article className="product">
                            <img loading="lazy" src={require("../img/bags/girlWithbag.png")} alt=" " />
                            <h1 className="product-name primary-headline">Lady leath</h1>
                            <p className="product-price">₹800</p>
                            <p className="product-category meta">Women’s leather bag</p>
                        </article>
                    </div>
                </main>
            </div>
        </>
    )
}