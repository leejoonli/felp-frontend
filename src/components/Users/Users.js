import React from 'react';
// import Posts from '../Posts/Posts';

// Dependencies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Users(props) {
    // state variable to hold all the specified user's posts
    const [ posts, setPosts ] = useState([]);

    // useParams to hold the id of the user
    const { user } = useParams();

    // useEffect to fetch all the posts of the user in a location
    useEffect(() => {
        // getPosts();
    }, [user]);

    // async await for axios fetch request
    const getPosts = async () => {
        try {
            // change fetch request path to localhost:3001/posts/user
            const res = await axios.get(`http://localhost:3001/:user`);
            setPosts(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            hello from users
            {posts ? (
            <>
                <div>
                    {posts.map((post) => {
                        return (
                            <>
                                <h2>{post.title}</h2>
                                <h3>{post.date}</h3>
                                <p>{post.message}</p>
                            </>
                        );
                    })}
                </div>
            </>
            ) : (
            <>
                <h2>Loading...</h2>
            </>
            )}
            {/* <Posts /> */}
        </div>
    );
}

export default Users;