import React, { Component } from 'react';
import Error from './Error';
import { Link } from 'react-router-dom';

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
		let errors;
		if (this.props.error){
			errors = this.props.error.map(error => {
				return(
					<Error key={error} error={error}/>
				);
			});
		}

    return (
    <div>
     
      <div className="intro container z-depth-3"> 
        
        <div className="row">

         <div className="col l6 col l6 m8 offset-m2">

            <h1 className="title"> Reminder </h1>

              <h2 className="center-align text"> L'application de pense-bêtes pour vous simplifier la vie.</h2>
      
                      <ul className="center-align flow-text ">
                          <li><i className="medium material-icons valign-wrapper icones">account_box</i>Une inscription gratuite</li>
                          <li><i className="medium material-icons valign-wrapper icones">content_paste</i>Une prise en main rapide </li>
                          <li><i className="medium material-icons valign-wrapper">devices</i>Accessible sur tous vos supports </li>
                          <li><a className="waves-effect waves-light btn btn-intro "> <Link to="/signup">Créer un compte maintenant </Link> </a></li>
                      </ul>
        </div>

      <div className="col l6 col l6 m8 offset-m2">
       <div className="sign-in">
         <div className="form-login  z-depth-3">
          <img className="responsive-img logo-form" src="images/logo-min.png" alt="" />
          <h3 className="center-align title ">Se connecter à Reminder</h3>
         
          
          <form className="col s12" method="post" onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <div className="input-field col s12 ">
                <label>Username ou adresse email </label><br />
                <input type="text" ref="email" />
              </div>
            </li>
            <li>
              <div className="input-field col s12">
                <label>Entrer votre mot de passe </label><br />
                <input type="password" ref="password" />
              </div>
            </li>

            <li>
							{errors}
              <div className="row">
                    <button type='submit' name='btn_login' className="col s12 btn waves-effect form-login-btn">Se connecter</button>
              </div>
            </li>

            <li> 
                  <label className="forgot"> <Link to="/signup">Mot de passe oublié ? </Link></label>
            </li>

          </ul>
        </form>

      </div>
    </div>
  </div>

</div>
</div>
</div>
    );
  }
}
 
export default SignIn;
