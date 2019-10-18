import React from 'react'
import { connect } from 'react-redux'
import { Link, Location } from '@reach/router'
import { logOut } from '../actions/auth'

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    firebase: state.firebase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch( logOut() )
  }
}

const Menu = (props) => {
  if (props.firebase.auth.uid && props.firebase.profile.role === 'admin') {
    return (
      <nav>
        <Link to="calendar" className="c-button">Calendar</Link>
        <Link to="users" className="c-button">Users</Link>
        <Link to="profile" className="c-button">My Profile</Link>
        <button onClick={ props.logOut } className="c-button">Logout</button>
      </nav>
    )
  
    } else if (props.firebase.auth.uid) {
    return (
      <nav>
        <Link to="calendar" className="c-button">Calendar</Link>
        <Link to="profile" className="c-button">My Profile</Link>
        <button onClick={ props.logOut } className="c-button">Logout</button>
      </nav>
    )
  
  } else {
    return (
      <Location>
        { ({ location }) => (
          
          <nav>
            <Link to="calendar" className="c-button">Calendar</Link>
            <Link to="login" state={{ from: location.pathname }} className="c-button">Log In</Link>
          </nav>

        ) }
      </Location>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)