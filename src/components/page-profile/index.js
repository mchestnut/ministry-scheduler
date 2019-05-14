
import React, { Component } from 'react';
import { withFirebase } from '../../firebase'

class PageProfile extends Component {
  render() {

    return (
      <main>
        <p>Profile page</p>
      </main>
    )
  }
}

export default withFirebase(PageProfile);