import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className='menu-bar'>
                <ul className='top-menu'>
                    <li className='top-menu-item'>About Me</li>
                    <li className='top-menu-item'>Listings</li>
                    <li className='top-menu-item'>Testimonials</li>
                </ul>
            </nav>
        );
    }
}

export default Menu;