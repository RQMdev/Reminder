import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import $ from 'jquery';
import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      token: '',
      stickys: [],
			error: []
    }
  }

	componentDidMount = async () => {
		if(localStorage.getItem('token')){
			let token =  await localStorage.getItem('token');
			console.log(token);
			this.setState({token});
			console.log(this.state);
			this.getStickys();
		}

    if (this.state.token == '' && this.props.location.pathname === '/'){
    this.props.history.push('/signin');
    }
	}

  handleAddNewUser(user){
    console.log('User = ',user);
		this.cleanErrorInState();
    $.ajax({
      type: 'POST',
      url: 'users/signup',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: JSON.stringify(user),
      success: function(data){
				localStorage.setItem('token', data.token);
        this.setState({token: data.token});
        if (this.state.token !== ''){
        this.props.history.push('/');
        this.getStickys();
        }
        console.log('This.state = ', this.state);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('This is an error = ', err);
        console.log('This is the xhr = ', xhr);
        console.log('This is the status = ', status);
				this.addErrorToState(xhr);
      }.bind(this)
    });
  }

  handleAuthUser(user){
    console.log(user);
		this.cleanErrorInState();
    $.ajax({
      type: 'POST',
      url: 'users/signin',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: JSON.stringify(user),
      success: function(data){
				localStorage.setItem('token', data.token);
        this.setState({token: data.token});
        if (this.state.token !== ''){
        this.props.history.push('/');
        this.getStickys();
        }
        console.log('This.state = ', this.state);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('This is an error = ', err);
        console.log('This is the xhr = ', xhr);
        console.log('This is the status = ', status);
				this.addErrorToState(xhr);
      }.bind(this)
    });
  }

	handleSignOut(){
		let state = this.state;
		state.token = '';
		state.stickys = [];
		this.setState(state);
		this.props.history.push('/signin');
	}

  getStickys(){
    $.ajax({
      type: 'GET',
      url: 'stickys',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      beforeSend: function(xhr){
        xhr.setRequestHeader('Authorization', this.state.token);
      }.bind(this),
      success: function(stickys){
        this.setState({stickys});
        console.log('This.state = ', this.state);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('This is an error = ', err);
        console.log('This is the xhr = ', xhr);
        console.log('This is the status = ', status);
      }
    });
  }

  handleAddNewSticky(newSticky){
    console.log(newSticky);
		this.cleanErrorInState();
    $.ajax({
      type: 'POST',
      url: 'stickys/add',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: JSON.stringify(newSticky),
      beforeSend: function(xhr){
        xhr.setRequestHeader('Authorization', this.state.token);
      }.bind(this),
      success: function(newSticky){
        let stickys = this.state.stickys;
        stickys.push(newSticky);
        this.setState({stickys});
        console.log('This.state = ', this.state);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('This is an error = ', err);
        console.log('This is the xhr = ', xhr);
        console.log('This is the status = ', status);
				this.addErrorToState(xhr);
      }.bind(this)
    });
  }

	handleDeleteSticky(sticky){
		console.log(sticky);
		$.ajax({
      type: 'DELETE',
      url: 'stickys/delete',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: JSON.stringify(sticky),
      beforeSend: function(xhr){
        xhr.setRequestHeader('Authorization', this.state.token);
      }.bind(this),
      success: function(data){
        let stickys = this.state.stickys;
        let index = stickys.findIndex(x => x._id === sticky._id);
				stickys.splice(index, 1);
        this.setState({stickys});
        console.log('This.state = ', this.state);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('This is an error = ', err);
        console.log('This is the xhr = ', xhr);
        console.log('This is the status = ', status);
      }
    });
	}

	handleUpdateSticky(updatedSticky){
		console.log(updatedSticky);
		$.ajax({
      type: 'POST',
      url: 'stickys/edit',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: JSON.stringify(updatedSticky),
      beforeSend: function(xhr){
        xhr.setRequestHeader('Authorization', this.state.token);
      }.bind(this),
      success: function(data){
        let stickys = this.state.stickys;
        let index = stickys.findIndex(x => x._id === updatedSticky._id);
				console.log(index);
				stickys[index] = data;
        this.setState({stickys});
        console.log('This.state = ', this.state);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('This is an error = ', err);
        console.log('This is the xhr = ', xhr);
        console.log('This is the status = ', status);
      }
    });
	}

	cleanErrorInState(){
		let state = this.state;
		state.error = [];
		this.setState(state);
	}

	addErrorToState(xhr){

		let state = this.state;
		let error;
		if (xhr.responseJSON){
			if (xhr.responseJSON.details){
				error = xhr.responseJSON.details[0].message;
			} else if (xhr.responseJSON.error){
				error = xhr.responseJSON.error;
			}
		} else if (xhr.responseText){
			error = xhr.responseText;
			state.token = '';
		}
		state.error = [error];
		this.setState(state);
	}

  render() {
    return (
        <div className='app'>
					<Header signOut={this.handleSignOut.bind(this)}/>
          <Route  path="/signin" render={
            ()=><SignIn authUser={this.handleAuthUser.bind(this)} error={this.state.error}/>
          }/>
          <Route path="/signup" render={
            ()=><SignUp addNewUser={this.handleAddNewUser.bind(this)} error={this.state.error}/>
          } />
          <Route exact path="/" render={
            ()=><Dashboard stickys={this.state.stickys} updateSticky={this.handleUpdateSticky.bind(this)} onDelete={this.handleDeleteSticky.bind(this)} addNewSticky={this.handleAddNewSticky.bind(this)} error={this.state.error}/>
          } />
        </div>
    );
  }
}

export default withRouter(App);
