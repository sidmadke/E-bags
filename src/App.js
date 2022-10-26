import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Gym from './Gym';
import School from './school';
import Account from './Account';
import Sling from './Sling';
import Contact from './Contact';
import Details from './Details';
// import Explore from './components/Explore';

// function App() {
// 	return (
// 		<div className='bg-light-purple'>
// 			<Navbar />
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/school" element={<School />} />
// 				<Route path="/Gym" element={<Gym />} />
// 				<Route path="/Sling" element={<Sling />} />
// 				<Route path="/Account" element={<Account />} />
// 				<Route path="/Contact" element={<Contact />} />
// 				<Route path="/Details" element={<Details />} />
// 			</Routes>
// 		</div> 
// 	);
// }
class App extends Component {
	state = { 
	  cart:[]
	 } 
  
	 handleAddCart=(newProduct)=>{
	  const productExist = this.state.cart.find((item)=>item._id==newProduct._id)
	  if(productExist){
		alert('Already in Cart')
	  }
	  else if(newProduct.stock<=0){
		alert('currently not in stock')
		return
	  }
	  else{
		newProduct.inCart = newProduct.inCart+1
		let products = this.state.cart
		products.push(newProduct)
		this.setState({cart:products})
	  }
	 }
  
	 handleIncrement=(product)=>{
	  if(product.inCart>=product.stock){
		alert('currently not in stock')
	  }
	  else{
		let found = this.state.cart.find(item => item._id==product._id)
		found.inCart = found.inCart+1
		this.setState({cart:this.state.cart})
	  }
	 }
  
	 handleDecrement=(product)=>{
		let found = this.state.cart.find(item => item._id==product._id)
		found.inCart = found.inCart-1
		this.setState({cart:this.state.cart})
	 }
  
	 handleDelete=(product)=>{
	  const newCart = this.state.cart.filter((item)=>item._id!=product._id)
	  this.setState({cart:newCart})
	 }
  
	render() { 
	  return (
		<div className='bg-light-purple'>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/school" element={<School />} />
				<Route path="/Gym" element={<Gym />} />
				<Route path="/Sling" element={<Sling />} />
				<Route path="/Account" element={<Account />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Details" element={<Details />} />
				
			</Routes>
<Routes cart={this.state.cart} handleAddCart={this.handleAddCart} handleDelete={this.handleDelete} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}></Routes>
		</div>
	  );
	}
}
export default App;

