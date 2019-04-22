import React, { Component } from 'react';
import styles from './form-login.module.css';
import { withFirebase } from '../../firebase'

const defaultState = {
  email: '',
  password: '',
  error: null
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
    
    this.props.firebase
      .signIn(this.state.email, this.state.password)
      .then(() => {
        this.setState({ ...defaultState })
        console.log('success')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const {email, password, error} = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          className="input input--full-width"
          placeholder="Email address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          className="input input--full-width"
          placeholder="Password"
        />
        <button
          type="submit"
          className="button button--full-width"
        >
          Login
        </button>
        {error &&
          <p>{ error.message }</p>        
        }
      </form>
    )
  }
}

export default withFirebase(FormLogin);