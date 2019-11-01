import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { navigate } from '@reach/router'

import { clearResponse, clearResult, createUser, updateUsers } from '../actions/users'

import Wrapper from './Wrapper'
import FormCreateUser from './FormCreateUser'
import FormEditUsers from './FormEditUsers'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    firestore: state.firestore,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearResponse: () => dispatch( clearResponse() ),
    clearResult: () => dispatch( clearResult() ),
    createUser: (details) => dispatch( createUser(details) ),
    updateUsers: (users) => dispatch( updateUsers(users) )
  }
}

class PageUsers extends Component {

  constructor(props) {
    super(props)

    this.state = {
      form: 'editUsers',
      updatedUsers: {}
    }
  }

  componentDidUpdate() {
    if ( this.props.users.result === 'userCreated' ) {
      this.setState({ form: 'editUsers' })
      this.props.clearResult()
    }
  }

  toggleForm = ( form ) => {
    this.setState({ form })
  }

  updateSingleUser = ( uid, details ) => {
    const updatedUsers = Object.assign(
      this.state.updatedUsers,
      { [uid]: details }
    )

    this.setState({ updatedUsers })
  }

  render() {
    const isAdmin = this.props.firebase.profile.role === 'admin'
    
    if ( !this.props.firebase.auth.uid || !isAdmin ) {
      navigate('/')
      return null
    }

    const users = this.props.firestore.data.users
    
    return (
      <Wrapper>
        <h1>Users</h1>

        { ( this.state.form === 'editUsers' ) && (
          <FormEditUsers
            response={ this.props.users.response }
            toggleForm={ this.toggleForm }
            updatedUsers={ this.state.updatedUsers }
            updateSingleUser={ this.updateSingleUser }
            updateUsers={ this.props.updateUsers }
            users={ users }
          />
        ) }

        { ( this.state.form === 'createUser' ) && (
          <FormCreateUser
            clearResponse={ this.props.clearResponse }
            createUser={ ( details ) => this.props.createUser(details) }
            response={ this.props.users.response }
            toggleForm={ this.toggleForm }
          />
        ) }

      </Wrapper>
    )
  }
}


export default compose(
  firestoreConnect( () => ['users'] ),
  connect(mapStateToProps, mapDispatchToProps)
)(PageUsers)