import React, { Component } from 'react';

class AddSticky extends Component {
  constructor(){
    super();
    this.state = {
      newSticky: {}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let priority = parseInt(this.refs.priority.value, 10);
    this.setState({newSticky:{
      title: this.refs.title.value,
      content: this.refs.content.value,
      priority: priority
    }}, function(){
      this.props.addNewSticky(this.state.newSticky);
    });
  }

  render() {
    return (
      <div className="add-sticky">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <label>Title</label><br />
              <input type="text" ref="title" />
            </li>
            <li>
              <label>Content</label><br />
              <input type="text" ref="content" />
            </li>
            <li>
              <label>Priority</label><br />
              <input type="number" ref="priority" />
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default AddSticky;
