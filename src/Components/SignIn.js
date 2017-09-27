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

         <div className="col l6">

            <h1 className="flow-text center-align">Révolutionner le monde des penses bêtes</h1>
      
                      <ul className="center-align flow-text">
                          <li>Une inscription rapide</li>
                          <li>Une application gratuite</li>
                          <li>Accessible sur tous vos supports</li>
                          <li><a className="waves-effect waves-light btn btn-intro "> <Link to="/signup">Créer un compte maintenant </Link> </a></li>
                      </ul>
        </div>

          <div className="col l6">
       <div className="sign-in">
         <div className="form-login  z-depth-3 row">
          <img className="responsive-img logo-form" src="images/logo-min.png" alt="" />
          <h3 className="center-align">Se connecter à Reminder</h3>
         
          
          <form className="col s12" method="post" onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <div className="input-field col s12">
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
                  <label className="forgot">Mot de passe oublié? </label>
            </li>
           
            <li>
							{errors}
              <div className="row">
                    <button type='submit' name='btn_login' className="col s12 btn btn-large waves-effect form-login-btn"><Link to="/dashboard">Se connecter</Link></button>
              </div>
              
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
