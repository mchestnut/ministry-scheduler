import React from 'react'
import { connect } from 'react-redux'
import { Link, Location } from '@reach/router'
import { logOut } from '../actions/auth'

import logo from '../img/logo-tbc.png'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch( logOut() )
  }
}

const NavBar = (props) => {
  return (
    <Location>
      { ({ location }) => (

        <header className="c-nav-bar">
          <div>
            <Link to="/">
              <img src={ logo } alt="" className="c-nav-bar__logo" />
            </Link>
          </div>

          <Link to="calendar" className="c-button">Calendar</Link>
          <Link to="users" className="c-button">Users</Link>
          <Link to="profile" className="c-button">My Profile</Link>
          <Link to="login" state={{ from: location.pathname }} className="c-button">Log In</Link>
          <button onClick={ props.logOut } className="c-button">Logout</button>
        </header>

      ) }
    </Location>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)



// import React, { Component } from 'react';
// import styles from './header.module.css';
// import { Link, Location } from '@reach/router';
// import { withFirebase } from '../../firebase';

// import logo from '../../logo-tbc.png';

// class Header extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       role: null
//     }
//   }

//   render() {
//     const { authUser, firebase } = this.props
    
//     if (authUser) {
//       firebase.getUser(authUser.uid).once('value').then((snapshot) => {
//         this.setState({ role: snapshot.val().role })
//       })
//     }

//     const AuthLinks = (location) => (
//       <div>
//         <Link to="calendar" className="button">Calendar</Link>
//         { this.state.role === 'admin' && (
//           <Link to="users" className="button">Users</Link>
//           )}
//         <Link to="profile" className="button">My Profile</Link>
//         <button onClick={ firebase.signOut } state={{ from: location.pathname }} className="button">Logout</button>
//       </div>
//     )

//     const NonAuthLinks = (location) => (
//       <div>
//         <Link to="login" state={{ from: location.pathname }} className="button">Login</Link>
//       </div>
//     )

//     return (
//       <Location>
//         { ({ location }) => (
//           <header className={ styles.header }>
//             <Link to="/">
//               <img src={logo} className={ styles.logo } alt="" />
//             </Link>
//             { authUser ? AuthLinks(location) : NonAuthLinks(location) }
//           </header>
//         )}
//       </Location>
//     )
//   }
// }

// export default withFirebase(Header);