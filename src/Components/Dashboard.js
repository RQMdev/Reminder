import React, { Component } from 'react';
import Sticky from './Sticky';
import AddSticky from './AddSticky';

class Dashboard extends Component {
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
          <Sticky onDelete={this.deleteSticky.bind(this)} key={sticky._id} sticky={sticky} />
        );
      });
    }
    return (
      <div className="dashboard">
        <AddSticky addNewSticky={this.handleAddNewSticky.bind(this)} />
        {stickys}
      </div>
    );
  }
}

export default Dashboard;
