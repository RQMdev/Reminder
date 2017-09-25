import React, { Component } from 'react';

class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({user:{
      email: this.refs.email.value,
      password: this.refs.password.value
    }}, function(){
      this.props.authUser(this.state.user);
    });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>SIGN IN FORM</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <label>Username or Email</label><br />
              <input type="text" ref="email" />
            </li>
            <li>
              <label>Password</label><br />
              <input type="text" ref="password" />
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

export default SignIn;
