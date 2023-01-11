import React from "react";
import styles from "./About.module.css";

function About(props) {
    return (
        <div className={styles.margin_bottom_about}>
        <div className={styles.About_Container}>
        <div className={styles.text_about}>
            <h1 className={styles.header1}>What you don't know, shouldn't stop you from amazing experiences!</h1>
            <p className={styles.abt_paragraph1}>Know the scene? Make a scene. Talk about all your favorite places! You not only know the ins and outs, you know what it means to feel at home there.</p> 
            <span className={styles.spaces}></span>
            <h1 className={styles.header1}>Create new posts!</h1>
            <p className={styles.abt_paragraph1}>Let us know how much expertise you have with the local restaurants and experiences you want to share! Create a post and grow opportunities for others to connect with your love for those experiences.</p>
            <span className={styles.spaces}></span>
            <h1 className={styles.header1}>Who are we?</h1>
            <p className={styles.abt_paragraph1}>We are developers who empathize with peoples' need to connect. With a mission to better connect communities around us, we found and implemented a solution: FELP.</p>
            <span className={styles.spaces}></span>
            <h1 className={styles.header1}> 
            Learn more about us:
            </h1>
            <p className={styles.abt_paragraph1}>
            Get to know us better! Click on our images below to connect with us on Linkedin!
            </p>
        </div>
            <div className={styles.img_container}>
            <img className={styles.img_felp} src="/logo512.png" alt="felp-logo"/>
            </div>
        </div>
    </div>
    );
}

export default About;
