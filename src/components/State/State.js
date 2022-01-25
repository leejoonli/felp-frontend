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
            const res = axios.get(`http://localhost:3001/${state}`);
            setUsers(res);
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
                    {users.map((user) => {
                        // add more user info like city, years of residence, etc
                        return <li><Link path={`/${state}/${user}`}>{user}</Link></li>
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