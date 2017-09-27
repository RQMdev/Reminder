import React, { Component } from 'react';
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
   <a className="align-center btn-addSticky btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
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
