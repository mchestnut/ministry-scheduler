import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'

import Wrapper from './Wrapper'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase
  }
}

const PageProfile = (props) => {
  if (!props.firebase.auth.uid) {
    navigate('/')
    return null
  }
   
  return (
    <Wrapper>
      Profile
    </Wrapper>
  )
}


export default connect(mapStateToProps)(PageProfile)

// import React, { Component } from 'react';
// import withAuthorization from '../../authorization'

// class PageProfile extends Component {
//   render() {

//     return (
//       <main>
//         <p>Profile page</p>
//       </main>
//     )
//   }
// }

// export default withAuthorization('member', true)(PageProfile);