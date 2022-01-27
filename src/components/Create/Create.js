import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='name'>Name:</label>
			<input onChange={handleChange} id='name' value={newPost.user.name} />
			<label htmlFor='state'>State:</label>
			<select onChange={handleChange} id='state'>
				<option value=''></option>
				<option value='NY'>New York</option>
				<option value='NJ'>New Jersey</option>
				<option value='PA'>Pennsylvania</option>
				<option value='MD'>Maryland</option>
				<option value='CA'>California</option>
				<option value='GA'>Georgia</option>
			</select>
			<label htmlFor='city'>City:</label>
			<input onChange={handleChange} id='city' value={newPost.city} />
			<label htmlFor='title'>Title:</label>
			<input onChange={handleChange} id='title' value={newPost.title} />
			<label htmlFor='years_of_residence'>Years of Residence:</label>
			<input onChange={handleChange} id='years_of_residence' value={newPost.years_of_residence} type='number' min={0} />
			<label htmlFor='message'>Message:</label>
			<input onChange={handleChange} id='message' value={newPost.message} />
			<label htmlFor='type'>Type:</label>
			<select onChange={handleChange} id='type'>
				<option value=''></option>
				<option value='food'>Food</option>
				{/* <option value='experience'>Experience</option> */}
			</select>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default Create;
