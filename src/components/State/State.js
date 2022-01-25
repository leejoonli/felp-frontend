import React from 'react';
// import Users from '../Users/Users'

// Dependencies
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function State(props) {
    // state variable to hold list of users
    const [ users, setUsers ] = useState([]);

    // useParams to hold state parameter for fetch request
    const { state } = useParams();

    // fetch request for list of users in location
    useEffect(() => {
        getUsers();
    }, [state]);

    // async await function for fetch request for users in location
    const getUsers = async () => {
        try {
            // change fetch request path to localhost:3001/posts/state
            const res = await axios.get(`http://localhost:3001/api/posts/state/${state}`);
            setUsers(res.data);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            hello from state
            {users ? (
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
            ) : (
            <>
                <h2>Loading...</h2>
            </>
            )}
            {/* <Users /> */}
        </div>
    );
}

export default State;