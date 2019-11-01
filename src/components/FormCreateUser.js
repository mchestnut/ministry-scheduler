import React, { Component } from 'react'

class FormCreateUser extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      role: 'member',
      color: '8c8989'
    }
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.clearResponse()
    this.props.toggleForm( 'editUsers' )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // TODO: Verify and sanitize form data

    this.props.createUser({ ...this.state })
  }
  
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          onChange={ ({ currentTarget }) => this.setState({ email: currentTarget.value }) }
          value={ this.state.email }
          type="email"
          placeholder="Email"
        />
        
        <input
          onChange={ ({ currentTarget }) => this.setState({ password: currentTarget.value }) }
          value={ this.state.password }
          type="password"
          placeholder="Password"
        />
        
        <input
          onChange={ ({ currentTarget }) => this.setState({ first_name: currentTarget.value }) }
          value={ this.state.first_name }
          type="text"
          placeholder="First name"
        />
        
        <input
          onChange={ ({ currentTarget }) => this.setState({ last_name: currentTarget.value }) }
          value={ this.state.last_name }
          type="text"
          placeholder="Last name"
        />
        
        <select
          onChange={ ({ currentTarget }) => this.setState({ role: currentTarget.value })}
          value={ this.state.role }
        >
          <option value="admin">Admin</option>
          <option value="member">Member</option>
          <option value="inactive">Inactive</option>
        </select>
        
        <select
          onChange={ ({ currentTarget }) => this.setState({ color: currentTarget.value })}
          value={ this.state.color }
        >
          <option value="8c8989">Gray</option>
          <option value="e1a448">Orange</option>
          <option value="89d177">Green</option>
        </select>

        <button
          type="button"
          onClick={ this.handleCancel }
          className="c-button"
        >
          Cancel
        </button>
        <button className="c-button">
          Create user
        </button>
        
        <p>{ this.props.response ? this.props.response.message : '' }</p>
      </form>
    )
  }
}

export default FormCreateUser