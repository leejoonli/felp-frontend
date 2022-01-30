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
			await axios({
				url: `https://felp-coders.herokuapp.com/api/posts`,
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${window.localStorage.getItem('token')}`
				},
				data: newPost,
			});
			navigate('/home');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor='state' className={styles.formLabel}>State:</label>
				<select onChange={handleChange} id='state' className={styles.stateInput}>
					<option value='' className={styles.option}></option>
					<option value='AL' className={styles.option}>Alabama</option>
					<option value='AK' className={styles.option}>Alaska</option>
					<option value='AZ' className={styles.option}>Arizona</option>
					<option value='AR' className={styles.option}>Arkansas</option>
					<option value='CA' className={styles.option}>California</option>
					<option value='CO' className={styles.option}>Colorado</option>
					<option value='CT' className={styles.option}>Connecticut</option>
					<option value='DE' className={styles.option}>Delaware</option>
					<option value='FL' className={styles.option}>Florida</option>
					<option value='GA' className={styles.option}>Georgia</option>
					<option value='HI' className={styles.option}>Hawaii</option>
					<option value='ID' className={styles.option}>Idaho</option>
					<option value='IL' className={styles.option}>Illinois</option>
					<option value='IN' className={styles.option}>Indiana</option>
					<option value='IA' className={styles.option}>Iowa</option>
					<option value='KS' className={styles.option}>Kansas</option>
					<option value='KY' className={styles.option}>Kentucky</option>
					<option value='LA' className={styles.option}>Louisiana</option>
					<option value='ME' className={styles.option}>Maine</option>
					<option value='MD' className={styles.option}>Maryland</option>
					<option value='MA' className={styles.option}>Massachusetts</option>
					<option value='MI' className={styles.option}>Michigan</option>
					<option value='MN' className={styles.option}>Minnesota</option>
					<option value='MS' className={styles.option}>Mississippi</option>
					<option value='MO' className={styles.option}>Missouri</option>
					<option value='MT' className={styles.option}>Montana</option>
					<option value='NE' className={styles.option}>Nebraska</option>
					<option value='NV' className={styles.option}>Nevada</option>
					<option value='NH' className={styles.option}>New Hampshire</option>
					<option value='NJ' className={styles.option}>New Jersey</option>
					<option value='NM' className={styles.option}>New Mexico</option>
					<option value='NY' className={styles.option}>New York</option>
					<option value='NC' className={styles.option}>North Carolina</option>
					<option value='ND' className={styles.option}>North Dakota</option>
					<option value='OH' className={styles.option}>Ohio</option>
					<option value='OK' className={styles.option}>Oklahoma</option>
					<option value='OR' className={styles.option}>Oregon</option>
					<option value='PA' className={styles.option}>Pennsylvania</option>
					<option value='RI' className={styles.option}>Rhode Island</option>
					<option value='SC' className={styles.option}>South Carolina</option>
					<option value='SD' className={styles.option}>South Dakota</option>
					<option value='TN' className={styles.option}>Tennessee</option>
					<option value='TX' className={styles.option}>Texas</option>
					<option value='UT' className={styles.option}>Utah</option>
					<option value='VT' className={styles.option}>Vermont</option>
					<option value='VA' className={styles.option}>Virginia</option>
					<option value='WA' className={styles.option}>Washington</option>
					<option value='WV' className={styles.option}>West Virginia</option>
					<option value='WI' className={styles.option}>Wisconsin</option>
					<option value='WY' className={styles.option}>Wyoming</option>
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
