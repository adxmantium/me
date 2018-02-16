// /src/Me/index.js

// libs
import React, { Component } from 'react'

const navIcons = [
	{name: 'Me', icon: 'home'},
	{name: 'Experience', icon: 'briefcase'},
	{name: 'Skills', icon: 'dumbbell'},
	{name: 'Projects', icon: 'flask'},
	{name: 'Contact', icon: 'address-card'}
];

class Me extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeIcon: 'Me',
		}
	}

	render(){
		return (
			<div id="mainContainer">
				<nav>
					{ navIcons.map(ic => <NavIcon key={ic.icon} {...ic} />) }
				</nav>
			</div>
		);
	}
}

const NavIcon = ({ icon, name }) => (
	<div>
		<i class={`fas fa-${icon}`} />
		<div>{ name }</div>
	</div>
)

export default Me;