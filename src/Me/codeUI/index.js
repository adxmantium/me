// /src/Me/codeUI/index.js

import React, { Component } from 'react'

// styles
import './../../styles/code.scss'

// constants
const SOCIAL = {
	gh: {name: 'Github', link: 'https://github.com/ajadams', icon: <i className='fab fa-github' />, text: '"Check out my latest code here."'},
	ig: {name: 'Instagram', link: 'https://www.instagram.com/adam.squared/', icon: <i className='fab fa-instagram' />, text: '"This is where I like to share new things that I am doing."'},
	fb: {name: 'Facebook', link: 'https://www.facebook.com/adam.adams.372', icon: <i className='fab fa-facebook' />, text: '"Another place where you may contact me."'},
	me: {name: 'Medium', link: 'https://medium.com/@ajadams10', icon: <i className='fab fa-medium' />, text: '"I like to write about my interests here."'},
	un: {name: 'Unsplash', link: 'https://unsplash.com/@atom7dev', icon: <i className='fas fa-camera' />, text: '"Sharing photos I take for others to freely use here."'},
	in: {name: 'Linkedin', link: 'https://www.linkedin.com/in/adamadams10/', icon: <i className='fab fa-linkedin' />, text: '"Check out out my professional experience here."'},
	em: {name: 'Email', link: '', icon: <i className='fas fa-envelope' />, text: '"ajadams@gmail.com"'},
	lo: {name: 'Location', link: '', icon: <i className='fas fa-map-marker' />, text: '"Walnut Creek, CA"'},
}

const socialCode = ({ name, link, icon, text }) => (
	<div className="social">
		<div className="name">{ name }: { text }</div>
		<a className="icon" href={link} target="_blank">{icon} : {text}</a>
	</div>
)

const HelloWorld = [
	{
		code: <b className="propname componentName">{"<HelloWorld"}</b>,
		codeClass: 'startEnd'
	},
	{
		code: <span><span className="propname">{'Name'}</span>=<b className="myname">{'"Adam Adams"'}</b></span>,
		codeClass: 'prop'
	},

	// contact prop
	{
		code: <span><span className="propname">{'Contact'}</span>=<b>{'{{'}</b></span>,
		codeClass: 'prop'
	},
		{
			code: socialCode(SOCIAL.em),
			codeClass: 'objProp'
		},
		{
			code: socialCode(SOCIAL.lo),
			codeClass: 'objProp'
		},
	{
		code: <span className="nohighlight"><b>{'}}'}</b></span>,
		codeClass: 'prop'
	},

	// social
	{
		code: <span><span className="propname">{'Social'}</span>=<b>{'{{'}</b></span>,
		codeClass: 'prop'
	},
		{
			code: socialCode(SOCIAL.gh),
			codeClass: 'objProp'
		},
		{
			code: socialCode(SOCIAL.ig),
			codeClass: 'objProp'
		},
		{
			code: socialCode(SOCIAL.in),
			codeClass: 'objProp'
		},
		{
			code: socialCode(SOCIAL.fb),
			codeClass: 'objProp'
		},
		{
			code: socialCode(SOCIAL.un),
			codeClass: 'objProp'
		},
		{
			code: socialCode(SOCIAL.me),
			codeClass: 'objProp'
		},	
	{
		code: <span className="nohighlight"><b>{'}}'}</b></span>,
		codeClass: 'prop'
	},

	// skills props
	{
		code: <span><span className="propname">{'Skills'}</span>{'='}<b>{'{{'}</b></span>,
		codeClass: 'prop'
	},
		{
			code: "HTML: 8/10",
			codeClass: 'objProp'
		},
		{
			code: "CSS: 8/10",
			codeClass: 'objProp'
		},
		{
			code: "JS: 8.5/10",
			codeClass: 'objProp'
		},
	{
		code: <span className="nohighlight"><b>{'}}'}</b></span>,
		codeClass: 'prop'
	},

	// projects
	{
		code: <span><span className="propname">{'Projects'}</span>{'='}<b>{'{['}</b></span>,
		codeClass: 'prop'
	},
		{
			code: <span className="nohighlight">{'{'}</span>,
			codeClass: 'objProp'
		},
			{
				code: 'name: "SnowboardSizer"',
				codeClass: 'objProp2'
			},
			{
				code: 'toolsUsed: "React Native, Android Studio, Xcode"',
				codeClass: 'objProp2'
			},
			{
				code: 'whereCanIFind: "iOS/Android app stores"',
				codeClass: 'objProp2'
			},
		{
			code: <span className="nohighlight">{'},'}</span>,
			codeClass: 'objProp'
		},
		{
			code: <span className="nohighlight">{'{'}</span>,
			codeClass: 'objProp'
		},
			{
				code: 'name: "WakeMe"',
				codeClass: 'objProp2'
			},
			{
				code: 'toolsUsed: "React Native, Android Studio, Xcode, AWS(Lambda, DB, S3), Serverless Framework, and OneSignal"',
				codeClass: 'objProp2'
			},
			{
				code: 'whereCanIFind: "iOS/Android app stores"',
				codeClass: 'objProp2'
			},
		{
			code: <span className="nohighlight">{'}'}</span>,
			codeClass: 'objProp'
		},
	{
		code: <span className="nohighlight"><b>{']}'}</b></span>,
		codeClass: 'prop'
	},

	// experience
	{
		code: <span><span className="propname">{'Experience'}</span>{'='}<b>{'{['}</b></span>,
		codeClass: 'prop'
	},
		{
			code: <span className="nohighlight">{'{'}</span>,
			codeClass: 'objProp'
		},
			{
				code: 'company: "Plexuss"',
				codeClass: 'objProp2'
			},
			{
				code: 'role: "Software Engineer"',
				codeClass: 'objProp2'
			},
			{
				code: 'when: "2014 - Present"',
				codeClass: 'objProp2'
			},
			{
				code: 'summary: "Though we don\'t exactly have concrete titles,',
				codeClass: 'objProp2'
			},
			{
				code: 'I consider myself a full stack developer here."',
				codeClass: 'objProp2'
			},
		{
			code: <span className="nohighlight">{'},'}</span>,
			codeClass: 'objProp'
		},
		{
			code: <span className="nohighlight">{'{'}</span>,
			codeClass: 'objProp'
		},
			{
				code: 'company: "Cognizant Technology Solutions"',
				codeClass: 'objProp2'
			},
			{
				code: 'role: "Performace Test Engineer"',
				codeClass: 'objProp2'
			},
			{
				code: 'when: "June - December 2014"',
				codeClass: 'objProp2'
			},
			{
				code: 'summary: "',
				codeClass: 'objProp2'
			},
			{
				code: 'I consider myself a full stack developer here."',
				codeClass: 'objProp2'
			},
		{
			code: <span className="nohighlight">{'}'}</span>,
			codeClass: 'objProp'
		},
	{
		code: <span className="nohighlight"><b>{']}'}</b></span>,
		codeClass: 'prop'
	},


	// end of component
	{
		code: <b className="propname componentName">{"/>"}</b>,
	},
]

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

const Grid = ({ countClass, count, codeClass, code }) => {
	return(
		<div className="grid">
			<div className={`lineCount ${countClass ? countClass : ''}`}>{ count }</div>
			<div className={`code ${codeClass ? codeClass : ''}`}>{ code }</div>
		</div>
	);
}