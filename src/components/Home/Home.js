import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Home.module.css';

// Dependencies
import { Link } from 'react-router-dom';

function Home(props) {
	return (
		<div>
			<div>
				<Navigation />
			</div>
		<div className={styles.home_container}>
			<h2>
				<Link to='/NY'>New York</Link></h2>
				<img className={styles.img}src="https://i.imgur.com/RUefz47.jpg"
			alt=""/>
			<h2><Link to='/NJ'>New Jersey</Link></h2>
				<img className={styles.img}src="https://i.imgur.com/4DXViFu.jpg"
			alt=""/>
			<h2><Link to='/PA'>Pennsylvania</Link></h2>
			<img className={styles.img}src="https://i.imgur.com/3LvOBvC.jpg"
			alt=""/>
			<h2><Link to='/MD'>Maryland</Link></h2>
			<img className={styles.img}src="https://i.imgur.com/4DXViFu.jpg"
			alt=""/>
			<h2><Link to='/CA'>California</Link></h2>
			<img className={styles.img}src="https://i.imgur.com/zctD0sa.jpg"
			alt=""/>
			<h2><Link to='/GA'>Georgia</Link></h2>
			<img className={styles.img}src="https://i.imgur.com/aWEXybX.jpg"
			alt=""/>
		</div>
	</div>
	);
}

export default Home;
