// /src/Me/codeUI/index.js

import React, { Component } from 'react'

// styles
import './../../styles/code.scss'

// constants
const SOCIAL = {
	gh: {name: 'Github', link: 'https://github.com/ajadams', icon: <i className='fab fa-github' />, text: '"Check out my latest code here."', hoverText: 'I currently have 3 pending side-projects that are not live yet.'},
	ig: {name: 'Instagram', link: 'https://www.instagram.com/adam.squared/', icon: <i className='fab fa-instagram' />, text: '"This is where I like to share new things that I am doing."', hoverText: 'Follow me here to see all my latest work related to my hobbies.'},
	fb: {name: 'Facebook', link: 'https://www.facebook.com/adam.adams.372', icon: <i className='fab fa-facebook' />, text: '"Another place where you may contact me."', hoverText: 'I check FB very rarely, but feel free to message me on Messenger.'},
	me: {name: 'Medium', link: 'https://medium.com/@ajadams10', icon: <i className='fab fa-medium' />, text: '"I like to write about my interests here."', hoverText: 'I currently have 4,000+ views on all of my Medium articles.'},
	un: {name: 'Unsplash', link: 'https://unsplash.com/@atom7dev', icon: <i className='fas fa-camera' />, text: '"Sharing photos I take for others to freely use here."', hoverText: 'I currently have 14,000+ views on all of my Unsplash photos.'},
	in: {name: 'Linkedin', link: 'https://www.linkedin.com/in/adamadams10/', icon: <i className='fab fa-linkedin' />, text: '"Check out out my professional experience here."', hoverText: 'I am currently open to new opportunities!'},
	em: {name: 'Email', link: 'mailto:ajadams10@gmail.com', icon: <i className='fas fa-envelope' />, text: '"Best way to contact me!"', hoverText: 'ajadams@gmail.com'},
	lo: {name: 'Location', link: 'https://www.google.com/maps/place/Walnut+Creek,+CA/@37.8942235,-122.0402229,13z/data=!3m1!4b1!4m5!3m4!1s0x808ff474197ba5f3:0xe06e49972003c36c!8m2!3d37.9100783!4d-122.0651819?hl=en', icon: <i className='fas fa-compass' />, text: '"Walnut Creek, CA"', hoverText: 'Walnut Creek, CA'},
}

const socialCode = ({ name, link, icon, text, hoverText }) => (
	<div className="social">
		<div className="name show">{ name }: { text }</div>
		<a className="icon showOnHover" href={link} target="_blank">{icon}  {hoverText || text}</a>
	</div>
)

const codeExplain = ({ code, explain }) => (
	<div className="explainer">
		<div className="codify show">{ code }</div>
		<div className="explain showOnHover">{ explain }</div>
	</div>	
)

const HelloWorld = [
	{
		code: codeExplain({
			code: <b className="propname componentName">{"<HelloWorld"}</b>,
			explain: "Hello, World! Welcome to my Developer portfolio :)"
		}),
		codeClass: 'startEnd'
	},
	{
		code: codeExplain({
			code: <span><span className="propname">{'Name'}</span>=<b className="myname">{'"Adam Adams"'}</b></span>,
			explain: <span>My name is <b className="myname">Adam Adams</b></span>
		}),
		codeClass: 'prop'
	},

	// contact prop
	{
		code: codeExplain({
			code: <span><span className="propname">{'Contact'}</span>=<b>{'{{'}</b></span>,
			explain: <span>The following items are my <b>Contact</b> information:</span>
		}),
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
		code: codeExplain({
			code: <span className="nohighlight"><b>{'}}'}</b></span>,
			explain: <span className="nohighlight"><b>{'}}'}</b> // End of <b>Contact</b> information.</span>
		}),
		codeClass: 'prop'
	},

	// social
	{
		code: codeExplain({
			code: <span><span className="propname">{'Social'}</span>=<b>{'{{'}</b></span>,
			explain: <span>The following items are my active <b>Social</b> media accounts:</span>
		}),
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
		code: codeExplain({
			code: <span className="nohighlight"><b>{'}}'}</b></span>,
			explain: <span className="nohighlight"><b>{'}}'}</b> // End of <b>Social</b> information.</span>
		}),
		codeClass: 'prop'
	},

	// skills props
	{
		code: codeExplain({
			code: <span><span className="propname">{'Skills'}</span>{'='}<b>{'{{'}</b></span>,
			explain: <span>The following items are a summary of my <b>Skills:</b></span>
		}),
		codeClass: 'prop'
	},
		{
			code: codeExplain({
				code: "HTML: 8/10",
				explain: "HTML: 8/10"
			}),
			codeClass: 'objProp'
		},
		{
			code: codeExplain({
				code: "CSS: 8/10",
				explain: "I always appreciate when I am greeted with a mobile-friendly webpage, so I have adopted the mobile-first design strategy. I have used frameworks like Bootstrap and Zurb Foundation, but I prefer to write my own CSS."
			}),
			codeClass: 'objProp'
		},
		{
			code: codeExplain({
				code: "JS: 8.5/10",
				explain: "I have experience with various JS libraries/frameworks/tools including React, React Native, Redux, NodeJS, and Socketio to name a few."
			}),
			codeClass: 'objProp'
		},
	{
		code: codeExplain({
			code: <span className="nohighlight"><b>{'}}'}</b></span>,
			explain: <span className="nohighlight"><b>{'}}'}</b> // End of <b>Skills</b> information.</span>
		}),
		codeClass: 'prop'
	},

	// projects
	{
		code: codeExplain({
			code: <span><span className="propname">{'Projects'}</span>{'='}<b>{'{['}</b></span>,
			explain: <span>The following items are a list of my recent <b>Projects</b>:</span>
		}),
		codeClass: 'prop'
	},
		{
			code: codeExplain({
				code: <span className="nohighlight">{'{'}</span>,
				explain: <span className="nohighlight">{'{'} // start of project 1</span>
			}),
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
			code: codeExplain({
				code: <span className="nohighlight">{'},'}</span>,
				explain: <span className="nohighlight">{'},'} // end of project 1</span>
			}),
			codeClass: 'objProp'
		},
		{
			code: codeExplain({
				code: <span className="nohighlight">{'{'}</span>,
				explain: <span className="nohighlight">{'{'} // start of project 2</span>
			}),
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
			code: codeExplain({
				code: <span className="nohighlight">{'}'}</span>,
				explain: <span className="nohighlight">{'}'} // end of project 2</span>
			}),
			codeClass: 'objProp'
		},
	{
		code: codeExplain({
			code: <span className="nohighlight"><b>{']}'}</b></span>,
			explain: <span className="nohighlight"><b>{']}'}</b> // end of <b>Projects</b> information.</span>
		}),
		codeClass: 'prop'
	},

	// experience
	{
		code: codeExplain({
			code: <span><span className="propname">{'Experience'}</span>{'='}<b>{'{['}</b></span>,
			explain: <span>The following items are a list of my recent work <b>Experience</b>:</span>
		}),
		codeClass: 'prop'
	},
		{
			code: codeExplain({
				code: <span className="nohighlight">{'{'}</span>,
				explain: <span className="nohighlight">{'{'} // start of experience 1</span>
			}),
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
			code: codeExplain({
				code: <span className="nohighlight">{'},'}</span>,
				explain: <span className="nohighlight">{'},'} // end of experience 1</span>
			}),
			codeClass: 'objProp'
		},
	{
		code: codeExplain({
			code: <span className="nohighlight"><b>{']}'}</b></span>,
			explain: <span className="nohighlight"><b>{']}'}</b> // end of <b>Experience</b> information.</span>
		}),
		codeClass: 'prop'
	},

	// education
	{
		code: codeExplain({
			code: <span><span className="propname">{'Education'}</span>{'='}<b>{'{{'}</b></span>,
			explain: <span>The following a summary of my <b>Education</b>:</span>
		}),
		codeClass: 'prop'
	},
		{
			code: 'School: "Arizona State University"',
			codeClass: 'objProp2'
		},
		{
			code: 'major: "Computer Information Systems"',
			codeClass: 'objProp2'
		},
		{
			code: 'Graduated: "2014"',
			codeClass: 'objProp2'
		},
		{
			code: 'didVolunteer: true',
			codeClass: 'objProp2'
		},
		{
			code: 'leadershipOpportunities: 2',
			codeClass: 'objProp2'
		},
	{
		code: codeExplain({
			code: <span className="nohighlight"><b>{'}}'}</b></span>,
			explain: <span className="nohighlight"><b>{'}}'}</b> // end of <b>Education</b> information.</span>
		}),
		codeClass: 'prop'
	},

	// end of component
	{
		code: codeExplain({
			code: <b className="propname componentName">{"/>"}</b>,
			explain: <span><b>{"/>"}</b> // end of my <b>Portfolio. </b>Thank you for indulging me :)</span>
		}),
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