import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StateLayout.module.css';

function StateLayout(props) {
    return (
        <div className={styles.home}>
            <Link to="/AL">
                <img
                    className={styles.img}
                    src={`/${props.state}.jpg`}
                    alt={`City in ${props.alt}`}
                />
                <span>{props.alt}</span>
            </Link>
        </div>
    );
}

export default StateLayout;