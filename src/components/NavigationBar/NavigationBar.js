import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

function NavigationBar(props) {
    return (
			<nav className={styles.nav_dropdown}>
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
			</nav>
    );
}

export default NavigationBar;