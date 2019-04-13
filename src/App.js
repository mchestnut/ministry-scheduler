import React, { Component } from 'react';
import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import PageCalendar from './components/page-calendar';
import PageLogin from './components/page-login';
import PageProfile from './components/page-profile';
import PageUsers from './components/page-users';

class App extends Component {
  parsePath(path) {
    const newPath = path.replace(/\//g, ' ').trim();
    const pathArray = newPath.split(' ');
    const pathObj = {};

    pathObj.page = pathArray[0];
    pathObj.params = pathArray.slice(1);
    
    return pathObj;
  }

  route() {
    const {page, params} = this.parsePath(this.props.path);
    
    switch (page) {
      case 'calendar':
        return <PageCalendar date={ params } />;
      case 'login':
        return <PageLogin />;
      case 'profile':
        return <PageProfile />;
      case 'users':
        return <PageUsers />;
      default:
        return <PageCalendar />;
    }
  }

  render() {

    return (
      <div className="App">
        <div className="background-image" />
        <div className="grid">
          <Header />
          { this.route() }
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
