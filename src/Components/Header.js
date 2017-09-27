import React, { Component } from 'react';

class Header extends Component {


	render(){
		return(
			<header>
	        <nav>
	            <div className="nav-wrapper">
	                <img className="brand-logo" src="images/logo.svg" alt="" />
	                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
	                <ul className="right hide-on-med-and-down">
	                    <li><a href="#"><i className="material-icons">power_settings_new</i></a></li>
	                </ul>
	                <ul className="side-nav" id="mobile-demo">
	                    <li><a href="#"><i className="material-icons">power_settings_new</i>Se déconnecter</a></li>
	                </ul>
	            </div>
	        </nav>
	    </header>
		);
	}
}

export default Header;
