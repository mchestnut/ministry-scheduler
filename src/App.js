import React, { Component } from 'react';
import './App.css';

import Footer from './components/footer/footer';
import Header from './components/header/header';

class App extends Component {  
  render() {

    return (
      <div className="App">
        <div className="background-image" />
        <div className="grid">
          <Header />
          <main>
            <p>
              Main content
            </p>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
