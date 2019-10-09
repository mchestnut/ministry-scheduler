import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    firestore: state.firestore,
    user: state.user
  }
}

const PageLogin = (props) => {
  return (
    <div>
      Login { props.user.auth ? 'auth' : '' }
    </div>
  )
}

export default connect(mapStateToProps)(PageLogin)

// import React, { Component } from 'react';
// import { withFirebase } from '../../firebase'

// import Container from '../container'
// import FormLogin from '../form-login'

// class PageLogin extends Component {
//   constructor(props) {
//     super(props)

//     if (props.location && props.location.state && props.location.state.from) {
//       this.target = props.location.state.from
//     } else {
//       this.target = '/'
//     }
//   }

//   render() {

//     return (
//       <Container>
//         <FormLogin target={ this.target } />
//       </Container>
//     )
//   }
// }

// export default withFirebase(PageLogin);