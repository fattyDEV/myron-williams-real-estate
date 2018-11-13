import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Listings from './Listings.js';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div className="App-container">
            <Header />
            <Menu />
            <img className='background-pic' src='https://images.pexels.com/photos/462358/pexels-photo-462358.jpeg?cs=srgb&dl=garden-house-lawn-462358.jpg&fm=jpg' alt='house pic' />
            <main className='main'>
              <div></div>
            </main>
            <Footer />
          </div>
        )}/>
        <Route exact path='/find-a-home' render={() => (
          <Listings />
        )}/>
      </div>
    );
  }
}

export default App;
