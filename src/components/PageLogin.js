import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'

import FormLogin from './FormLogin'
import Wrapper from './Wrapper'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase
  }
}

const PageLogin = (props) => {
  const from = props.location.state.from || '/'

  if (props.firebase.auth.uid) { navigate(from) }
  
  return (
    <Wrapper>
      <h1>Login</h1>
      
      <FormLogin />
    </Wrapper>
  )
}

export default connect(mapStateToProps)(PageLogin)