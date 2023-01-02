import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Calendly4.css'

function Calendly4() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
	<Nav.Link className="navbar-brand" href="">
	<Link to="/">
    <img src="/calendly/clogo.svg" width="80" height="80" className="d-inline-block align-top" alt=""/>
	</Link> 
  </Nav.Link>
  
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
 
    <div className="navbar-nav">
     

	  <Nav.Item>
        <Nav.Link><Link to="/Calendly3">Individuals</Link></Nav.Link>
      </Nav.Item>
     
	  <Nav.Item>
        <Nav.Link><Link to="/Calendly4">Teams</Link></Nav.Link>
      </Nav.Item>
     
	  <Nav.Item>
        <Nav.Link><Link to="/CalendlyS">Enterprise</Link></Nav.Link>
      </Nav.Item>
  </div>
  </div>
</nav>


<div className="container">
	
	<div className="row firstrow">
		<div className="col-md-6 ">
			<h1><span style={{color: "blue"}}><strong>Power up</strong> </span><span style={{color: "black"}}>your</span>
				<p><strong>teams</strong></p>
			</h1>
			<h5>Calendly gives you control over team scheduling with a  favorite tools, so you can get everyone working as  </h5>
			<p><h5>standardized, scalable process. It’s secure, easy to </h5></p>
			<p><h5>   manage, and integrates with your team's </h5></p>
			<p><h5> efficiently and effectively as possible.</h5></p>
			<button className="buttonl"><h6><strong></strong>Start for free</h6></button>
			<button className="button2"><h6><strong></strong>Contact Sales</h6></button>
		</div>


	

	    <div className="col-md-6 ">
		    	<img alt="" src="calendly/Screenshotx.png"/>
	    </div>	   

     
    <div className="row thirdrow">
		

	    <div className="col-md-12 thirdrowA ">
		    	<h1>Streamline tasks, extend team reach</h1>
	    </div>
    </div>

   
	<div className="row secondrow">	
        <div className="col-md-6 ">
		    	<img alt="" src="calendly/Screenshoty.png"/>
	    </div>

		<div className="col-md-6 row2 ">
			<h6><span style={{color: "grey"}}><strong>AUTOMATED ASSIGNMENT</strong> </span></h6>

				<h1><strong>Control how your team gets booked</strong></h1>
				<br/>
			<h6> With Calendly, you can offer sessions that are a few minutes  </h6>
            <br/>
			<h6>or a few hours, for one invitee or a group. Automated round-</h6>
			<br/>
			<h6> robin, first-available, or geography-based assignments let </h6> 
			<br/>
			<h6> you easily divvy up meetings in any way that works for your team members.</h6>
		</div>	
    
    
   
	<div className="row fourthrow">
		<div className="col-md-12 ">
			<img alt="" src="calendly/Screenshotz.png"/>
		</div>
	</div>

    
    <div className="row sixthrow">
		<div className="col-md-3 padit">
			<h1><span style={{color: "#03051D"}}><strong>Easy</strong> </span> 
				<p><strong style={{color:"blue"}}>ahead</strong></p> </h1>
				<p>We take the work out of connecting with others so you can accomplish more.</p>
		</div>
		<div className="col-md-3">
			<h3>About</h3>
			<p>About Calendly</p>
			<p>Contact Sales</p>
			<p>Newsroom</p>
			<p>Careers</p>
			<p>Security</p>
		</div>
		<div className="col-md-3">
			<h3>Solutions</h3>
			<p>Customer Success</p>
			<p>Sales</p>
			<p>Recruiting</p>
			<p>Education</p>
			<p>Marketing</p>
		</div>
		<div className="col-md-3 popular">
			<h3>Popular Features</h3>
			<p>Embed Calendly</p>
			<p>Availability</p>
			<p>Sending Notifications</p>
			<p>Using Calendly Mobile</p>			
		</div>
	</div>

    <div className="row final">
    	<div className="col-md-3">
			<img alt="" src="calendly/Screenshoticons.png"/>
		</div>
		<div className="col-md-3">
			<h1>Support</h1>
			<p>Help Center</p>
			<p>Video Tutorials</p>
			<p>Cookie Settings</p>
		</div>
		<div className="col-md-3">
			<h1>Add-Ons</h1>
			<p>Download for Chrome</p>
			<p>Download for Firefox </p>
		</div>
		<div className="col-md-3">
			<h1>Developers</h1>
			<p>Developer Tools</p>	
		</div>
	
    </div>

</div>

<footer>
	<div>Copyright Calendly 2022</div>
</footer>

    </div>
    </div>
    </div>
    
  )
}

export default Calendly4