import React, { Component } from 'react';

class ImportanceTag extends Component {


	render(){
		let importanceTag;
		if (this.props.importanceTag){
			if (this.props.importanceTag === 3){
				importanceTag = <div className="importance-tag green-tag"></div>;
			} else if (this.props.importanceTag === 2){
				importanceTag = <div className="importance-tag orange-tag"></div>;
			} else if (this.props.importanceTag === 1){
				importanceTag = <div className="importance-tag red-tag"></div>;
			}
		}

		return(
			<div>
				{importanceTag}
			</div>
		);
	}
}

export default ImportanceTag;
