import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import About from './About.js';
import Listings from './Listings.js';
import Reviews from './Reviews.js';

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
        <Route exact path='/about-me' render={() => (
          <About />
        )} />
        <Route exact path='/find-a-home' render={() => (
          <Listings />
        )}/>
        <Route exact path='/reviews' render={() => (
          <Reviews />
        )} />
      </div>
    );
  }
}

export default App;
