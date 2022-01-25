import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <div>
            <h1><Link to='/'>Felp</Link></h1>
            <nav>
                <ul>
                    <li>Food</li>
                    {/* <li>Experience</li> */}
                </ul>
            </nav>
            <h2><Link to='/create'>New Post</Link></h2>
            <h2><Link to='/about'>About</Link></h2>
        </div>
    );
}

export default Navigation;