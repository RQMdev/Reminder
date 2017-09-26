import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
     <div>
     <div className=" form-register container">
    <div className="row">
 
        <div className="col l6 m6 offset-m3 offset-l3 s12  z-depth-4 card-panel">
            <form onSubmit={this.handleSubmit.bind(this)} className="register-form">
                <div className="row">
                    <div className="input-field col s12 center">
                        <img className="responsive-img logo-form" src="images/logo-min.png" alt="" />
                        <h4>Inscription</h4>
                    </div>
                </div>
                <div className="row margin">
                    <div className=" input-field col s10">
                        <i className="mdi-social-person-outline prefix"></i>
                        <input id="username" type="text" ref="username" />
                        <label htmlFor="username" className="center-align">Pseudo</label>
                    </div>
                </div>
                <div className="row margin">
                    <div className="input-field col s10">
                        <i className="mdi-communication-email prefix"></i>
                        <input id="email" type="email" ref="email"/>
                        <label htmlFor="email" class="center-align">Email</label>
                    </div>
                </div>
                <div className="row margin">
                    <div className="input-field col s10">
                        <i className="mdi-action-lock-outline prefix"></i>
                        <input id="password" type="password" ref="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                <div className="input-field col s12">
                <input className="btn waves-effect waves-light col s12 "type="submit" value="S'enregistrer" />
                </div>
               
                <div className="input-field  col s12">
                    <p className="margin center medium-small sign-up">Vous avez déja un compte?  <Link to="/signin" >Se connecter</Link></p>
                </div>
            </div>

           </form>
        </div>
    
    </div>
</div>
</div>
    );
  }
}

export default SignUp;
