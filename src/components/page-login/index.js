import React, { Component } from 'react';
import { withFirebase } from '../../firebase'

import Container from '../container'
import FormLogin from '../form-login'

class PageLogin extends Component {
  render() {

    return (
      <Container>
        <FormLogin />
      </Container>
    )
  }
}

export default withFirebase(PageLogin);