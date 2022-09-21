import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Gym from './Gym';
import School from './school';
import Account from './Account';
import Sling from './Sling';
import Contact from './Contact';
// import Explore from './components/Explore';

function App() {
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
			</Routes>
		</div> 
	);
}

export default App;