import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import StateLayout from '../StateLayout/StateLayout';
import SignUp from '../Modals/SignUp';
import Login from '../Modals/Login';
import Loginheader from '../LoginHeader/Loginheader';

// Dependencies
import axios from 'axios';

function Home(props) {
	// set state variables for modal conditional rendering
	const [signUpModal, setSignUpModal] = useState(false);
	const [loginModal, setLoginModal] = useState(false);

	// useEffect to re-render components based on state change
	useEffect(() => {}, [props.loggedIn]);

	// state variable to keep track of sign up form
	const [signUpForm, setSignUpForm] = useState({
		username: '',
		email: '',
		password: '',
		// setting confirm password for later implementation
		// confirm_password: '',
	});

	// state variable to keep track of log in form
	const [LoginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	// function to set signUpForm state
	const handleSignUpChange = (e) => {
		setSignUpForm({ ...signUpForm, [e.target.id]: e.target.value });
	}

	// function to set loginForm state
	const handleLoginChange = (e) => {
		setLoginForm({ ...LoginForm, [e.target.id]: e.target.value });
	}

	// function for signUpForm submit
	const handleSignUpFormSubmit = async (e) => {
		try {
			e.preventDefault();
			// POST request for signup
			const res = await axios.post(
				`http://localhost:3001/api/signup`,
				signUpForm
			);
			// POST request for login to auto login after signup
			const loginRes = await axios.post(
				`http://localhost:3001/api/signin`,
				signUpForm
			);
			// get data from login POST request response
			const data = loginRes.data;
			if (data) {
				// store values to local storage
				window.localStorage.setItem('token', data.token);
				window.localStorage.setItem('username', data.username);
				window.localStorage.setItem('userId', data.userId);
				// set state to true for conditional rendering
				props.loggedInTrue();
				// close modal
				setSignUpModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	// function for loginForm submit
	const handleLoginFormSubmit = async (e) => {
		try {
			e.preventDefault();
			// POST request for login
			const res = await axios.post(
				`http://localhost:3001/api/signin`,
				LoginForm
			);
			const data = res.data;
			if (data) {
				// store values to local storage
				window.localStorage.setItem('token', data.token);
				window.localStorage.setItem('username', data.username);
				window.localStorage.setItem('userId', data.userId);
				// set state for conditional rendering
				props.loggedInTrue();
				// close login modal
				setLoginModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	// function to handle logout
	const handleLogOut = () => {
		// clear token in local storage to logout
		window.localStorage.clear();
		// set state to false for conditional rendering
		props.loggedInFalse();
	}

	// function to show login modal
	const handleLoginModal = () => {
		setLoginModal(true);
	}

	// function to close login modal
	const handleLoginModalClose = () => {
		setLoginModal(false);
	}

	// function to show sign up modal
	const handleSignUpModal = () => {
		setSignUpModal(true);
	}

	// function to close sign up modal
	const handleSignUpModalClose = () => {
		setSignUpModal(false);
	}

	return (
		<div>
			{/* sign up form */}
			{signUpModal &&
				<SignUp handleSignUpFormSubmit={handleSignUpFormSubmit} signUpForm={signUpForm} handleSignUpChange={handleSignUpChange} handleSignUpModalClose={handleSignUpModalClose} />
			}
			{/* log in form */}
			{loginModal &&
				<Login handleLoginFormSubmit={handleLoginFormSubmit} LoginForm={LoginForm} handleLoginChange={handleLoginChange} handleLoginModalClose={handleLoginModalClose} />
			}
			<Loginheader handleLogOut={handleLogOut} handleLoginModal={handleLoginModal} handleSignUpModal={handleSignUpModal} signUpModal={signUpModal} loginModal={loginModal} loggedIn={props.loggedIn}/>
			<div className={styles.home_container} style={{filter: (signUpModal || loginModal) && 'blur(4px)', pointerEvents: (signUpModal || loginModal) && 'none'}}>
				<StateLayout img={styles.img} state={'AL'} alt={'Alabama'} />
				<StateLayout img={styles.img} state={'AK'} alt={'Alaska'} />
				<StateLayout img={styles.img} state={'AZ'} alt={'Arizona'} />
				<StateLayout img={styles.img} state={'AR'} alt={'Arkansas'} />
				<StateLayout img={styles.img} state={'CA'} alt={'California'} />
				<StateLayout img={styles.img} state={'CO'} alt={'Colorado'} />
				<StateLayout img={styles.img} state={'CT'} alt={'Connecticut'} />
				<StateLayout img={styles.img} state={'DE'} alt={'Delaware'} />
				<StateLayout img={styles.img} state={'GA'} alt={'Georgia'} />
				<StateLayout img={styles.img} state={'HI'} alt={'Hawaii'} />
				<StateLayout img={styles.img} state={'ID'} alt={'Idaho'} />
				<StateLayout img={styles.img} state={'IL'} alt={'Illinois'} />
				<StateLayout img={styles.img} state={'IN'} alt={'Indiana'} />
				<StateLayout img={styles.img} state={'IA'} alt={'Iowa'} />
				<StateLayout img={styles.img} state={'KS'} alt={'Kansas'} />
				<StateLayout img={styles.img} state={'KY'} alt={'Kentucky'} />
				<StateLayout img={styles.img} state={'LA'} alt={'Louisiana'} />
				<StateLayout img={styles.img} state={'ME'} alt={'Maine'} />
				<StateLayout img={styles.img} state={'MD'} alt={'Maryland'} />
				<StateLayout img={styles.img} state={'MA'} alt={'Massachusetts'} />
				<StateLayout img={styles.img} state={'MI'} alt={'Michigan'} />
				<StateLayout img={styles.img} state={'MN'} alt={'Minnesota'} />
				<StateLayout img={styles.img} state={'MS'} alt={'Mississippi'} />
				<StateLayout img={styles.img} state={'MO'} alt={'Missouri'} />
				<StateLayout img={styles.img} state={'MT'} alt={'Montana'} />
				<StateLayout img={styles.img} state={'NE'} alt={'Nebraska'} />
				<StateLayout img={styles.img} state={'NV'} alt={'Nevada'} />
				<StateLayout img={styles.img} state={'NH'} alt={'New Hampshire'} />
				<StateLayout img={styles.img} state={'NJ'} alt={'New Jersey'} />
				<StateLayout img={styles.img} state={'NM'} alt={'New Mexico'} />
				<StateLayout img={styles.img} state={'NY'} alt={'New York'} />
				<StateLayout img={styles.img} state={'NC'} alt={'North Carolina'} />
				<StateLayout img={styles.img} state={'ND'} alt={'North Dakota'} />
				<StateLayout img={styles.img} state={'OH'} alt={'Ohio'} />
				<StateLayout img={styles.img} state={'OK'} alt={'Oklahoma'} />
				<StateLayout img={styles.img} state={'OR'} alt={'Oregon'} />
				<StateLayout img={styles.img} state={'PA'} alt={'Pennsylvania'} />
				<StateLayout img={styles.img} state={'RI'} alt={'Rhode Island'} />
				<StateLayout img={styles.img} state={'SC'} alt={'South Carolina'} />
				<StateLayout img={styles.img} state={'SD'} alt={'South Dakota'} />
				<StateLayout img={styles.img} state={'TN'} alt={'Tennessee'} />
				<StateLayout img={styles.img} state={'TX'} alt={'Texas'} />
				<StateLayout img={styles.img} state={'UT'} alt={'Utah'} />
				<StateLayout img={styles.img} state={'VT'} alt={'Vermont'} />
				<StateLayout img={styles.img} state={'VA'} alt={'Virginia'} />
				<StateLayout img={styles.img} state={'WA'} alt={'Washinton'} />
				<StateLayout img={styles.img} state={'WV'} alt={'West Virginia'} />
				<StateLayout img={styles.img} state={'WI'} alt={'Wisconsin'} />
				<StateLayout img={styles.img} state={'WY'} alt={'Wyoming'} />
			</div>
		</div>
	);
}

export default Home;
