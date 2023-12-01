import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
export default function Footer() {
  return (
  

	<footer className="footer">
		<div className="container row">
			<div className="footer-col">
				<h4>company</h4>
				<ul>
					<li><Link to="/about">about us</Link></li>
					<li><Link to="https://textutils-narasimha.netlify.app/" target='_blank'>Text Utils</Link></li>
					<li><Link to="/">visit website</Link></li>
				</ul>
			</div>
			
		
			<div className="footer-col">
				<h4>follow us</h4>
				<div className="social-links">
					<Link to="https://www.facebook.com/profile.php?id=100014866861584&mibextid=ZbWKwL" target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
					<Link to="https://x.com/Narasimha_62?t=NbDbkyXzsShAMJIu7UMuWw&s=08" target='_blank'><i className="fa-brands fa-x-twitter"></i></Link>
					<Link to="https://www.linkedin.com/in/narasimha-vaddala-6450941a5" target='_blank'><i className="fa-brands fa-linkedin-in"></i></Link>
				</div>
			</div>
		</div>
	</footer>

  )
}
