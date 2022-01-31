import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

// Dependencies
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home(props) {
	// set state variables for modal conditional rendering
	const [signUpModal, setSignUpModal] = useState(false);
	const [loginModal, setLoginModal] = useState(false);
	const [tutorialModal, setTutorialModal] = useState();

	const handleTutorialModalClose = () => {
		setTutorialModal(false);
	}

	// useEffect to re-render components based on state change
	useEffect(() => {}, [props.loggedIn]);

	useEffect(() => {
		setTutorialModal(true);
	},[])

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
				`https://felp-coders.herokuapp.com/api/signup`,
				signUpForm
			);
			// POST request for login to auto login after signup
			const loginRes = await axios.post(
				`https://felp-coders.herokuapp.com/api/signin`,
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
				`https://felp-coders.herokuapp.com/api/signin`,
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
			{tutorialModal && (
				<div className={styles.tutorialModal}>
					<h1 className={styles.tutorialhead}>Welcome to FELP!</h1>
					<p className={styles.tutorialtext}>
						A place where you can explore locations as a local would with all
						the Food and Experiences they recommend.
					</p>
					<h2 className={styles.tutorialhead}>How to:</h2>
					<p className={styles.tutorialtext}>
						To interact and post with users, sign up with your own account. No
						worries, we won't spam you with anything. Click on a state and start
						exploring!
					</p>
					<button
						className={styles.tutorialbtn}
						onClick={handleTutorialModalClose}>
						Exit
					</button>
				</div>
			)}
			{/* sign up form */}
			{signUpModal && (
				<div className={styles.signUpModalContainer}>
					<form
						onSubmit={handleSignUpFormSubmit}
						className={styles.signUpModal}>
						<label htmlFor='username' className={styles.signUpLabel}>
							Username:
						</label>
						<input
							type='text'
							id='username'
							value={signUpForm.username}
							onChange={handleSignUpChange}
							className={styles.signUpModalUsername}
						/>
						<label htmlFor='email' className={styles.signUpLabel}>
							E-mail:
						</label>
						<input
							type='text'
							id='email'
							value={signUpForm.email}
							onChange={handleSignUpChange}
							className={styles.signUpModalEmail}
						/>
						<label htmlFor='password' className={styles.signUpLabel}>
							Password:
						</label>
						<input
							type='text'
							id='password'
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
							<button type='submit' className={styles.signUpFormButton}>
								Sign Up
							</button>
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
			)}
			{/* log in form */}
			{loginModal && (
				<div className={styles.LoginModalContainer}>
					<form
						onSubmit={handleLoginFormSubmit}
						className={styles.loginModalForm}>
						<label htmlFor='email' className={styles.loginLabel}>
							E-mail:
						</label>
						<input
							type='text'
							id='email'
							value={LoginForm.email}
							onChange={handleLoginChange}
							className={styles.loginModalEmail}
						/>
						<label htmlFor='password' className={styles.loginLabel}>
							Password:
						</label>
						<input
							type='text'
							id='password'
							value={LoginForm.password}
							onChange={handleLoginChange}
							className={styles.loginModalPassword}
						/>
						<div className={styles.loginFormButtons}>
							<button type='submit' className={styles.loginFormButton}>
								Log In
							</button>
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
			)}
			{props.loggedIn ? (
				<div className={styles.currentlyLoggedIn}>
					<div className={styles.currentlyLoggedInBorder}>
						<h2 className={styles.currentlyLoggedInHeader}>
							You Are Currently Logged In!
						</h2>
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
				<div
					className={styles.loginHeading}
					style={{
						filter: (signUpModal || loginModal || tutorialModal) && 'blur(4px)',
						pointerEvents: (signUpModal || loginModal || tutorialModal) && 'none',
					}}>
					<div className={styles.loginHeadingBackground}>
						<h2 className={styles.loginHeader}>
							You Are Not Currently Logged In!
						</h2>
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
			<div
				className={styles.home_container}
				style={{
					filter: (signUpModal || loginModal || tutorialModal) && 'blur(4px)',
					pointerEvents: (signUpModal || loginModal || tutorialModal) && 'none',
				}}>
				<div className={styles.home}>
					<Link to='/AL'>
						<img
							className={styles.img}
							src={require('./img/AL.png')}
							alt='City in Alabama'
						/>
						<span>Alabama</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/AK'>
						<img
							className={styles.img}
							src={require('./img/AK.jpg')}
							alt='City in Alaska'
						/>
						<span>Alaska</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/AZ'>
						<img
							className={styles.img}
							src={require('./img/AZ.jpg')}
							alt='City in Arizona'
						/>
						<span>Arizona</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/AR'>
						<img
							className={styles.img}
							src={require('./img/AR.jpg')}
							alt='City in Arkansas'
						/>
						<span>Arkansas</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/CA'>
						<img
							className={styles.img}
							src={require('./img/CA.jpg')}
							alt='City in California'
						/>
						<span>California</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/CO'>
						<img
							className={styles.img}
							src={require('./img/CO.jpg')}
							alt='City in Colorado'
						/>
						<span>Colorado</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/CT'>
						<img
							className={styles.img}
							src={require('./img/CT.jpg')}
							alt='City in Connecticut'
						/>
						<span>Connecticut</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/DE'>
						<img
							className={styles.img}
							src={require('./img/DE.jpg')}
							alt='City in Delaware'
						/>
						<span>Delaware</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/FL'>
						<img
							className={styles.img}
							src={require('./img/FL.jpg')}
							alt='City in Florida'
						/>
						<span>Florida</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/GA'>
						<img
							className={styles.img}
							src={require('./img/GA.jpg')}
							alt='City in Georgia'
						/>
						<span>Georgia</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/HI'>
						<img
							className={styles.img}
							src={require('./img/HI.jpg')}
							alt='City in Hawaii'
						/>
						<span>Hawaii</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/ID'>
						<img
							className={styles.img}
							src={require('./img/ID.jpg')}
							alt='City in Idaho'
						/>
						<span>Idaho</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/IL'>
						<img
							className={styles.img}
							src={require('./img/IL.jpg')}
							alt='City in Illinois'
						/>
						<span>Illinois</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/IN'>
						<img
							className={styles.img}
							src={require('./img/IN.jpg')}
							alt='City in Indiana'
						/>
						<span>Indiana</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/IA'>
						<img
							className={styles.img}
							src={require('./img/IA.jpg')}
							alt='City in Iowa'
						/>
						<span>Iowa</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/KS'>
						<img
							className={styles.img}
							src={require('./img/KS.jpg')}
							alt='City in Kansas'
						/>
						<span>Kansas</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/KY'>
						<img
							className={styles.img}
							src={require('./img/KY.jpg')}
							alt='City in Kentucky'
						/>
						<span>Kentucky</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/LA'>
						<img
							className={styles.img}
							src={require('./img/LA.jpg')}
							alt='City in Louisiana'
						/>
						<span>Louisiana</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/ME'>
						<img
							className={styles.img}
							src={require('./img/ME.jpg')}
							alt='City in Maine'
						/>
						<span>Maine</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/MD'>
						<img
							className={styles.img}
							src={require('./img/MD.jpg')}
							alt='City in Maryland'
						/>
						<span>Maryland</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/MA'>
						<img
							className={styles.img}
							src={require('./img/MA.jpg')}
							alt='City in Massachusetts'
						/>
						<span>Massachusetts</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/MI'>
						<img
							className={styles.img}
							src={require('./img/MI.jpg')}
							alt='City in Michigan'
						/>
						<span>Michigan</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/MN'>
						<img
							className={styles.img}
							src={require('./img/MN.jpg')}
							alt='City in Minnesota'
						/>
						<span>Minnesota</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/MS'>
						<img
							className={styles.img}
							src={require('./img/MS.jpg')}
							alt='City in Mississippi'
						/>
						<span>Mississippi</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/MO'>
						<img
							className={styles.img}
							src={require('./img/MO.jpg')}
							alt='City in Missouri'
						/>
						<span>Missouri</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/MT'>
						<img
							className={styles.img}
							src={require('./img/MT.jpg')}
							alt='City in Montana'
						/>
						<span>Montana</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/NE'>
						<img
							className={styles.img}
							src={require('./img/NE.jpg')}
							alt='City in Nebraska'
						/>
						<span>Nebraska</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/NV'>
						<img
							className={styles.img}
							src={require('./img/NV.jpg')}
							alt='City in Nevada'
						/>
						<span>Nevada</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/NH'>
						<img
							className={styles.img}
							src={require('./img/NH.jpg')}
							alt='City in New Hampshire'
						/>
						<span>New Hampshire</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/NJ'>
						<img
							className={styles.img}
							src={require('./img/NJ.jpg')}
							alt='City in New Jersey'
						/>
						<span>New Jersey</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/NM'>
						<img
							className={styles.img}
							src={require('./img/NM.jpg')}
							alt='City in New Mexico'
						/>
						<span>New Mexico</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/NY'>
						<img
							className={styles.img}
							src={require('./img/NY.jpg')}
							alt='City in New York'
						/>
						<span>New York</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/NC'>
						<img
							className={styles.img}
							src={require('./img/NC.jpg')}
							alt='City in North Carolina'
						/>
						<span>North Carolina</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/ND'>
						<img
							className={styles.img}
							src={require('./img/ND.jpg')}
							alt='City in North Dakota'
						/>
						<span>North Dakota</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/OH'>
						<img
							className={styles.img}
							src={require('./img/OH.jpg')}
							alt='City in Ohio'
						/>
						<span>Ohio</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/OK'>
						<img
							className={styles.img}
							src={require('./img/OK.jpg')}
							alt='City in Oklahoma'
						/>
						<span>Oklahoma</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/OR'>
						<img
							className={styles.img}
							src={require('./img/OR.jpg')}
							alt='City in Oregon'
						/>
						<span>Oregon</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/PA'>
						<img
							className={styles.img}
							src={require('./img/PA.jpg')}
							alt='City in Pennsylvania'
						/>
						<span>Pennsylvania</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/RI'>
						<img
							className={styles.img}
							src={require('./img/RI.jpg')}
							alt='City in Rhode Island'
						/>
						<span>Rhode Island</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/SC'>
						<img
							className={styles.img}
							src={require('./img/SC.jpg')}
							alt='City in South Carolina'
						/>
						<span>South Carolina</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/SD'>
						<img
							className={styles.img}
							src={require('./img/SD.jpg')}
							alt='City in South Dakota'
						/>
						<span>South Dakota</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/TN'>
						<img
							className={styles.img}
							src={require('./img/TN.jpg')}
							alt='City in Tennessee'
						/>
						<span>Tennessee</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/TX'>
						<img
							className={styles.img}
							src={require('./img/TX.jpg')}
							alt='City in Texas'
						/>
						<span>Texas</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/UT'>
						<img
							className={styles.img}
							src={require('./img/UT.jpg')}
							alt='City in Utah'
						/>
						<span>Utah</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/VT'>
						<img
							className={styles.img}
							src={require('./img/VT.jpg')}
							alt='City in Vermont'
						/>
						<span>Vermont</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/VA'>
						<img
							className={styles.img}
							src={require('./img/VA.jpg')}
							alt='City in Virginia'
						/>
						<span>Virginia</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/WA'>
						<img
							className={styles.img}
							src={require('./img/WA.jpg')}
							alt='City in Washington'
						/>
						<span>Washington</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/WV'>
						<img
							className={styles.img}
							src={require('./img/WV.jpg')}
							alt='City in West Virginia'
						/>
						<span>West Virginia</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/WI'>
						<img
							className={styles.img}
							src={require('./img/WI.jpg')}
							alt='City in Wisconsin'
						/>
						<span>Wisconsin</span>
					</Link>
				</div>

				<div className={styles.home}>
					<Link to='/WY'>
						<img
							className={styles.img}
							src={require('./img/WY.jpg')}
							alt='City in Wyoming'
						/>
						<span>Wyoming</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
