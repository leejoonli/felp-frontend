import React from 'react';
import styles from './Users.module.css';
import Update from '../Modals/Update';

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
	const [loading, setLoading] = useState(true);
	const [disabled, setDisabled] = useState(false);

	// useParams to hold the id of the user
	const { id } = useParams();
	const { state } = useParams();

	// useEffect to fetch all the posts of the user in a location
	useEffect(() => {
		// set timeout for when there's nothing in the response to load the no posts element
		setTimeout(() => {
			if (!posts.length) {
				setLoading(false);
			}
		}, 5000);
		getPosts();
	}, [id]);

	// async await for axios fetch request
	const getPosts = async () => {
		try {
			const res = await axios.get(
				`http://localhost:3001/api/posts/state/${state}`
			);
			// filter through frontend because we didn't know how to filter with nested username in owner property on backend
			const data = res.data.filter((el) => el.owner.id === id);
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	}

	// PATCH request
	const sendUpdatedPost = async () => {
		try {
			// PATCH request to partially update post
			const res = await axios.patch(
				`http://localhost:3001/api/posts/id/${updatePost._id}`,
				updatePost,
				{headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}`}}
			);
			// set variable to save data from response
			const data = res.data;
			// create temp array to copy old posts
			let tempArr = [...posts];
			// find the index of the updated post
			const tempIndex = tempArr.findIndex((post) => post._id === data._id);
			// update the posts array with new updated post response
			tempArr.splice(tempIndex, 1, data);
			// update state
			setPosts(tempArr);
			setUpdateModal(false);
			setDisabled(false);
		} catch (error) {
			console.log(error);
		}
	}

	// Function to send DELETE request to the api using the id
	const handleDelete = async () => {
		try {
			// DELETE request to api
			const res = await axios.delete(
				`http://localhost:3001/api/posts/id/${toDeletePostId}`,
				{headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}`}}
			);
			// set variable for the response data
			const data = res.data;
			// create temp array to copy old posts
			let tempArr = [...posts];
			// find the index of the deleted post
			const tempIndex = tempArr.findIndex((post) => post._id === data._id);
			// update the posts state with the new temp array to update the page
			tempArr.splice(tempIndex, 1);
			setPosts(tempArr);
			// Close the delete modal
			setDeleteModal(false);
			setDisabled(false);
		} catch (error) {
			console.log(error);
		}
	}

	// Function change the state of updatePost
	const handleChange = (e) => {
		setUpdatePost({ ...updatePost, [e.target.id]: e.target.value });
	}

	// Create a handleSubmit to edit a post
	const handleSubmit = (e) => {
		e.preventDefault();
		sendUpdatedPost();
		setUpdateModal(false);
		setDisabled(false);
	}

	// Create a handleClick to open the update modal
	const openUpdateModal = async (id) => {
		try {
			// GET request for specific post
			const res = await axios.get(
				`http://localhost:3001/api/posts/id/${id}`
			);
			// find post from get request by state because we don't know how to filter with nested user schema in owner property on backend
			// setting state to the response data
			setUpdatePost(res.data);
			// Open the update modal
			setUpdateModal(true);
			setDisabled(true);
		} catch (error) {
			console.log(error);
		}
	}

	// Create a handleClick to open the delete modal
	const openDeleteModal = (id) => {
		setDeleteModal(true);
		setToDeletePostId(id);
		setDisabled(true);
	}

	// Set updateModal to false to close the modal
	const closeUpdateModal = () => {
		setUpdateModal(false);
		setDisabled(false);
	}

	// Set deleteModal to false to close the modal
	const closeDeleteModal = () => {
		setDeleteModal(false);
		setDisabled(false);
	}

	return (
		<div>
			{posts.length ? (
				<div style={{filter: (updateModal || deleteModal) && 'blur(4px)', pointerEvents: (updateModal || deleteModal) && 'none'}}>
					<div className={styles.nameAndYearsContainer}>
						<div className={styles.nameAndYears}>
							<h2 className={styles.name}>{posts[0].owner.username}</h2>
							<h3 className={styles.years}>
								{posts[0].years_of_residence} years in {posts[0].state}
							</h3>
						</div>
					</div>
					<div className={styles.postsList}>
						{posts.map((post, index) => {
							return (
								<div key={`${index}`} className={styles.post}>
									<div className={styles.postHeader}>
										<div className={styles.postTitleAndType}>
											<h2 className={styles.postTitle}>{post.title}</h2>
											<h3 className={styles.postType}>{post.type}</h3>
										</div>
										<h3 className={styles.postDate}>{post.date}</h3>
										<h3 className={styles.postCity}>{post.city}</h3>
									</div>
									<p className={styles.postMessage}>{post.message}</p>
									{((window.localStorage.getItem('userId')) === post.owner.id) && (
										<div className={styles.postButtons}>
											<button
												className={styles.postButton}
												disabled={disabled}
												onClick={() => {
													openUpdateModal(post._id);
												}}>
												Edit
											</button>
											<button
												className={styles.postButton}
												disabled={disabled}
												onClick={() => {
													openDeleteModal(post._id);
												}}>
												Delete
											</button>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			) : !posts.length && loading ? (
				<h2 className={styles.loading}>Loading...</h2>
			) : !posts.length && !loading ? (
				<h2 className={styles.loading}>No posts currently</h2>
			) : null}
			{updateModal && (
				<Update handleSubmit={handleSubmit} handleChange={handleChange} closeUpdateModal={closeUpdateModal} updatePost={updatePost} />
			)}
			{deleteModal && (
				<div className={styles.deleteModal}>
					<h3 className={styles.deleteModalHeader}>
						Are you sure you want to delete?
					</h3>
					<div className={styles.deleteModalButtonsContainer}>
						<button
							className={styles.deleteModalButton}
							onClick={() => {
								handleDelete();
							}}>
							Yes
						</button>
						<button
							className={styles.deleteModalButton}
							onClick={() => {
								closeDeleteModal();
							}}>
							No
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Users;
