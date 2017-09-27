import React, { Component } from 'react';
import $ from 'jquery';
import Error from './Error';
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
	
	hideFormAddSticky(){
    $('.form-add-sticky').hide();
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
			 <a href=""><i onClick={this.hideFormAddSticky} className="waves-effect waves-light large material-icons ">close</i></a>
	       <h1 className="flow-text">Ajouter un sticky</h1>
	       <div className="input-field col s12">
	         <input id="titre" type="text" className="validate" ref="title" />
	         <label forHtml="titre" >Titre</label>
	       </div>
	       <div className="input-field col s12">
	         <input id="content" type="text" className="validate" ref="content"/>
	         <label forHtml="email" >Contenu</label>
	       </div>
	       <div className="input-field col s12">
	       <label forHtml="priority">Priority</label><br />
	       <input type="number" ref="priority" />
	       {errors}
	       <input onClick={this.hideFormAddSticky} className=" btn-addSticky btn waves-effect waves-light col s6 offset-s3"type="submit" value="Ajouter" />
	     </div>
	  	</div>

	  </form>
  </div>




    );
  }
}

export default AddSticky;
