
import React, { Component } from 'react';
import withAuthorization from '../../authorization'

class PageProfile extends Component {
  render() {

    return (
      <main>
        <p>Profile page</p>
      </main>
    )
  }
}

export default withAuthorization('member', true)(PageProfile);