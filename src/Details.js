import React, { useEffect, useState } from "react";
import "./CSS/Details.css";
const images = [
    { url: '../img/dbag1.jpg' },
    { url: '../img/dbag2.jpg' },
    { url: '../img/dbag3.jpg' }
];

let a = 1;

export default function Details() {
    console.log(a);
    
    return (
        <div>
            <div className="main">
                <div className="block1">
                    <div className="view">
                        <div className="img">
                            <img src={require('./img/dbag1.jpg')} height={100} width={90} ></img>
                        </div>
                        <div className="img" >
                            <img src={require('./img/dbag2.jpg')} height={100} width={90} ></img>
                        </div>
                        <div className="img">
                            <img src={require('./img/dbag3.jpg')} height={100} width={90} ></img>
                        </div>
                    </div>
                    <div className="pro">
                        <div className="slideshow-container">
                            <div className="mySlides fade" >
                                <img src={require('./img/dbag1.jpg')}  width={400} height={400} className='si'></img>
                            </div>

                            <div className="mySlides fade" >
                                <img src={require('./img/dbag2.jpg')} width={400} height={400} className='si'></img>
                            </div>

                            <div className="mySlides fade" >
                                <img src={require('./img/dbag3.jpg')} width={400} height={400} className='si'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block2">
                    <h1>Model name</h1>
                    <div className="c">
                        <button className="quantity" onclick="decre(a)">-</button><label className="quantity no">{a}</label><button className="quantity" onclick={incre(a)}>+</button></div>
                    <div className="b">
                        <button className="cart">Add to Cart
                        </button><button className="buy">Buy Now</button></div>

                    <div className="details">
                        <div className="p">Product Details</div>
                        <table>
                            <tr>
                                <td>Model</td>
                                <td>: ..................</td>
                            </tr>
                            <tr>
                                <td>Capacity</td>
                                <td>: ..................</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>: ..................</td>
                            </tr>
                            <tr>
                                <td>Features</td>
                                <td>: ..................</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>: ..................</td>
                            </tr>
                            <tr>
                                <td>Warranty</td>
                                <td>: ..................</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className="price">₹5600
            </div></div>
    )
   
};
function incre(a){
    a=a+1;
}
function decre(a){
    a=a-1;
}
