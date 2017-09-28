import React, { Component } from 'react';

import Error from './Error';
class AddSticky extends Component {
  constructor(){
    super();
    this.state = {
      newSticky: {
				title: '',
				content: '',
				priority: 3
			}
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
    let errors;
  	if (this.props.error){
  		errors = this.props.error.map(error => {
  			return(
  				<Error key={error} error={error}/>
  			);
  		});
  	}

    return (
   <div className="row">
	   <form onSubmit={this.handleSubmit.bind(this)} className="form-add-sticky col l4 m5 offset-l4 offset-m4 z-depth-4">
	     <div className="row">
	       <h1 className="center flow-text">Ajouter un sticky</h1>
	       <div className="input-field col s12">
	         <input id="titre" type="text" className="validate" ref="title" />
	         <label htmlFor="titre" >Titre</label>
	       </div>
	       <div className="input-field col s12">
	         <input id="content" type="text" className="validate" ref="content"/>
	         <label htmlFor="email" >Contenu</label>
	       </div>
	       <div className="input-field col s12">
	       <label htmlFor="priority">Priorité</label><br />
	       <input type="number" ref="priority" min="1" max="3" />
	       {errors}
	       <input className=" btn-addSticky btn waves-effect waves-light col s6 offset-s3"type="submit" value="Ajouter" />
	     </div>
	  	</div>

	  </form>
  </div>




    );
  }
}

export default AddSticky;
