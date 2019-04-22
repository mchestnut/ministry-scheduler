import React, { Component } from 'react';
import { withFirebase } from '../../firebase'

import FormLogin from '../form-login'

class PageLogin extends Component {
  render() {

    return (
      <main>
        <FormLogin />
      </main>
    )
  }
}

export default withFirebase(PageLogin);