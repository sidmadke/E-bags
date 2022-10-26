import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './CSS/index.css';
import { CartProvider } from 'react-use-cart';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<CartProvider>
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
	</CartProvider>
);

