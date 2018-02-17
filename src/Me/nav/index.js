// /Me/nav/index.js

// libbs
import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { setActiveNavItem } from './../../actions/me'

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

class NavIcon extends Component {
	constructor(props){
		super(props);
		this.state = {
			hovering: false,
		};
	}

	shouldComponentUpdate(np, ns){
		const { hovering } = this.state;
		const { hovering: next_hovering } = ns;

		const { active } = this.props;
		const { active: next_active } = np;

		return hovering !== next_hovering || active !== next_active;
	}

	render(){
		const { icon, name, active, onClick } = this.props;
		const { hovering } = this.state;

		return(
			<div 
				className={`item ${active ? 'active' : ''}`}
				onClick={ () => onClick(name) }
				onMouseEnter={ () => this.setState({hovering: true}) }
				onMouseLeave={ () => this.setState({hovering: false}) }>
					{ hovering && <div className="name">{ name }</div> }
					{ !hovering && <div><i className={`fas fa-${icon}`} /></div> }
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	_me: state._me,
})

export default connect(mapStateToProps)(Nav);