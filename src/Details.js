import React, { Component} from "react";
import Products from "./data/products";
import "./CSS/Details.css";
// import axios from 'axios';


let a = 1;

console.log(Products,Products.DBag[0].img)
class Details extends Component{
    // state = {
    //     product: {}
    // }

    // async componentDidMount() {
    //     const product = this.props.products;
    //     const { data } = await axios.get(`http://localhost:5000/api/products/${product}`)
    //     this.setState({ product: data })
    // }
    render(){
    return (
        <div>
            <div className="main">
                <div className="block1">
                    <div className="view">
                        <div className="img">
                            <img src={require('../src/img/dbag1.jpg')} height={100} width={90} ></img>
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
                                <img src={require('../src/img/dbag1.jpg')}  width={400} height={400} className='si'></img>
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
                    <h1>{Products.DBag[0].title}</h1>
                    <div className="c">
                        <button className="quantity" onclick="decre(a)">-</button><label className="quantity no">{a}</label><button className="quantity" onclick={incre(a)}>+</button></div>
                    <div className="b">
                        <button className="cart" onClick={()=>this.props.handleAddCart(Products)}>Add to Cart
                        </button><button className="buy">Buy Now</button></div>

                    <div className="details">
                        <div className="p">Product Details</div>
                        <table>
                            <tr>
                                <td>Model</td>
                                <td>: {Products.DBag[0].Model}</td>
                            </tr>
                            <tr>
                                <td>Capacity</td>
                                <td>: {Products.DBag[0].Capacity}</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>: {Products.DBag[0].Color}</td>
                            </tr>
                            <tr>
                                <td>Features</td>
                                <td>: {Products.DBag[0].Features}</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>: {Products.DBag[0].Dimensions}.</td>
                            </tr>
                            <tr>
                                <td>Warranty</td>
                                <td>: {Products.DBag[0].Warranty}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className="price">₹{Products.DBag[0].price}
            </div></div>
    )
    }
};
function incre(a){
    a=a+1;
}
function decre(a){
    a=a-1;
}
 export default Details;