import React from 'react';
import styles from './Update.module.css';

function Update(props) {
    return (
        <div className={styles.editModal}>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.formTitle}>
                    <label htmlFor="title" className={styles.formHeadings}>
                        Title:
                    </label>
                    <input
                        id="title"
                        className={styles.titleInput}
                        value={props.updatePost.title}
                        onChange={props.handleChange}
                    />
                </div>
                <div className={styles.formType}>
                    <label htmlFor="type" className={styles.formHeadings}>
                        Type:
                    </label>
                    <select id="type" className={styles.typeInput}>
                        <option value=""></option>
                        <option value="Food">Food</option>
                        <option value="Experience">Experience</option>
                    </select>
                </div>
                <div className={styles.formMessage}>
                    <label htmlFor="message" className={styles.formHeadings}>
                        Message:
                    </label>
                    <textarea
                        id="message"
                        className={styles.messageInput}
                        value={props.updatePost.message}
                        onChange={props.handleChange}
                    />
                </div>
                <div className={styles.editModalButtons}>
                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                    <button
                        className={styles.cancelButton}
                        onClick={() => {
                            props.closeUpdateModal();
                        }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Update;