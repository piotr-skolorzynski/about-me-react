import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Piotr Skołorzyński</Link>
                <ul className="right">
                    <li><NavLink to="/about">O mnie</NavLink></li>
                    <li><NavLink to="/experience">Doświadczenie</NavLink></li>
                    <li><NavLink to="/skills">Umiejętności</NavLink></li>
                    <li><NavLink to="/hobbies">Zainteresowania</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;