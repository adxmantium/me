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
			<main id="editor">
				{ HelloWorld.map((hello, i) => <Grid key={hello.code} {...hello} count={i+1} />) }
			</main>
		)
	}
}

const Grid = ({ count, codeClass, code, standout }) => {
	return(
		<section className={`grid ${standout ? standout : ''}`}>
			<div className="lineCount">{ count }</div>
			<div className={`code ${codeClass ? codeClass : ''}`}>{ code }</div>
		</section>
	);
}