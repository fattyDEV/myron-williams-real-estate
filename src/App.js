import React, { Component } from 'react';
import Header from './Header.js';
import Menu from './Menu.js';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
