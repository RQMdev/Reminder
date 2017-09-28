import React, { Component } from 'react';
import ImportanceTag from './ImportanceTag';
import Error from './Error';
import $ from 'jquery';

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

	toggleFormEditSticky(){
		$(this.refs.formEdit).toggle();
	}

  render() {

		let errors;
  	if (this.props.error){
  		errors = this.props.error.map(error => {
  			return(
  				<Error key={error} error={error}/>
  			);
  		});
  	}

		console.log(this.state.updatedSticky);

    return (
			 <div className="col l4 m6 s12 ">
        <div className="sticky z-depth-3">
             <div className="sticky-header sticky z-depth-3">
                   <h3 className="sticky-title flow-text">{this.props.sticky.title}</h3>
                        <a onClick={this.toggleFormEditSticky.bind(this)}><i className="large material-icons waves-effect waves-light">edit</i></a>

                        <a href="" onClick={this.deleteSticky.bind(this, this.props.sticky)}><i className="large material-icons waves-effect waves-light ">close</i></a>
                    </div>
                    <p className="sticky-texte flow-text">{this.props.sticky.content}</p>
										<ImportanceTag importanceTag={this.props.sticky.priority}/>
                </div>


			<form className="sticky form-edit-sticky z-depth-3" ref="formEdit" onSubmit={this.handleSubmit.bind(this)}>
           <ul>
		   	 		 <h1 className="center flow-text">Modifier</h1>
            <li>
	           <label>Title</label><br />
	           <input type="text" ref="title" value={this.state.updatedSticky.title} onChange={this.handleChangeTitle.bind(this)}/>
            </li>
            <li>
             <label>Content</label><br />
               <input type="text" ref="content" value={this.state.updatedSticky.content} onChange={this.handleChangeContent.bind(this)}/>
            </li>
            <li>
               <label>Priorité</label><br />
              <input type="number" ref="priority" min="1" max="3" value={this.state.updatedSticky.priority} onChange={this.handleChangePriority.bind(this)}/>
             </li>
             <li>
							 {errors}
               <input className="btn-addSticky btn waves-effect waves-light"type="submit" value="Modifier" />
             </li>
         </ul>
        </form>




	</div>
    );
  }
}

export default Sticky;
