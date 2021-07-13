import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import cartoon from '/src/images/cartoon.png'

import "./index.css"

// styles
const pageStyles = {
	backgroundColor: "#00324D",
	color: "white",
	fontFamily: "Roboto Mono, sans-serif, serif",
}

const navLinksStyles = {
	listStyle: "none",
	display: "flex",
	padding: 0
}

const navItemStyles = {
	marginRight: "20px"
}


// markup
const IndexPage = () => {
	return (
		<main className="container" style={pageStyles}>
			<nav>
				{/* <ul style={navLinksStyles}>
					<li className="nav-link"><a href="#">home_</a> </li>
					<li className="nav-link"><a href="#">portfolio_</a></li>
					<li className="nav-link"><a href="#">lab_</a></li>
					<li className="nav-link"><a href="#">contact_</a></li>
				</ul> */}
				<ul style={navLinksStyles}>
					<li className="social-link"><a href="https://www.linkedin.com/in/edionay/" ><FontAwesomeIcon icon={faLinkedinIn} /></a> </li>
					<li className="social-link"><a href="https://github.com/edionay"><FontAwesomeIcon icon={faGithub} /></a></li>
				</ul>
			</nav>
			<title>Home Page</title>

			<div className="header-container">
				<div className="header-column cartoon-column">
					<img className="cartoon" src={cartoon} alt="2016rshah's Github chart" />

					<div className="title-container">
						<h1 className="name-title">Edionay Aguiar</h1>
						<p>
							Software Engineering Graduated
						</p>
					</div>

				</div>
				<div className="header-column about-me-column">
					<div className="about-title" >// About me</div>
					<div className="about-me">
						I'm a brazilian computer science master student who loves to code.
					</div>
					<div className="tags">
						<div className="tag">Mobile developer</div>
						<div className="tag">Front-End developer</div>
						<div className="tag">Accessibility</div>
					</div>
					<img className="github-graph" src="https://ghchart.rshah.org/edionay" alt="2016rshah's Github chart" />
				</div>
			</div>
		</main>
	)
}

export default IndexPage
