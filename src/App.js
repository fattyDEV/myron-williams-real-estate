import React, { Component } from 'react';
import headerLogo from './images/MW-header-logo1.png';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className='header'>
          <div className='header-logo'><img className='header-image' src={headerLogo} alt='header logo' /></div>
        </header>
      </div>
    );
  }
}

export default App;
