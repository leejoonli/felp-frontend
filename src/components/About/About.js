import React from 'react';
import styles from './About.module.css';

function About(props) {
    return (
        <div className={styles.margin_bottom_about}>
        <div className={styles.About_Container}>
        <div className={styles.text_about}>
            <h1 className={styles.header1}>What you don't know, shouldn't stop you from amazing experiences!</h1>
            <p className={styles.abt_paragraph1}>Know the scene? Make a scene. Talk about all your favorite places! You not only know the ins and outs, you know what it means to feel home there.</p> 
            <span className={styles.spaces}></span>
            <h1 className={styles.header1}>Create new food and experience!</h1>
            <p className={styles.abt_paragraph1}>Let us know how much experience you have with the experience you want to share! Create a post and grow opportunities for others to share that love for the experience too. Show us how much you love your experiences.</p>
            <span className={styles.spaces}></span>
            <h1 className={styles.header1}>Who are we?</h1>
            <p className={styles.abt_paragraph1}>We are devs who empathize with peoples need to connect. Not scared of ambition, but allowing data to be our navigator.</p>
        </div>
            <div className={styles.img_container}>
            <img className={styles.img_felp} src="https://i.imgur.com/k8S94K4.png" alt=""/>
            </div>
        </div>
    </div>
    );
}

export default About;