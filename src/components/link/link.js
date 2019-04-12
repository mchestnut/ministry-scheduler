import React, { Component } from 'react';

class Link extends Component {
  render() {
    const onClick = (e) => {
      e.preventDefault();
      window.history.pushState(null, null, this.props.to);
      window.dispatchEvent(new window.PopStateEvent('popstate'));
    }

    return (
      <a
        href={ this.props.to }
        onClick={ onClick }
        className={ this.props.className }>
          { this.props.children }
      </a>
    )
  }
}

export default Link;