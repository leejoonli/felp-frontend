import React from 'react';
import styles from './Loginheader.module.css';

function Loginheader(props) {
    return (
        <>
            {props.loggedIn ? (
				<div className={styles.currentlyLoggedIn}>
					<div className={styles.currentlyLoggedInBorder}>
						<h2 className={styles.currentlyLoggedInHeader}>You Are Currently Logged In As: {window.localStorage.getItem('username')}</h2>
						<button
							onClick={() => {
								props.handleLogOut();
							}}
							className={styles.currentlyLoggedInButton}>
							Log Out
						</button>
					</div>
				</div>
			) : (
				<div className={styles.loginHeading} style={{filter: (props.signUpModal || props.loginModal) && 'blur(4px)', pointerEvents: (props.signUpModal || props.loginModal) && 'none'}}>
					<div className={styles.loginHeadingBackground}>
						<h2 className={styles.loginHeader}>You Are Not Currently Logged In!</h2>
						<div className={styles.loginButtons}>
							<button
								onClick={() => {
									props.handleLoginModal();
								}}
								className={styles.loginButton}>
								Log In
							</button>
							<button
								onClick={() => {
									props.handleSignUpModal();
								}}
								className={styles.loginButton}>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			)}
        </>
    );
}

export default Loginheader;