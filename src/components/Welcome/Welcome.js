import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Welcome.module.css';

function Welcome(props) {
	return (
		<div className={styles.welcomeContainer}>
			<div className={styles.welcomeFoodImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/xA3zulu.jpg"
					alt=""
				/>
			</div>
			<div className={styles.welcomeExpImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/vyGjufO.jpg"
					alt=""
				/>
			</div>
			<div className={styles.welcomeLikeImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/ColQxZo.jpg"
					alt=""
				/>
			</div>
			<div className={styles.welcomePostImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/zGEmCVG.jpg"
					alt=""
				/>
			</div>

			<div className={styles.welcomeTitleContainer}>
				<div>
					<img
						src="https://i.imgur.com/ogi8uwx.png"
						alt="felp-logo"
						className={styles.welcomeLogo}
					/>
				</div>
				<div className={styles.welcomeText}>
					<h1 className={styles.welcomeTitle}>F E L P</h1>
					<Link to="/home" className={styles.welcomeEnter}>
						<h3 className={styles.welcomeH3}>Click Here to Enter!</h3>
					</Link>
				</div>

				<div>
					<img
						src="https://i.imgur.com/ogi8uwx.png"
						alt="felp-logo"
						className={styles.welcomeLogo}
					/>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
