// /src/Me/codeUI/index.js

import React, { Component } from 'react'

// styles
import './../../styles/code.scss'

// constants
import { HelloWorld } from './../../constants/me'

export default class CodeUI extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div id="component">
				{ HelloWorld.map((hello, i) => <Grid key={hello.code} {...hello} count={i+1} />) }
			</div>
		)
	}
}

const Grid = ({ count, codeClass, code, standout }) => {
	return(
		<div className={`grid ${standout ? standout : ''}`}>
			<div className="lineCount">{ count }</div>
			<div className={`code ${codeClass ? codeClass : ''}`}>{ code }</div>
		</div>
	);
}