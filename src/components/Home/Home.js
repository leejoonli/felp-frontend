import React, { useState } from 'react';
import styles from './Home.module.css';

// Dependencies
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home(props) {
	// Set log in state to be false
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ signUpModal, setSignUpModal ] = useState(false);
	const [ loginModal, setLoginModal ] = useState(false);

	// state variable to keep track of sign up form
	const [ signUpForm, setSignUpForm] = useState({
		username: '',
		email: '',
		password: '',
		// confirm_password: '',
	});

	// state variable to keep track of log in form
	const [ LoginForm, setLoginForm ] = useState({
		email: '',
		password: '',
	});

	// function to set signUpForm state
	const handleSignUpChange = (e) => {
		setSignUpForm({...signUpForm, [e.target.id]: e.target.value});
	}

	// function to set loginForm state
	const handleLoginChange = (e) => {
		setLoginForm({...LoginForm, [e.target.id]: e.target.value});
	}

	// function for singUpForm submit
	const handleSignUpFormSubmit = async(e) => {
		try {
			e.preventDefault();
			const res = await axios.post(`https://felp-coders.herokuapp.com/api/signup`, signUpForm);
			const loginRes = await axios.post(`https://felp-coders.herokuapp.com/api/signin`, signUpForm);
			const data = loginRes.data;
			if(data) {
				// possibly have to change the dot notation for local storage
				window.localStorage.setItem('token', data.token);
				window.localStorage.setItem('username', data.username);
				setLoggedIn(true);
				setSignUpModal(false);
				setLoginModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	// function for loginForm submit
	const handleLoginFormSubmit = async(e) => {
		try {
			e.preventDefault();
			const res = await axios.post(`https://felp-coders.herokuapp.com/api/signin`, LoginForm);
			const data = res.data;
			if(data) {
				// set token to local storage
				window.localStorage.setItem('token', data.token);
				window.localStorage.setItem('username', data.username);
				setLoggedIn(true);
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
		setLoggedIn(false);
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
	const handleSingUpModal = () => {
		setSignUpModal(true);
	}

	// function to close sign up modal
	const handleSignUpModalClose = () => {
		setSignUpModal(false);
	}

	return (
		<div>
			{/* <form>
				<button>Sign Up</button>
				<button>Sign In</button>
				<button>Continue as Guest</button>
			</form> */}
			{/* sign up form */}
			<form onSubmit={handleSignUpFormSubmit}>
				<label htmlFor='username'>Username:</label>
				<input type='text' id='username' value={signUpForm.username} onChange={handleSignUpChange}/>
				<label htmlFor='email'>E-mail:</label>
				<input type='text' id='email' value={signUpForm.email} onChange={handleSignUpChange}/>
				<label htmlFor="password">Password:</label>
				<input type='text' id='password' value={signUpForm.password} onChange={handleSignUpChange}/>
				<label htmlFor='confirm_password'>Confirm Password:</label>
				<input type='text' id='confirm_password' value={signUpForm.confirm_password} onChange={handleSignUpChange}/>
				<button type='submit'>Sign Up</button>
				<button onClick={()=>{handleSignUpModalClose()}}>Cancel</button>
			</form>
			{/* log in form */}
			<form onSubmit={handleLoginFormSubmit}>
				<label htmlFor="email">E-mail:</label>
				<input type="text" id="email" value={LoginForm.email} onChange={handleLoginChange}/>
				<label htmlFor="password">Password:</label>
				<input type="text" id="password" value={LoginForm.password} onChange={handleLoginChange}/>
				<button type='submit'>Log In</button>
				<button onClick={()=>{handleLoginModalClose()}}>Cancel</button>
			</form>
			{loggedIn ? (
				<div>
					<h2>You Are Currently Logged In!</h2>
					<button onClick={()=>{handleLogOut()}}>Log Out</button>
				</div>
				) : (
				<div>
					<h2>You Are Not Currently Logged In!</h2>
					<button onClick={()=>{handleLoginModal()}}>Log In</button>
					<button onClick={()=>{handleSingUpModal()}}>Sign Up</button>
				</div>
				)}
		<div className={styles.home_container}>

			<div className={styles.home}>
			<Link to='/AL'><img className={styles.img}src="https://i.imgur.com/sv2QmHe.jpg"
			alt=""
			/><span>Alabama</span></Link></div>
	
			<div className={styles.home}><Link to='/AK'><img className={styles.img}src="https://i.imgur.com/V5YLine.jpg"
			alt=""/><span>Alaska</span></Link></div>

			<div className={styles.home}><Link to='/AZ'><img className={styles.img}src="https://i.imgur.com/iEReH0Q.jpg"
			alt=""/><span>Arizona</span></Link></div>

			<div className={styles.home}><Link to='/AR'><img className={styles.img}src="https://i.imgur.com/UZ8Kn7N.jpg"
			alt=""/><span>Arkansas</span></Link></div>

			<div className={styles.home}><Link to='/CA'>
			<img className={styles.img}src="https://i.imgur.com/eStls44.jpg"
			alt=""/><span>California</span></Link></div>

			<div className={styles.home}><Link to='/CO'>
			<img className={styles.img}src="https://i.imgur.com/jn8tmfK.jpg"
			alt=""/><span>Colorado</span></Link></div>

			<div className={styles.home}><Link to='/CT'>
			<img className={styles.img}src="https://i.imgur.com/1w81Stb.jpg"
			alt=""/><span>Connecticut</span></Link></div>

			<div className={styles.home}><Link to='/DE'><img className={styles.img}src="https://i.imgur.com/4FSLo41.jpg"
			alt=""/><span>Delaware</span></Link></div>

			<div className={styles.home}><Link to='/FL'><img className={styles.img}src="https://i.imgur.com/3LvOBvC.jpg"
			alt=""/><span>Florida</span></Link></div>
			
			<div className={styles.home}><Link to='/GA'>
			<img className={styles.img}src="https://i.imgur.com/jmqg99P.jpg"
			alt=""/><span>Georgia</span></Link></div>

			<div className={styles.home}><Link to='/HI'>
			<img className={styles.img}src="https://i.imgur.com/QvprXlx.jpg"
			alt=""/><span>Hawaii</span></Link></div>

			<div className={styles.home}><Link to='/ID'>
			<img className={styles.img}src="https://i.imgur.com/ugeywLH.jpg"
			alt=""/><span>Idaho</span></Link></div>

			<div className={styles.home}><Link to='/IL'><img className={styles.img}src="https://i.imgur.com/4xdnarf.jpg"
			alt=""/><span>Illinois</span></Link></div>
			
			<div className={styles.home}><Link to='/IN'>
			<img className={styles.img}src="https://i.imgur.com/ugeywLH.jpg"
			alt=""/><span>Indiana</span></Link></div>

			<div className={styles.home}><Link to='/IA'>
			<img className={styles.img}src="https://i.imgur.com/Trd8uBg.jpg"
			alt=""/><span>Iowa</span></Link></div>

			<div className={styles.home}><Link to='/KS'>
			<img className={styles.img}src="https://i.imgur.com/FFLYQPK.jpg"
			alt=""/><span>Kansas</span></Link></div>

			<div className={styles.home}><Link to='/KY'><img className={styles.img}src="https://i.imgur.com/a3MwNlN.jpg"
			alt=""/><span>Kentucky</span></Link></div>

			<div className={styles.home}><Link to='/LA'><img className={styles.img}src="https://i.imgur.com/uvMafEi.jpg"
			alt=""/><span>Louisiana</span></Link></div>

			<div className={styles.home}><Link to='/MN'>
			<img className={styles.img}src="https://i.imgur.com/Lw855RF.jpg"
			alt=""/><span>Maine</span></Link></div>

			<div className={styles.home}><Link to='/MD'>
			<img className={styles.img}src="https://i.imgur.com/iCidArB.jpg"
			alt=""/><span>Maryland</span></Link></div>

			<div className={styles.home}><Link to='/MA'>
			<img className={styles.img}src="https://i.imgur.com/ZGjt0WJ.jpg"
			alt=""/><span>Massachusetts</span></Link></div>

			<div className={styles.home}><Link to='/MI'>
			<img className={styles.img}src="https://i.imgur.com/TY5bVOe.jpg"
			alt=""/><span>Michigan</span></Link></div>

			<div className={styles.home}><Link to='/MN'><img className={styles.img}src="https://i.imgur.com/oXuLGGV.jpg"
			alt=""/><span>Minnesota</span></Link></div>

			<div className={styles.home}><Link to='/MS'><img className={styles.img}src="https://i.imgur.com/hKliEIp.jpg"
			alt=""/><span>Mississippi</span></Link></div>
			
			<div className={styles.home}><Link to='/MO'>
			<img className={styles.img}src="https://i.imgur.com/tFpThgE.jpg"
			alt=""/><span>Missouri</span></Link></div>

			<div className={styles.home}><Link to='/MO'>
			<img className={styles.img}src="https://i.imgur.com/UVM73GF.jpg"
			alt=""/><span>Montana</span></Link></div>

			<div className={styles.home}><Link to='/NE'>
			<img className={styles.img}src="https://i.imgur.com/CRs6DlH.jpg"
			alt=""/><span>Nebraska</span></Link></div>

			<div className={styles.home}><Link to='/NV'><img className={styles.img}src="https://i.imgur.com/7SdJSOd.jpg"
			alt=""/><span>Nevada</span></Link></div>
			
			<div className={styles.home}><Link to='/NH'>
			<img className={styles.img}src="https://i.imgur.com/maYXy17.jpg"
			alt=""/><span>New Hampshire</span></Link></div>

			<div className={styles.home}><Link to='/NJ'>
			<img className={styles.img}src="https://i.imgur.com/qRtWSsb.jpg"
			alt=""/><span>New Jersey</span></Link></div>

			<div className={styles.home}><Link to='/NM'>
			<img className={styles.img}src="https://i.imgur.com/u1d1enm.jpg"
			alt=""/><span>New Mexico</span></Link></div>

			<div className={styles.home}><Link to='/NY'>
			<img className={styles.img}src="https://i.imgur.com/y3CmiuX.jpg"
			alt=""/><span>New York</span></Link></div>

			<div className={styles.home}><Link to='/NC'><img className={styles.img}src="https://i.imgur.com/3LvOBvC.jpg"
			alt=""/><span>North Carolina</span></Link></div>

			<div className={styles.home}><Link to='/ND'>
			<img className={styles.img}src="https://i.imgur.com/zctD0sa.jpg"
			alt=""/><span>North Dakota</span></Link></div>

			<div className={styles.home}><Link to='/OH'>
			<img className={styles.img}src="https://i.imgur.com/keKbVgJ.jpg"
			alt=""/><span>Ohio</span></Link></div>

			<div className={styles.home}><Link to='/OK'>
			<img className={styles.img}src="https://i.imgur.com/KzTyiaU.jpg"
			alt=""/><span>Oklahoma</span></Link></div>

			<div className={styles.home}><Link to='/OR'>
			<img className={styles.img}src="https://i.imgur.com/DRdJ24i.jpg"
			alt=""/><span>Oregon</span></Link></div>

			<div className={styles.home}><Link to='/PA'><img className={styles.img}src="https://i.imgur.com/bYpdyVD.jpg"
			alt=""/><span>Pennsylvania</span></Link></div>
			
			<div className={styles.home}><Link to='/RI'>
			<img className={styles.img}src="https://i.imgur.com/2pPzyqJ.jpg"
			alt=""/><span>Rhode Island</span></Link></div>

			<div className={styles.home}><Link to='/SC'>
			<img className={styles.img}src="https://i.imgur.com/Uqdi2Y9.jpg"
			alt=""/><span>South Carolina</span></Link></div>

			<div className={styles.home}><Link to='/SD'>
			<img className={styles.img}src="https://i.imgur.com/E4Wy58r.jpg"
			alt=""/><span>South Dakota</span></Link></div>

			<div className={styles.home}><Link to='/TN'>
			<img className={styles.img}src="https://i.imgur.com/v3A8jyT.jpg"
			alt=""/><span>Tennessee</span></Link></div>

			<div className={styles.home}><Link to='/TX'><img className={styles.img}src="https://i.imgur.com/HsmoBNS.jpg"
			alt=""/><span>Texas</span></Link></div>
			
			<div className={styles.home}><Link to='/UT'>
			<img className={styles.img}src="https://i.imgur.com/rQrwEJI.jpg"
			alt=""/><span>Utah</span></Link></div>

			<div className={styles.home}><Link to='/VT'>
			<img className={styles.img}src="https://i.imgur.com/i1XLBfF.jpg"
			alt=""/><span>Vermont</span></Link></div>

			<div className={styles.home}><Link to='/VA'>
			<img className={styles.img}src="https://i.imgur.com/KVZBvHf.jpg"
			alt=""/><span>Virginia</span></Link></div>
				
			<div className={styles.home}><Link to='/WA'>
			<img className={styles.img}src="https://i.imgur.com/KsZGfVH.jpg"
			alt=""/><span>Washington</span></Link></div>

			<div className={styles.home}><Link to='/WV'>
			<img className={styles.img}src="https://i.imgur.com/9E5BbE9.jpg"
			alt=""/><span>West Virginia</span></Link></div>

			<div className={styles.home}><Link to='/WI'>
			<img className={styles.img}src="https://i.imgur.com/W6GNtRX.jpg"
			alt=""/><span>Wisconsin</span></Link></div>

			<div className={styles.home}><Link to='/WY'><img className={styles.img}src="https://i.imgur.com/3Z14OQo.jpg"
			alt=""/><span>Wyoming</span></Link></div>

			
		</div>
	</div>
	);
}

export default Home;