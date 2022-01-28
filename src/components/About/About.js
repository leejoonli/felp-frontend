import React from 'react';
import styles from './About.module.css';

function About(props) {
    return (
        <div>
            <h1>What you don't know shouldn't stop you from experiences full of joy!</h1>
            <p>Know the scene? Make a scene. Talk about all your favorite places! You not only know the ins and outs, you know what it means to feel home there.</p> 
            <br></br>
            <h1>Create new food and experience recommendations for all to see!</h1>
            <p>Let us know how much experience you have with the experience you want to share! Create a post and grow opportunities for others to share that love for the experience too. Show us how much you love your experiences.</p>
            <br></br>
            <h1>Who are we?</h1>
            <p>We are devs who empathize with peoples need to connect. Not scared of ambition, but allowing data to be our navigator.</p>
            <div className={styles.img_container}>
            <img src="https://i.imgur.com/k8S94K4.png" alt=""/>
            </div>
        </div>
    );
}

export default About;