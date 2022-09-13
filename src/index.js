// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './CSS/index.css'
// import Nav from './Components/Nav';
// import Slider from './Components/Slider';
// import Row from './Components/Row';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Nav/>
    // <Slider/>
    // <div className='Title'>Explore Items</div>
    // <Row/>
    // <Row/>
    // <Row/>
//   </React.StrictMode>
// );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './CSS/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);