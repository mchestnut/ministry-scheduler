import React from 'react'
import { navigate } from '@reach/router'
import { withFirebase } from '../firebase'

const withAuthorization = (pageRole, isRestricted) => Component => {
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        isAuthorized: false
      }
    }

    componentWillMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          
          if (authUser) {
            this.props.firebase.getUser(authUser.uid).once('value').then((snapshot) => {
              const userRole = snapshot.val().role
              
              if (userRole === pageRole || userRole === 'admin') {
                this.setState({ isAuthorized: true })
              } else {
                this.setState({ isAuthorized: false})
                navigate('/')
              }
            })
          } else {
            this.setState({ isAuthorized: false})
            navigate('/')
          }
        },
      )
    }

    componentWillUnmount() {
      this.listener()
    }

    render() {
      if (this.state.isAuthorized) {
        return (
          <Component {...this.props} authUser={ true } />
        )
      } else if (!isRestricted) {
        return (
          <Component {...this.props} />
        )
      } else {
        return null
      }
    }
  }

  return withFirebase(WithAuthorization)
}

export default withAuthorization