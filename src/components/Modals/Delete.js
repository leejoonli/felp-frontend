import React from 'react';
import styles from './Delete.module.css';

function Delete(props) {
    return (
        <div className={styles.deleteModal}>
            <h3 className={styles.deleteModalHeader}>
                Are you sure you want to delete?
            </h3>
            <div className={styles.deleteModalButtonsContainer}>
                <button
                    className={styles.deleteModalButton}
                    onClick={() => {
                        props.handleDelete();
                    }}>
                    Yes
                </button>
                <button
                    className={styles.deleteModalButton}
                    onClick={() => {
                        props.closeDeleteModal();
                    }}>
                    No
                </button>
            </div>
        </div>
    );
}

export default Delete;