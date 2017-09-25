import React, { Component } from 'react';
import Sticky from './Sticky';
import AddSticky from './AddSticky';

class Dashboard extends Component {
  handleAddNewSticky(newSticky){
    this.props.addNewSticky(newSticky);
  }

  render() {
    let stickys;
    if (this.props.stickys){
      stickys = this.props.stickys.map(sticky => {
        return (
          <Sticky key={sticky._id} sticky={sticky} />
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
