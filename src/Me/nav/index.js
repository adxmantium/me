// /Me/nav/index.js

// libbs
import React, { Component } from 'react'
import { connect } from 'react-redux'

// styles
import './../../styles/nav.scss'

// constants
const navIcons = [
	{name: 'Me', icon: 'home'},
	{name: 'Experience', icon: 'briefcase'},
	{name: 'Skills', icon: 'list-ul'},
	{name: 'Projects', icon: 'flask'},
	{name: 'Contact', icon: 'address-card'}
];

class Nav extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	_onClick = name => this.props.dispatch( setActiveNavItem(name) )

	render(){
		const { activeNavItem } = this.props._me;

		return (
			<nav>
				<div className="line" />

				<div className="grid">
					{ navIcons.map(ic => <NavIcon 
											key={ic.icon} 
											{...ic} 
											active={ic.name === activeNavItem}
											onClick={this._onClick} />) }
				</div>
			</nav>
		)
	}
}

const NavIcon = ({ icon, name, onClick }) => (
	<div className="item" onClick={ onClick }>
		<i className={`fas fa-${icon}`} />
		<div className="name">{ name }</div>
	</div>
)

const mapStateToProps = (state, props) => ({
	_me: state._me,
})

export default connect(mapStateToProps)(Nav);