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
			<footer>
				<div className={styles.footer_div}>
					<a
						href="http://www.linkedin.com/in/andrew-kal"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/pTbVufE.png"
							alt="andrew"
							className={styles.footer_img}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/frankz-condori/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/L7pvOeR.jpg"
							alt="frankz"
							className={styles.footer_img}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/jhwlee/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/FMh86FR.png"
							alt="jeremiah"
							className={styles.footer_img}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/justin-lombardi/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/sTG3UGN.jpg"
							alt="justin"
							className={styles.footer_img}
						/>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Welcome;
