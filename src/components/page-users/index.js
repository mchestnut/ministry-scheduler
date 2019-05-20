import React, { Component } from 'react';
import withAuthorization from '../../authorization'

class PageUsers extends Component {
  render() {

    return (
      <main>
        <p>Users page</p>
      </main>
    )
  }
}

export default withAuthorization('admin', true)(PageUsers);