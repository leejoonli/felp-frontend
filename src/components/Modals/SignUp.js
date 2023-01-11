import React from 'react';
import styles from './SignUp.module.css';

function SignUp(props) {
    return (
        <div className={styles.signUpModalContainer}>
            <form onSubmit={props.handleSignUpFormSubmit} className={styles.signUpModal}>
                <label htmlFor="username" className={styles.signUpLabel}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={props.signUpForm.username}
                    onChange={props.handleSignUpChange}
                    className={styles.signUpModalUsername}
                />
                <label htmlFor="email" className={styles.signUpLabel}>E-mail:</label>
                <input
                    type="text"
                    id="email"
                    value={props.signUpForm.email}
                    onChange={props.handleSignUpChange}
                    className={styles.signUpModalEmail}
                />
                <label htmlFor="password" className={styles.signUpLabel}>Password:</label>
                <input
                    type="text"
                    id="password"
                    value={props.signUpForm.password}
                    onChange={props.handleSignUpChange}
                    className={styles.signUpModalPassword}
                />
                {/* <label htmlFor="confirm_password" className={styles.signUpLabel}>Confirm Password:</label>
                <input
                    type="text"
                    id="confirm_password"
                    value={signUpForm.confirm_password}
                    onChange={handleSignUpChange}
                /> */}
                <div>
                    <button type="submit" className={styles.signUpFormButton}>Sign Up</button>
                    <button
                        onClick={() => {
                            props.handleSignUpModalClose();
                        }}
                        className={styles.signUpFormButton}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;