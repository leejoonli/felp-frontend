import React from 'react';
import styles from './State.module.css';
import { stateUrl } from '../../util/var';

// Dependencies
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function State(props) {
	// state variable to hold list of users
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	// useParams to hold state parameter for fetch request
	const { state } = useParams();

	// fetch request for list of users in location
	useEffect(() => {
		setTimeout(() => {
			if (!users.length) {
				setLoading(false);
			}
		}, 5000);
		getUsers(state);
	}, [state]);

	// async await function for fetch request for users in location
	const getUsers = async () => {
		try {
			// change fetch request path to localhost:3001/posts/state
			const res = await axios.get(
				`${stateUrl}${state}`
			);
			setUsers(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			{users.length ? (
				<>
					<ul className={styles.users}>
						{users.map((user, index) => {
							// add more user info like city, years of residence, etc
							return (
								<Link
									to={`/${state}/${user.owner.id}`}
									key={`${user.owner.username}-${index}`}>
									<li className={styles.user}>
										<div className={styles.userData}>
											<h3 className={styles.headerSpacer}>
												{user.owner.username}
											</h3>
											<h3>{user.years_of_residence} Years of Residence</h3>
										</div>
									</li>
								</Link>
							);
						})}
					</ul>
				</>
			) : !users.length && loading ? (
				<h2 className={styles.loading}>Loading...</h2>
			) : !users.length && !loading ? (
				<>
					<h2 className={styles.loading}>No users in this area...</h2>
					<Link to="/create">
						<h2 className={styles.linkToCreate}>
							Be the first to post in {state}!
						</h2>
					</Link>
				</>
			) : null}
		</div>
	);
}

export default State;
