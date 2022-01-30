// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Users from './components/Users/Users';
import Create from './components/Create/Create';
import State from './components/State/State';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

// Dependencies
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const { pathname } = useLocation();

	const [test, setTest] = useState(true);

	const testing = () => {
		setTest(false);
	}
	
	return (
		<main>
			{pathname !== '/' && (
				<Navigation>
					<NavigationBar testing={testing}></NavigationBar>
				</Navigation>
			)}
			<div className={styles.fixFooter}>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/home' element={<Home test={test} />} />
					<Route path='/about' element={<About />} />
					<Route path='/:state' element={<State />} />
					<Route path='/:state/:user' element={<Users />} />
					<Route path='/create' element={<Create />} />
				</Routes>
			</div>
			<Footer />
		</main>
	);
}

export default App;
