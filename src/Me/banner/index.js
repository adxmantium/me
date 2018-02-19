// /src/banner/index.js

// libs
import React, { Component } from 'react'

// styles
import './../../styles/banner.scss'

// constants
const SOCIAL_ICONS = [
	{icon: 'fab fa-github', link: 'https://github.com/ajadams'},
	{icon: 'fab fa-instagram', link: 'https://www.instagram.com/adam.squared/'},
	{icon: 'fab fa-facebook', link: 'https://www.facebook.com/adam.adams.372'},
	{icon: 'fab fa-medium', link: 'https://medium.com/@ajadams10'},
	{icon: 'fas fa-camera', link: 'https://unsplash.com/@atom7dev'},
	{icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/adamadams10/'},
]

export default class Banner extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		return (
			<div id="banner">
				<div className="name">Adam Adams</div>
				<div className="quote">
					<div className="quotation left"><i className="fas fa-quote-left" /></div>
					<i>Survival can be summed up in three words - never give up. That's the heart of it really. Just keep trying.</i>
					<div className="quotation right"><i className="fas fa-quote-right" /></div>
					&nbsp;&nbsp; - Bear Grylls
				</div>
				<section></section>
				<div className="social">
					{ SOCIAL_ICONS.map(si => <SocialIcon key={si.icon} {...si} />) }	
				</div>
			</div>
		);
	}
}

const SocialIcon = ({ icon, link }) => (
	<a className="icon" href={link} target="_blank">
		<i className={icon} />
	</a>
)