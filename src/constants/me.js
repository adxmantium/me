// /constants/me.js

import React from 'react'

export const SET_NAV_ITEM = 'SET_NAV_ITEM'

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

const openingComponent = {
	code: codeExplain({
		code: <b className="propname componentName">{"<HelloWorld"}</b>,
		explain: "Hello, World! Welcome to my Developer portfolio :)"
	}),
	codeClass: 'startEnd'
}

const nameComponent = {
	code: codeExplain({
		code: <span><span className="propname">{'Name'}</span>=<b className="myname">{'"Adam Adams"'}</b></span>,
		explain: <span>My name is <b className="myname">Adam Adams</b></span>
	}),
	codeClass: 'prop',
}

// contact prop
const contactComponents = [
	{
		code: codeExplain({
			code: <span><span className="propname">{'Contact'}</span>=<b>{'{{'}</b></span>,
			explain: <span>The following items are my <b>Contact</b> information:</span>
		}),
		codeClass: 'prop',
		standout: 'standout'
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
	}
]

// social
const socialComponents = [
	{
		code: codeExplain({
			code: <span><span className="propname">{'Social'}</span>=<b>{'{{'}</b></span>,
			explain: <span>The following items are my active <b>Social</b> media accounts:</span>
		}),
		codeClass: 'prop',
		standout: 'standout'
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
	}
]

// skills props
const skillsComponents = [
	{
		code: codeExplain({
			code: <span><span className="propname">{'Skills'}</span>{'='}<b>{'{{'}</b></span>,
			explain: <span>The following items are a summary of my <b>Skills:</b></span>
		}),
		codeClass: 'prop',
		standout: 'standout'
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
				code: "PHP: 7/10",
				explain: "NodeJS is my preferred backend technology, but PHP is no stranger to me. The Laravel framework makes PHP development a breeze."
			}),
			codeClass: 'objProp'
		},
	{
		code: codeExplain({
			code: <span className="nohighlight"><b>{'}}'}</b></span>,
			explain: <span className="nohighlight"><b>{'}}'}</b> // End of <b>Skills</b> information.</span>
		}),
		codeClass: 'prop'
	}
]

// projects
const projectComponents = [
	{
		code: codeExplain({
			code: <span><span className="propname">{'Projects'}</span>{'='}<b>{'{['}</b></span>,
			explain: <span>The following items are a list of my recent <b>Projects</b>:</span>
		}),
		codeClass: 'prop',
		standout: 'standout'
	},
		{
			code: codeExplain({
				code: <span className="nohighlight">{'{'}</span>,
				explain: <span className="nohighlight">{'{'} // start of project 1</span>
			}),
			codeClass: 'objProp'
		},
			{
				code: codeExplain({
					code: 'name: "SnowboardSizer"',
					explain: 'This app helps beginner snowboard shoppers find the right snowboard size for them.'
				}),
				codeClass: 'objProp2'
			},
			{
				code: codeExplain({
					code: 'toolsList: ["React Native", "Android Studio", "Xcode"]',
					explain: 'This app was intended to be very lightweight. I did not use any outside libraries, just the built-in components.'
				}),
				codeClass: 'objProp2'
			},
			{
				code: codeExplain({
					code: 'platforms: ["iOS", "Android"]',
					explain: <span>Find here: <a href="https://itunes.apple.com/us/app/snowboardsizer/id1329300217?ls=1&mt=8">App Store</a> and <a href="https://play.google.com/store/apps/details?id=com.snowboardsizer">Play Store</a></span>
				}),
				codeClass: 'objProp2'
			},
		{
			code: codeExplain({
				code: <span className="nohighlight">{'},'}</span>,
				explain: <span className="nohighlight">{'},'} // end of project 1</span>
			}),
			codeClass: 'objProp'
		},
		// {
		// 	code: codeExplain({
		// 		code: <span className="nohighlight">{'{'}</span>,
		// 		explain: <span className="nohighlight">{'{'} // start of project 2</span>
		// 	}),
		// 	codeClass: 'objProp'
		// },
		// 	{
		// 		code: codeExplain({
		// 			code: 'name: "WakeMe"',
		// 			explain: 'WakeMe is where an alarm app meets Snapchat. You can send pics/vids to friends, but they cannot view them until the next morning when their alarm goes off.'
		// 		}),
		// 		codeClass: 'objProp2'
		// 	},
		// 	{
		// 		code: codeExplain({
		// 			code: 'toolsUsed: ["React Native", "Android Studio", "Xcode", "AWS(Lambda, DB, S3)", "Serverless Framework", "OneSignal"]',
		// 			explain: "I used this project to experiment with a serverless architecture using AWS technology and the Serverless Framework to build efficient APIs. OneSignal is the platform I used to send push notifications to devices."
		// 		}),
		// 		codeClass: 'objProp2'
		// 	},
		// 	{
		// 		code: codeExplain({
		// 			code: 'platforms: ["iOS", "Android"]',
		// 			explain: <span>Find here: <a href="">App Store</a> and <a href="">Play Store</a></span>
		// 		}),
		// 		codeClass: 'objProp2'
		// 	},
		// {
		// 	code: codeExplain({
		// 		code: <span className="nohighlight">{'}'}</span>,
		// 		explain: <span className="nohighlight">{'}'} // end of project 2</span>
		// 	}),
		// 	codeClass: 'objProp'
		// },
	{
		code: codeExplain({
			code: <span className="nohighlight"><b>{']}'}</b></span>,
			explain: <span className="nohighlight"><b>{']}'}</b> // end of <b>Projects</b> information.</span>
		}),
		codeClass: 'prop'
	}
]

// experience
const experienceComponents = [
	{
		code: codeExplain({
			code: <span><span className="propname">{'Experience'}</span>{'='}<b>{'{['}</b></span>,
			explain: <span>The following items are a list of my recent work <b>Experience</b>:</span>
		}),
		codeClass: 'prop',
		standout: 'standout'
	},
		{
			code: codeExplain({
				code: <span className="nohighlight">{'{'}</span>,
				explain: <span className="nohighlight">{'{'} // start of experience 1</span>
			}),
			codeClass: 'objProp'
		},
			{
				code: codeExplain({
					code: 'company: "Plexuss"',
					explain: <span>My current employer is Plexuss and we're a college recruiting network. Check us out at <a href="https://plexuss.com" target="_blank">plexuss.com</a></span>
				}),
				codeClass: 'objProp2'
			},
			{
				code: codeExplain({
					code: 'role: "Software Engineer"',
					explain: "Being a fullstack developer at Plexuss means that I am constantly bouncing from React to Node to the AWS console."
				}),
				codeClass: 'objProp2'
			},
			{
				code: codeExplain({
					code: 'when: "2014 - Present"',
					explain: "It has been a great learning experience in my 3 years here."
				}),
				codeClass: 'objProp2'
			},
			{
				code: codeExplain({
					code: 'summary: "I have led the migration of converting our legacy codebase to React/Redux, built our mobile app using React Native, and improved our landing page load time from 12s to 2s."',
					explain: "Other things I have done include developing an article generator that has produced more than 100 articles on our news page and revamped our messaging system utilizing socket.io which has improved reliability and performance."
				}),
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
	}
]

// education
const educationComponents = [
	{
		code: codeExplain({
			code: <span><span className="propname">{'Education'}</span>{'='}<b>{'{{'}</b></span>,
			explain: <span>The following a summary of my <b>Education</b>:</span>
		}),
		codeClass: 'prop',
		standout: 'standout'
	},
		{
			code: codeExplain({
				code: 'School: "Arizona State University"',
				explain: "ASU is my alma mater and is the place where I learned that I wanted to be a developer of many facets."
			}),
			codeClass: 'objProp2'
		},
		{
			code: codeExplain({
				code: 'major: "Computer Information Systems"',
				explain: "Though not quite the equivalent of a computer science degree, I learned the basics of programming and the internet."
			}),
			codeClass: 'objProp2'
		},
		{
			code: codeExplain({
				code: 'Graduated: "2014"',
				explain: 'Graduated: "2014"'
			}),
			codeClass: 'objProp2'
		},
		{
			code: codeExplain({
				code: 'didVolunteer: true',
				explain: "I volunteered my time doing various activities including tutoring at Microsoft App-Building events and instructing at the Boys and Girls Club."
			}),
			codeClass: 'objProp2'
		},
		{
			code: codeExplain({
				code: 'leadershipOpportunities: 2',
				explain: "I was a part of 2 clubs: one was major-related and the other was focused on connecting the ASU community."
			}),
			codeClass: 'objProp2'
		},
	{
		code: codeExplain({
			code: <span className="nohighlight"><b>{'}}'}</b></span>,
			explain: <span className="nohighlight"><b>{'}}'}</b> // end of <b>Education</b> information.</span>
		}),
		codeClass: 'prop'
	},	
]

const closingComponent = {
	code: codeExplain({
		code: <b className="propname componentName">{"/>"}</b>,
		explain: <span><b>{"/>"}</b> // end of my <b>Portfolio. </b>Thank you for indulging me :)</span>
	}),
}

const fillerComponent = {
	code: '',
	codeClass: 'prop',
}

export const HelloWorld = [
	openingComponent,
	nameComponent,
	...contactComponents,
	...socialComponents,
	...skillsComponents,
	...projectComponents,
	...experienceComponents,
	...educationComponents,
	closingComponent,
	fillerComponent,
	fillerComponent,
	fillerComponent,
	fillerComponent,
	fillerComponent,
	fillerComponent,
	fillerComponent,
]