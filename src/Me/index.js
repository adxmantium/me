// /src/Me/index.js

// libs
import React, { Component } from 'react'

// components
import Nav from './nav'

export default class Me extends Component {
	constructor(props){
		super(props);
		
	}

	render(){
		return (
			<div id="mainContainer">
				<Nav />
			</div>
		);
	}
}
