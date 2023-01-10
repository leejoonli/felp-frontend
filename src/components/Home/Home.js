import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import StateLayout from '../StateLayout/StateLayout';

// Dependencies
import { Link } from 'react-router-dom';
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
			<div className={styles.signUpModalContainer}>
				<form onSubmit={handleSignUpFormSubmit} className={styles.signUpModal}>
					<label htmlFor="username" className={styles.signUpLabel}>Username:</label>
					<input
						type="text"
						id="username"
						value={signUpForm.username}
						onChange={handleSignUpChange}
						className={styles.signUpModalUsername}
					/>
					<label htmlFor="email" className={styles.signUpLabel}>E-mail:</label>
					<input
						type="text"
						id="email"
						value={signUpForm.email}
						onChange={handleSignUpChange}
						className={styles.signUpModalEmail}
					/>
					<label htmlFor="password" className={styles.signUpLabel}>Password:</label>
					<input
						type="text"
						id="password"
						value={signUpForm.password}
						onChange={handleSignUpChange}
						className={styles.signUpModalPassword}
					/>
					{/* <label htmlFor="confirm_password" className={styles.signUpLabel}>Confirm Password:</label>
					<input
						type="text"
						id="confirm_password"
						value={signUpForm.confirm_password}
						onChange={handleSignUpChange}
					/> */}
					<div className={styles.signUpFormButtons}>
						<button type="submit" className={styles.signUpFormButton}>Sign Up</button>
						<button
							onClick={() => {
								handleSignUpModalClose();
							}}
							className={styles.signUpFormButton}>
							Cancel
						</button>
					</div>
				</form>
			</div>
			}
			{/* log in form */}
			{loginModal &&
				<div className={styles.LoginModalContainer}>
					<form onSubmit={handleLoginFormSubmit} className={styles.loginModalForm}>
						<label htmlFor="email" className={styles.loginLabel}>E-mail:</label>
						<input
							type="text"
							id="email"
							value={LoginForm.email}
							onChange={handleLoginChange}
							className={styles.loginModalEmail}
						/>
						<label htmlFor="password" className={styles.loginLabel}>Password:</label>
						<input
							type="text"
							id="password"
							value={LoginForm.password}
							onChange={handleLoginChange}
							className={styles.loginModalPassword}
						/>
						<div className={styles.loginFormButtons}>
							<button type="submit" className={styles.loginFormButton}>Log In</button>
							<button
								onClick={() => {
									handleLoginModalClose();
								}}
								className={styles.loginFormButton}>
								Cancel
							</button>
						</div>
					</form>
				</div>
			}
			{props.loggedIn ? (
				<div className={styles.currentlyLoggedIn}>
					<div className={styles.currentlyLoggedInBorder}>
						<h2 className={styles.currentlyLoggedInHeader}>You Are Currently Logged In As: {window.localStorage.getItem('username')}</h2>
						<button
							onClick={() => {
								handleLogOut();
							}}
							className={styles.currentlyLoggedInButton}>
							Log Out
						</button>
					</div>
				</div>
			) : (
				<div className={styles.loginHeading} style={{filter: (signUpModal || loginModal) && 'blur(4px)', pointerEvents: (signUpModal || loginModal) && 'none'}}>
					<div className={styles.loginHeadingBackground}>
						<h2 className={styles.loginHeader}>You Are Not Currently Logged In!</h2>
						<div className={styles.loginButtons}>
							<button
								onClick={() => {
									handleLoginModal();
								}}
								className={styles.loginButton}>
								Log In
							</button>
							<button
								onClick={() => {
									handleSignUpModal();
								}}
								className={styles.loginButton}>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			)}
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
