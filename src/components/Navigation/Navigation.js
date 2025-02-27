// Dependencies
import { Link } from "react-router-dom";

// Styling
import styles from "./Navigation.module.css";

function Navigation(props) {
	return (
		<div className={styles.nav}>
			<h1 className={styles.nav_logo}>
				<Link to="/Home">
					<img
						className={styles.nav_logob}
						src='/logo512.png'
						alt='felp-logo'
					/>
				</Link>
			</h1>
			{/* <nav className={styles}>
				<ul className={styles.nav_experience}>
					<li className={styles}>Food</li>
					<li>Experience</li>
				</ul>
			</nav> */}
			<div className={styles.nav_img}>
				<div>
					<img
						className={styles.nav_imgb}
						src="https://img.icons8.com/windows/32/000000/menu--v3.png"
						alt="dropdown"
						onClick={() => props.openTrue()}
						id="closeHamburgerMenu"
					/>
				</div>
				{props.open && props.children}
			</div>
			<div id="root"></div>
		</div>
	);
}

export default Navigation;
