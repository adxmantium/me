// /Me/nav/index.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

const navIcons = [
	{name: 'Me', icon: 'home'},
	{name: 'Experience', icon: 'briefcase'},
	{name: 'Skills', icon: 'dumbbell'},
	{name: 'Projects', icon: 'flask'},
	{name: 'Contact', icon: 'address-card'}
];

class Nav extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeIcon: 'Me',
		}
	}

	_onClick = name => this.props.dispatch( setActiveNavItem(name) )

	render(){
		const { activeNavItem } = this.props._me;

		return (
			<nav>
				{ navIcons.map(ic => <NavIcon 
										key={ic.icon} 
										{...ic} 
										active={ic.name === activeNavItem}
										onClick={this._onClick} />) }
			</nav>
		)
	}
}

const NavIcon = ({ icon, name, onClick }) => (
	<div onClick={ onClick }>
		<i class={`fas fa-${icon}`} />
		<div>{ name }</div>
	</div>
)

const mapStateToProps = (state, props) => ({
	_me: state.me,
})

export default connect(mapStateToProps)(Nav);