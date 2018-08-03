// src/App.js

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="aquib" avatar={require('./image.jpg')} caption="Mundeyyyy!" image={require('./image.jpg')} />
          <Post nickname="aquib" avatar={require('./image.jpg')} caption="Aseeeeem!" image={require('./img2.jpg')} />

          {/* more posts */}
        </section>
      </div>;
  }
}

export default App;
