import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

function NavigationBar(props) {
	// function to handle logout in the hamburger menu
	const handleNavLogout = () => {
		window.localStorage.clear();
		props.testing();
	}

    return (
		<nav className={styles.nav_dropdown}>
			{props.loggedIn && (
			<>
				<h2 className={styles.loggedInAs}>Logged in as: {window.localStorage.getItem('username')}</h2>
			</>
			)}
			<Link to='/create'>
				<h2 className={styles.menu_item}>
					New Post
				</h2>
			</Link>
			<Link to='/about'>
				<h2 className={styles.menu_item}>
					About
				</h2>
			</Link>
			{props.loggedIn && (
			<>
				<h2 className={styles.navLogout} onClick={()=>{handleNavLogout()}}>Logout</h2>
			</>
			)}
		</nav>
    );
}

export default NavigationBar;