import React, { Component } from 'react';
import { withFirebase } from '../../firebase'

class PageLogin extends Component {
  render() {

    return (
      <main>
        <p>Login page</p>
      </main>
    )
  }
}

export default withFirebase(PageLogin);