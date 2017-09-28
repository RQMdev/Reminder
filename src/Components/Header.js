import React, { Component } from 'react';

class Header extends Component {
	signOut(){
		this.props.signOut();
	}

	render(){
		return(
			<header>
			<div className="navbar-fixed">
	        <nav>
	            <div className="nav-wrapper navbar-fixed">
	                <img className="brand-logo" src="images/logo.svg" alt="" />
	                <ul className="right">
	                    <li><a href="" onClick={this.signOut.bind(this)}><i className="material-icons">power_settings_new</i></a></li>
	                </ul>
	            </div>
	        </nav>
			</div>
	    </header>
		);
	}
}

export default Header;
