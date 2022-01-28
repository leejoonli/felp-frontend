import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Create.module.css';

function Create(props) {
	// reference useNavigate with const navigate
	const navigate = useNavigate();

	// state variable to hold all the information from the user
	const [newPost, setNewPost] = useState({
		state: '',
		city: '',
		title: '',
		years_of_residence: undefined,
		// can call Date() on submit and try to get it without the time
		date: new Date().toISOString().split('T')[0],
		message: '',
		type: '',
		user: { name: '' },
	});

	// handle change function to keep track of user input
	const handleChange = (e) => {
		// sets newPost key values with what the user inputs
		if(e.target.id === 'name') {
			let temp = {...newPost};
			temp.user.name = e.target.value;
			setNewPost(temp);
		}
		else {
			setNewPost({...newPost, [e.target.id]: e.target.value});
		}
	};

	// submit function for axios post request
	const handleSubmit = (e) => {
		// prevent default to not refresh the page
		e.preventDefault();
		sendPost();
	};

	const sendPost = async () => {
		try {
			// comment this line back in when connecting to backend
			await axios.post(`https://felp-coders.herokuapp.com/api/posts`, newPost);
			navigate('/home');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor='name' className={styles.formLabel}>Name:</label>
				<input onChange={handleChange} id='name' value={newPost.user.name} className={styles.nameInput}/>
				<label htmlFor='state' className={styles.formLabel}>State:</label>
				<select onChange={handleChange} id='state' className={styles.stateInput}>
					<option value='' className={styles.option}></option>
					<option value='NY' className={styles.option}>New York</option>
					<option value='NJ' className={styles.option}>New Jersey</option>
					<option value='PA' className={styles.option}>Pennsylvania</option>
					<option value='MD' className={styles.option}>Maryland</option>
					<option value='CA' className={styles.option}>California</option>
					<option value='GA' className={styles.option}>Georgia</option>
				</select>
				<label htmlFor='city' className={styles.formLabel}>City:</label>
				<input onChange={handleChange} id='city' value={newPost.city} className={styles.cityInput}/>
				<label htmlFor='title' className={styles.formLabel}>Title:</label>
				<input onChange={handleChange} id='title' value={newPost.title} className={styles.titleInput}/>
				<label htmlFor='years_of_residence' className={styles.formLabel}>Years of Residence:</label>
				<input onChange={handleChange} id='years_of_residence' value={newPost.years_of_residence} type='number' min={0} className={styles.yearsInput}/>
				<label htmlFor='type' className={styles.formLabel}>Type:</label>
				<select onChange={handleChange} id='type' className={styles.typeInput}>
					<option value='' className={styles.option}></option>
					<option value='Food' className={styles.option}>Food</option>
					<option value='Experience'>Experience</option>
				</select>
				<label htmlFor='message' className={styles.formLabel}>Message:</label>
				<textarea onChange={handleChange} id='message' value={newPost.message} className={styles.messageInput}/>
				<button type='submit' className={styles.formButton}>Submit</button>
			</form>
		</div>
	);
}

export default Create;
