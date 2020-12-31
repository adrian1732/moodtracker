import React from 'react';
//Import for linking the webpage
import {Link} from 'react-router-dom';

//Nav bar on top of the web page 
const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;