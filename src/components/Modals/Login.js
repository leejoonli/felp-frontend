import React from 'react';
import styles from './Login.module.css';

function Login(props) {
    return (
        <div className={styles.LoginModalContainer}>
            <form onSubmit={props.handleLoginFormSubmit} className={styles.loginModalForm}>
                <label htmlFor="email" className={styles.loginLabel}>E-mail:</label>
                <input
                    type="text"
                    id="email"
                    value={props.LoginForm.email}
                    onChange={props.handleLoginChange}
                    className={styles.loginModalEmail}
                />
                <label htmlFor="password" className={styles.loginLabel}>Password:</label>
                <input
                    type="text"
                    id="password"
                    value={props.LoginForm.password}
                    onChange={props.handleLoginChange}
                    className={styles.loginModalPassword}
                />
                <div>
                    <button type="submit" className={styles.loginFormButton}>Log In</button>
                    <button
                        onClick={() => {
                            props.handleLoginModalClose();
                        }}
                        className={styles.loginFormButton}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;