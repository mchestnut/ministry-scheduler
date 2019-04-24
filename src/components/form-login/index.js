import React, { Component } from 'react';
import styles from './form-login.module.css';
import { navigate } from '@reach/router'
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
        navigate( this.props.target )
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const {email, password, error} = this.state

    return (
      <form onSubmit={this.onSubmit} className={ styles.form }>
        <label className="label">Email address
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            className="input input--full-width"
          />
        </label>
        <label className="label">Password
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            className="input input--full-width"
          />
        </label>
        <button
          type="submit"
          className={ `button button--full-width ${styles.button}` }
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