// /src/Me/index.js

// libs
import React, { Component } from 'react'

// components
import CodeUI from './codeUI'

// styles
import './../styles/main.scss'

export default class Me extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return ( <CodeUI /> );
	}
}


