import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className='menu-bar'>
                <nav className='navigation-menu'>
                    <ul className='top-menu'>
                        <li className='top-menu-item'>About Me</li>
                        <li className='top-menu-item'>Listings</li>
                        <li className='top-menu-item'>Testimonials</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;