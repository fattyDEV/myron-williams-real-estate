import React, { Component } from 'react';
import Header from './Header.js';
import Menu from './Menu.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Header />
        <Menu />
        <img className='background-pic' src='https://images.pexels.com/photos/462358/pexels-photo-462358.jpeg?cs=srgb&dl=garden-house-lawn-462358.jpg&fm=jpg' alt='house pic' />
        <main className='main'></main>
        <Footer />
      </div>
    );
  }
}

export default App;
