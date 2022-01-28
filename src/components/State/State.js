import React from 'react';
import styles from './State.module.css';

// Dependencies
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function State(props) {
    // state variable to hold list of users
    const [ users, setUsers ] = useState([]);
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
        getUsers();
    }, [state]);

    // async await function for fetch request for users in location
    const getUsers = async () => {
        try {
            // change fetch request path to localhost:3001/posts/state
            const res = await axios.get(`https://felp-coders.herokuapp.com/api/posts/state/${state}`);
            setUsers(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {users.length ? (
            <>
                <ul>
                    {users.map((user, index) => {
                        // add more user info like city, years of residence, etc
                        return (
                            <Link to={`/${state}/${user.user.name}`} key={`${user.user.name}-${index}`}>
                                <li>
                                    {/* Add name and YoR label */}
                                    <h3>{user.user.name}</h3>
                                    <h3>{user.years_of_residence}</h3>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </>
            ) : (!users.length && loading) ? (
                <h2 className={styles.loading}>Loading...</h2>
            ) : (!users.length && !loading) ? (
                <>
                    <h2 className={styles.loading}>No users in this area...</h2>
                    <Link to='/create'><h2 className={styles.linkToCreate}>Be the first to post in this area!</h2></Link>
                </>
            ) : null}
            {/* <Users /> */}
        </div>
    );
}

export default State;