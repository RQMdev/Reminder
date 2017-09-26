import React, { Component } from 'react';

class Sticky extends Component {
	deleteSticky(sticky){
		this.props.onDelete(sticky);
	}

  render() {
    return (
      <div className="sticky">
        <div className="title">{this.props.sticky.title}</div>
        <div className="content">{this.props.sticky.content}</div>
        <div className="priority">{this.props.sticky.priority}</div>
				<a href="#" onClick={this.deleteSticky.bind(this, this.props.sticky)}>X</a>
      </div>
    );
  }
}

export default Sticky;
