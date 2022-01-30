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
import { useState, useEffect } from 'react';

function App() {
	const { pathname } = useLocation();

	const [loggedIn, setLoggedIn] = useState(false);

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if(window.localStorage.getItem('token')) {
			setLoggedIn(true);
		}
		else {
			setLoggedIn(false);
		}
	}, []);

	const loggedInFalse = () => {
		setLoggedIn(false);
	}

	const loggedInTrue = () => {
		setLoggedIn(true);
	}

	const openTrue = () => {
		setOpen(true);
	}
	
	const closeMenu = (e) => {
		if(!e.target.id) {
			setOpen(false);
		}
	}

	return (
		<main onClick={(event)=>{closeMenu(event)}}>
			<div>
			{pathname !== '/' && (
				<Navigation openTrue={openTrue} open={open}>
					<NavigationBar loggedInFalse={loggedInFalse} loggedIn={loggedIn}></NavigationBar>
				</Navigation>
			)}
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/home' element={<Home loggedIn={loggedIn} loggedInFalse={loggedInFalse} loggedInTrue={loggedInTrue} />} />
					<Route path='/about' element={<About />} />
					<Route path='/:state' element={<State />} />
					<Route path='/:state/:id' element={<Users />} />
					<Route path='/create' element={<Create />} />
				</Routes>
			</div>
      {pathname !== '/' && <Footer className={styles.footer}/>}
		</main>
	);
}

export default App;
