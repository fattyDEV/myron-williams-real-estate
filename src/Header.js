import React, { Component } from 'react';
import headerLogo from './images/MW-header-logo1.png';

class Header extends Component {
    render () {
        return (
            <header className='header'>
                <div className='header-logo'><img className='header-image' src={headerLogo} alt='header logo' /></div>
            </header>
        );
    }
}

export default Header;