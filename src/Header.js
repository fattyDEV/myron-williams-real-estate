import React, { Component } from 'react';
import headerLogo1 from './images/MW-header-logo1.png';

class Header extends Component {
    render () {
        return (
            <header className='header'>
                <div className='header-logo'><img className='header-image' src={headerLogo1} alt='header logo' /></div>
            </header>
        );
    }
}

export default Header;