import React, { Component } from 'react';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      newUser: {}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({newUser:{
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }}, function(){
      this.props.addNewUser(this.state.newUser);
    });
  }

  render() {
    return (
      <div className="sign-up">
        <h2>SIGN UP FORM</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <label>Username</label><br />
              <input type="text" ref="username" />
            </li>
            <li>
              <label>Email</label><br />
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

export default SignUp;
