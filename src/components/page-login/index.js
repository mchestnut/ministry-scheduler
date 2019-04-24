import React, { Component } from 'react';
import { withFirebase } from '../../firebase'

import Container from '../container'
import FormLogin from '../form-login'

class PageLogin extends Component {
  constructor(props) {
    super(props)

    if (props.location && props.location.state && props.location.state.from) {
      this.target = props.location.state.from
    } else {
      this.target = '/'
    }
  }

  render() {

    return (
      <Container>
        <FormLogin target={ this.target } />
      </Container>
    )
  }
}

export default withFirebase(PageLogin);