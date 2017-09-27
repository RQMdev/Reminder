import React, { Component } from 'react';
import $ from 'jquery';
import Sticky from './Sticky';
import AddSticky from './AddSticky';


class Dashboard extends Component {
	onUpdate(updatedSticky){
		this.props.updateSticky(updatedSticky);
	}

	deleteSticky(sticky){
		this.props.onDelete(sticky);
	}

  handleAddNewSticky(newSticky){
    this.props.addNewSticky(newSticky);
  }
  
  toggleFormAddSticky(){
    $('.form-add-sticky').toggle();
    if ( $('#add-close-sticky').html()=== "add"){
      $('#add-close-sticky').html("close");  
    }else if( $('#add-close-sticky').html()=== "close"){
      $('#add-close-sticky').html("add");  
    }
  }

  

  render() {

    let stickys;
    if (this.props.stickys){
      stickys = this.props.stickys.map(sticky => {
        return (
          <Sticky updateSticky={this.onUpdate.bind(this)} onDelete={this.deleteSticky.bind(this)} key={sticky._id} sticky={sticky} />
        );
      });
    }
    return (
      <div>

   <div className="sticky-bloc container">
   <a className="align-center btn-addSticky btn-floating btn-large waves-effect waves-light red" onClick={this.toggleFormAddSticky}><i id="add-close-sticky"className="material-icons">add</i></a>
   <div className="row">
           <AddSticky addNewSticky={this.handleAddNewSticky.bind(this)} error={this.props.error}/>
           {stickys}
       </div>

   </div>
   


   </div>


    );
  }
}

export default Dashboard;
