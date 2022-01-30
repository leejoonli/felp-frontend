import React from 'react';
import styles from '../Welcome/Welcome.module.css';

function Footer(props) {
	return (
		<div className={styles.footer}>
			<footer>
				<div className={styles.footerDiv}>
					<a
						href="http://www.linkedin.com/in/andrew-kal"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/pTbVufE.png"
							alt="andrew"
							className={styles.footerImg}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/frankz-condori/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/L7pvOeR.jpg"
							alt="frankz"
							className={styles.footerImg}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/jhwlee/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/FMh86FR.png"
							alt="jeremiah"
							className={styles.footerImg}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/justin-lombardi/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/sTG3UGN.jpg"
							alt="justin"
							className={styles.footerImg}
						/>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
