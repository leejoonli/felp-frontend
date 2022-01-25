import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create(props) {
	const [newPost, setNewPost] = useState({
		state: '',
		city: '',
		title: '',
		years_of_residence: 0,
		// date: new Date(),
		message: '',
		type: 'food',
		user: { name: '' },
	});

	const handleChange = () => {};

	return (
		<form>
			<label htmlFor='state'>State:</label>
			<select onChange={handleChange} id='state'>
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
			<label htmlFor='YoR'>YoR:</label>
			<input onChange={handleChange} id='YoR' value={newPost.YoR} />
			<label htmlFor='messge'>messge:</label>
			<input onChange={handleChange} id='messge' value={newPost.messge} />
			<label htmlFor='type'>type:</label>
			<input onChange={handleChange} id='type' value={newPost.type} />
		</form>
	);
}

export default Create;
