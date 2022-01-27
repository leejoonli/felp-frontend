import React from 'react';
import styles from './Users.module.css';
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
	const [loading, setLoading] = useState(true);
	const [disabled, setDisabled] = useState(false);

	// useParams to hold the id of the user
	const { user } = useParams();

	// useEffect to fetch all the posts of the user in a location
	useEffect(() => {
		setTimeout(() => {
			if (!posts.length) {
				setLoading(false);
			}
		}, 5000);
		getPosts();
	}, [posts]);

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
	}

	// PATCH request
	const sendUpdatedPost = async () => {
		try {
			await axios.patch(
				`https://felp-coders.herokuapp.com/api/posts/id/${updatePost._id}`, updatePost
			);
		} catch (error) {
			console.log(error);
		}
	}

	// Function to send DELETE request to the api using the id
	const handleDelete = async () => {
		try {
			// DELETE request to api
			await axios.delete(`https://felp-coders.herokuapp.com/api/posts/id/${toDeletePostId}`);
			// Close the delete modal
			setDeleteModal(false);
		} catch (error) {
			console.log(error);
		}
	}

	// Function change the state of updatePost
	const handleChange = (e) => {
		setUpdatePost({...updatePost, [e.target.id]: e.target.value})
	}
	
	// Create a handleSubmit to edit a post
	const handleSubmit = (e) => {
		e.preventDefault();
		sendUpdatedPost();
		setUpdateModal(false);
	}
	
	// Create a handleClick to open the update modal
	const openUpdateModal = async (id) => {
        try {
			// GET request for specific post
            const res = await axios.get(
				`https://felp-coders.herokuapp.com/api/posts/id/${id}`
			);
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
	};

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
				<>
					<div className={styles.nameAndYears}>
						<h2 className={styles.name}>{user}</h2>
						<h3 className={styles.years}>
							{posts[0].years_of_residence} years in {posts[0].state}
						</h3>
					</div>
					<div className={styles.postsList}>
						{posts.map((post, index) => {
							return (
								<div key={`${post.user.name}-${index}`} className={styles.post}>
									<div className={styles.postHeader}>
										<div className={styles.postTitleAndType}>
											<h2 className={styles.postTitle}>{post.title}</h2>
											<h3 className={styles.postType}>{post.type}</h3>
										</div>
										<h3 className={styles.postDate}>{post.date}</h3>
										<h3 className={styles.postCity}>{post.city}</h3>
									</div>
									<p className={styles.postMessage}>{post.message}</p>
									<div className={styles.postButtons}>
										<button className={styles.postButton} disabled={disabled}
											onClick={() => {
												openUpdateModal(post._id);
											}}>
											Edit
										</button>
										<button className={styles.postButton} disabled={disabled}
											onClick={() => {
												openDeleteModal(post._id)
											}}>
											Delete
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</>
			) : (!posts.length && loading) ? (
				<h2>Loading...</h2>
			) : (!posts.length && !loading) ? (
				<>
					<h2>No posts currently.</h2>
				</>
			) : null}
			{updateModal && (
				<div className={styles.editModal}>
					<form onSubmit={handleSubmit} className={styles.editForm}>
						<div className={styles.formTitle}>
							<label htmlFor='title' className={styles.formHeadings}>Title:</label>
							<input id='title' className={styles.titleInput} value={updatePost.title} onChange={handleChange}/>
						</div>
						<div className={styles.formType}>
							<label htmlFor='type' className={styles.formHeadings}>Type:</label>
							<select id='type' className={styles.typeInput}>
								<option value=''></option>
								<option value='Food'>Food</option>
								{/* <option value='experience'>Experience</option> */}
							</select>
						</div>
						<div className={styles.formMessage}>
							<label htmlFor='message' className={styles.formHeadings}>Message:</label>
							<textarea id='message' className={styles.messageInput} value={updatePost.message} onChange={handleChange}/>
						</div>
						<div className={styles.editModalButtons}>
							<button type='submit' className={styles.submitButton}>Submit</button>
							<button className={styles.cancelButton} onClick={() => {closeUpdateModal()}}>Cancel</button>
						</div>
					</form>
				</div>
			)}
			{deleteModal && (
				<div className={styles.deleteModal}>
					<h3 className={styles.deleteModalHeader}>Are you sure you want to delete?</h3>
					<div className={styles.deleteModalButtonsContainer}>
						<button className={styles.deleteModalButton} onClick={() => {handleDelete()}}>Yes</button>
						<button className={styles.deleteModalButton} onClick={() => {closeDeleteModal()}}>No</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Users;