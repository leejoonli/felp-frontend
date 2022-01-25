import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <div>
            <h1> Felp </h1>
            <nav>
                <ul>
                    <li>Food</li>
                    <li>Experience</li>
                </ul>
            </nav>
            <h2>About</h2>
        </div>
    );
}

export default Navigation;