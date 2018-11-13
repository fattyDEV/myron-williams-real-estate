import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav className='menu-bar'>
                <ul className='top-menu'>
                    <li className='top-menu-item'><Link to={'/about-me'}>About Me</Link></li>
                    <li className='top-menu-item'><Link to={'/listings'}>Listings</Link></li>
                    <li className='top-menu-item'><Link to={'/testimonials'}>Testimonials</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;