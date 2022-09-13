import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Gym from './Gym';
import School from './school';
import Sling from './Sling';
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
			</Routes>
		</div> 
	);
}

export default App;