import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => dispatch( logIn(credentials) )
  }
}

const defaultState = {
  email: '',
  password: ''
}

class FormLogin extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.logIn(this.state)
  }
  
  render() {
    return (        
      <form onSubmit={ this.onSubmit }>
        <label>Email address
          <input
            value={ this.state.email }
            onChange={ this.onChange }
            name="email"
            type="text"
          />
        </label>
        <label>Password
          <input
            value={ this.state.password }
            onChange={ this.onChange }
            name="password"
            type="password"
          />
        </label>
        <button type="submit" className="c-button">
          Login
        </button>
        <p>{ this.props.auth.error ? this.props.auth.error.message : '' }</p>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)