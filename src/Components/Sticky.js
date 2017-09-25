import React, { Component } from 'react';

class Sticky extends Component {
  render() {
    return (
      <div className="sticky">
        <div className="title">{this.props.sticky.title}</div>
        <div className="content">{this.props.sticky.content}</div>
        <div className="priority">{this.props.sticky.priority}</div>
      </div>
    );
  }
}

export default Sticky;
