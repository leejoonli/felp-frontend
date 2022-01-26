import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Welcome.module.css';

function Welcome(props) {
	return (
		<div className={styles.welcome_container}>
			<div className={styles.welcome_foodimg}>
				<img
					className={styles.welcome_img}
					src="https://i.imgur.com/xA3zulu.jpg"
					alt=""
				/>
			</div>
			<div className={styles.welcome_expimg}>
				<img
					className={styles.welcome_img}
					src="https://i.imgur.com/vyGjufO.jpg"
					alt=""
				/>
			</div>
			<div className={styles.welcome_likeimg}>
				<img
					className={styles.welcome_img}
					src="https://i.imgur.com/ColQxZo.jpg"
					alt=""
				/>
			</div>
			<div className={styles.welcome_postimg}>
				<img
					className={styles.welcome_img}
					src="https://i.imgur.com/zGEmCVG.jpg"
					alt=""
				/>
			</div>

			<div className={styles.welcome_title_container}>
				<h1 className={styles.welcome_title}>F E L P</h1>
				<h2 className={styles.welcome_h2}>A place to share your favorites!</h2>
				<Link to="/home" className={styles.welcome_enter}>
					<h3 className={styles.welcome_h3}>Enter Here!</h3>
				</Link>
			</div>
		</div>
	);
}

export default Welcome;
