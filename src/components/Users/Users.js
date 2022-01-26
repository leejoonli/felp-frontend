import React from 'react';
// import Posts from '../Posts/Posts';

// Dependencies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Users(props) {
	// state variable to hold all the specified user's posts
	const [posts, setPosts] = useState([]);
	const [updateModal, setUpdateModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [updatePost, setUpdatePost] = useState();

	// useParams to hold the id of the user
	const { user } = useParams();

	// useEffect to fetch all the posts of the user in a location
	useEffect(() => {
		getPosts();
	}, [user]);

	// Create a modal to edit a post

    // useEffect to fetch all the posts of the user in a location
    useEffect(() => {
        getPosts();
    }, [user]);

	// Create a modal to delete a post

	// Create a handleClick
	const handleClick = async (id) => {
        try {
            const res = await axios.get(
				`https://felp-coders.herokuapp.com/api/posts/id/${id}`
			);
            setUpdatePost(res.data);
        } catch (error) {
            console.log(error);
        }
    };

	// Create a handleSubmit

	// async await for axios fetch request
	const getPosts = async () => {
		try {
			const res = await axios.get(
				`https://felp-coders.herokuapp.com/api/posts/user/${user}`
			);
			setPosts(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			{posts.length > 0 ? (
				<>
					<h2>{user}</h2>
					<h3>
						{posts[0].years_of_residence} years in {posts[0].state}
					</h3>
					<div>
						{posts.map((post, index) => {
							return (
								<div key={`${post.user.name}-${index}`}>
									<h2>{post.title}</h2>
									<h3>{post.city}</h3>
									<h3>{post.type}</h3>
									<h3>{post.date}</h3>
									<p>{post.message}</p>
									<button
										onClick={() => {
											handleClick(post._id);
										}}>
										Edit
									</button>
									<button>Delete</button>
								</div>
							);
						})}
					</div>
				</>
			) : updateModal ? (
				<>
					<div>
						{/* <form onSubmit={handleSubmit}>
                        <label htmlFor='title'>Title:</label>
                        <input onChange={handleChange} id='title' value={newPost.title} />
                        <label htmlFor='message'>Message:</label>
                        <input onChange={handleChange} id='message' value={newPost.message} />
                        <label htmlFor='type'>Type:</label>
                        <select onChange={handleChange} id='type'>
                        <option value=''></option>
                        <option value='food'>Food</option>
                        <option value='experience'>Experience</option>
						</select>
                        <button type='submit'>Submit</button>
                        </form> */}
					</div>
				</>
			) : (
				<>
					<h2>Loading...</h2>
				</>
			)}
		</div>
	);
}

export default Users;