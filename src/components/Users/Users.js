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
    // const { state } = useParams();
    const { user } = useParams();

    // useEffect to fetch all the posts of the user in a location
    useEffect(() => {
        getPosts();
    }, [user]);

    // async await for axios fetch request
    const getPosts = async () => {
        try {
            // change fetch request path to localhost:3001/posts/user
            const res = await axios.get(`http://localhost:3001/api/posts/user/${user}`);
            setPosts(res.data);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {posts.length > 0 ? (
            <>
                <h2>{user}</h2>
                <h3>{posts[0].years_of_residence} years in {posts[0].state}</h3>
                <div>
                    {posts.map((post, index) => {
                        return (
                            <div key={`${post.user.name}-${index}`}>
                                <h2>{post.title}</h2>
                                <h3>{post.city}</h3>
                                <h3>{post.type}</h3>
                                <h3>{post.date}</h3>
                                <p>{post.message}</p>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
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