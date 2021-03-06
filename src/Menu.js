import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav className='menu-bar'>
                <ul className='top-menu'>
                    <li className='top-menu-item'><Link className='link-item' to={'/'}>Home</Link></li>
                    <li className='top-menu-item'><Link className='link-item' to={'/about-me'}>About Me</Link></li>
                    <li className='top-menu-item'><Link className='link-item' to={'/find-a-home'}>Find A Home</Link></li>
                    <li className='top-menu-item'><Link className='link-item' to={'/reviews'}>Testimonials</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;