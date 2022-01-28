// Dependencies
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Styling
import styles from './Navigation.module.css';

function Navigation(props) {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles.nav}>
			<h1 className={styles.nav_logo}>
				{/* logo will go here  */}
				<Link to='/Home'>Felp</Link>
			</h1>
			{/* <nav className={styles}>
				<ul className={styles.nav_experience}>
					<li className={styles}>Food</li>
					<li>Experience</li>
				</ul>
			</nav> */}
			<div className={styles.nav_img}>
				<img
					className={styles.nav_imgb}
					src='https://img.icons8.com/windows/32/000000/menu--v3.png'
					alt='dropdown'
					onClick={() => setOpen(!open)}
				/>
				{open && props.children}
			</div>
			<div id='root'></div>
		</div>
	);
}

export default Navigation;
