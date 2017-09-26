import React, { Component } from 'react';

class Sticky extends Component {
	constructor(){
		super();
		this.state = {updatedSticky:
			{
				title: '',
				content: '',
				priority: 1,
				date: '',
				userId: '',
				__v: '',
				_id: ''
			}
		}
	}

	componentWillMount(){
		this.setState({updatedSticky:
			{
				title: this.props.sticky.title,
				content: this.props.sticky.content,
				priority: this.props.sticky.priority,
				date: this.props.sticky.date,
				userId: this.props.sticky.userId,
				__v: this.props.sticky.__v,
				_id: this.props.sticky._id
			}
		});
	}

	handleChangeTitle(event){
		let updatedSticky = this.state.updatedSticky;
		updatedSticky.title = event.target.value;
		this.setState({updatedSticky});
	}

	handleChangeContent(event){
		let updatedSticky = this.state.updatedSticky;
		updatedSticky.content = event.target.value;
		this.setState({updatedSticky});
	}

	handleChangePriority(event){
		let updatedSticky = this.state.updatedSticky;
		updatedSticky.priority = event.target.value;
		this.setState({updatedSticky});
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.updatedSticky);
		this.props.updateSticky(this.state.updatedSticky);
	}

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
				<form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <label>Title</label><br />
              <input type="text" ref="title" value={this.state.updatedSticky.title} onChange={this.handleChangeTitle.bind(this)}/>
            </li>
            <li>
              <label>Content</label><br />
              <input type="text" ref="content" value={this.state.updatedSticky.content} onChange={this.handleChangeContent.bind(this)}/>
            </li>
            <li>
              <label>Priority</label><br />
              <input type="number" ref="priority" value={this.state.updatedSticky.priority} onChange={this.handleChangePriority.bind(this)}/>
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

export default Sticky;
