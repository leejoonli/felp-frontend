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
	const [toDeletePostId, setToDeletePostId] = useState(null);
	const [updatePost, setUpdatePost] = useState();

	// useParams to hold the id of the user
	const { user } = useParams();

	// useEffect to fetch all the posts of the user in a location
	useEffect(() => {
		getPosts();
	}, [posts]);

	// Create a modal to edit a post

	// Function to send DELETE request to the api using the id
	const handleDelete = async () => {
		try {
			// DELETE request to api
			await axios.delete(`https://felp-coders.herokuapp.com/api/posts/id/${toDeletePostId}`);
			setDeleteModal(false);
		} catch (error) {
			console.log(error);
		}
	}

	// Create a handleClick to open the update modal
	const openUpdateModal = async (id) => {
        try {
            const res = await axios.get(
				`https://felp-coders.herokuapp.com/api/posts/id/${id}`
			);
            setUpdatePost(res.data);
			setUpdateModal(true);
        } catch (error) {
            console.log(error);
        }
    };
	
	// Create a handleSubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		// PATCH request
		setUpdateModal(false);
	}
	
	// Create a handleClick to open the delete modal
	const openDeleteModal = (id) => {
		setDeleteModal(true);
		setToDeletePostId(id);
	};

	// Set updateModal to false to close the modal
	const closeUpdateModal = () => {
		setUpdateModal(false);
	}

	// Set deleteModal to false to close the modal
	const closeDeleteModal = () => {
		setDeleteModal(false);
	}

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
											openUpdateModal(post._id);
										}}>
										Edit
									</button>
									<button onClick={() => {openDeleteModal(post._id)}}>Delete</button>
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
			{updateModal && (
				<div>
					<form onSubmit={handleSubmit}>
						<label htmlFor='title'>Title:</label>
						<input id='title' />
						<label htmlFor='message'>Message:</label>
						<input id='message' />
						<label htmlFor='type'>Type:</label>
						<select id='type'>
						<option value=''></option>
						<option value='food'>Food</option>
						<option value='experience'>Experience</option>
						</select>
						<button type='submit'>Submit</button>
					</form>
						<button onClick={() => {closeUpdateModal()}}>Cancel</button>
				</div>
			)}
			{deleteModal && (
				<div>
					<h3>Are you sure yo want to delete?</h3>
					<button onClick={() => {handleDelete()}}>Yes</button>
					<button onClick={() => {closeDeleteModal()}}>No</button>
				</div>
			)}
		</div>
	);
}

export default Users;