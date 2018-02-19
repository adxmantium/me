// /src/Me/codeUI/index.js

import React, { Component } from 'react'

// styles
import './../../styles/code.scss'

// constants
const SOCIAL = {
	github: 'https://github.com/ajadams',
	ig: 'https://www.instagram.com/adam.squared/',
	fb: 'https://www.facebook.com/adam.adams.372',
	medium: 'https://medium.com/@ajadams10',
	unsplash: 'https://unsplash.com/@atom7dev',
	in: 'https://www.linkedin.com/in/adamadams10/'
}

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
			code: 'Email: "ajadams@gmail.com"',
			codeClass: 'objProp'
		},
		{
			code: <div><a href={SOCIAL.github} target="_blank">Github</a>: "Check out my latest code here."</div>,
			codeClass: 'objProp'
		},
		{
			code: <div><a href={SOCIAL.ig} target="_blank">Instagram</a>: "This is where I like to share new things that I am doing."</div>,
			codeClass: 'objProp'
		},
		{
			code: <div><a href={SOCIAL.in} target="_blank">Linkedin</a>: "Check out out my professional experience here."</div>,
			codeClass: 'objProp'
		},
		{
			code: <div><a href={SOCIAL.fb} target="_blank">Facebook</a>: "Another place where you may contact me."</div>,
			codeClass: 'objProp'
		},
		{
			code: <div><a href={SOCIAL.unsplash} target="_blank">Unsplash</a>: "Sharing photos I take for others to freely use here."</div>,
			codeClass: 'objProp'
		},
		{
			code: <div><a href={SOCIAL.medium} target="_blank">Medium</a>: "I like to write about my interests here."</div>,
			codeClass: 'objProp'
		},	
	{
		code: <b>{'}}'}</b>,
		codeClass: 'prop'
	},

	// skills props
	{
		code: <span><span className="propname">{'Skills'}</span>{'={{'}</span>,
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
		code: '}}',
		codeClass: 'prop'
	},

	// projects
	{
		code: 'Projects={[',
		codeClass: 'prop'
	},
		{
			code: '{',
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
			code: '},',
			codeClass: 'objProp'
		},
		{
			code: '{',
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
			code: '}',
			codeClass: 'objProp'
		},
	{
		code: ']}',
		codeClass: 'prop'
	},

	// experience
	{
		code: 'Experience={[',
		codeClass: 'prop'
	},
		{
			code: '{',
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
			code: '},',
			codeClass: 'objProp'
		},
		{
			code: '{',
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
			code: '}',
			codeClass: 'objProp'
		},
	{
		code: ']}',
		codeClass: 'prop'
	},


	// end of component
	{
		code: "/>",
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