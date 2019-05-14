import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { withFirebase } from './firebase';

import Footer from './components/footer';
import Header from './components/header';
import PageCalendar from './components/page-calendar';
import PageLogin from './components/page-login';
import PageProfile from './components/page-profile';
import PageUsers from './components/page-users';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({ authUser }) : this.setState({ authUser: null })
    })
  }

  componentWillUnmount() {
    this.listener()
  }

  render() {
    return (
      <div className="App">
        <div className="background-image" />
        <div className="grid">
          <Header authUser={ this.state.authUser } />
          <Router style={{ display: 'inherit' }}>
            <PageCalendar path="/" />
            <PageLogin path="login" />
            <PageProfile path="profile" />
            <PageUsers path="users" />
            <PageCalendar path="calendar" />
            <PageCalendar path="calendar/:year" />
            <PageCalendar path="calendar/:year/:month" />
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withFirebase(App);
