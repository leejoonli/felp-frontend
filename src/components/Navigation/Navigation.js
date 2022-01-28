import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation(props) {
	return (
		<div className={styles.siteHeader}>
			<h1>
				<Link to="/Home">Felp</Link>
			</h1>
			<nav className={styles.subHeader}>
				<ul>
					<li>Food</li>
					{/* <li>Experience</li> */}
				</ul>
			</nav>
			<h2 className={styles.subHeader}>
				<Link to="/create">New Post</Link>
			</h2>
			<h2 className={styles.subHeader}>
				<Link to="/about">About</Link>
			</h2>
		</div>
	);
}

export default Navigation;
