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
			 <div className="col l4 m6 s12 ">
        <div className="sticky z-depth-3">
             <div className="sticky-header sticky z-depth-3">
                   <h3 className="sticky-title flow-text">{this.props.sticky.title}</h3>
                        <a href="" ><i className="large material-icons">edit</i></a>

                        <a href="" onClick={this.deleteSticky.bind(this, this.props.sticky)}><i className="large material-icons ">close</i></a>
                    </div>
                    <p className="sticky-texte flow-text">{this.props.sticky.content}</p>
                </div>
								</div>
    );
  }
}

export default Sticky;
