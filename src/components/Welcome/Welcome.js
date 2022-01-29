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
				<div>
					<img
						src="https://i.imgur.com/ogi8uwx.png"
						alt="felp-logo"
						className={styles.welcome_logo}
					/>
				</div>
				<div className={styles.welcome_text}>
					<h1 className={styles.welcome_title}>F E L P</h1>
					<Link to="/home" className={styles.welcome_enter}>
						<h3 className={styles.welcome_h3}>Click Here to Enter!</h3>
					</Link>
				</div>

				<div>
					<img
						src="https://i.imgur.com/ogi8uwx.png"
						alt="felp-logo"
						className={styles.welcome_logo}
					/>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
