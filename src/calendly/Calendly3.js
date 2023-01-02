import React from 'react'
import './Calendly3.css'
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Calendly3() {
  return (
    <div>
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
			<h1>
        <span style={{color: "black"}}><strong>The genius way to</strong> </span>
				<p><strong><span style={{color: "black"}}>work</span> </strong> <strong> <span style={{color: "blue"}}>better</span></strong></p>
			</h1>
			<h5>Calendly makes it easy to work smarter when you"re </h5>
			<p><h5>working solo. Meetings, sessions, and appointments </h5></p>
			<p><h5>  become more efficient ways to achieve success and </h5></p>
			<p><h5> accomplish goals. </h5></p>
			<button className="buttonl"><h6><strong></strong>Sign up for free</h6></button>
		</div>


	

	    <div className="col-md-6 ">
		    	<img alt="" src="calendly/Screenshota.png"/>
	    </div>	   

  
	<div className="row secondrow">	
        <div className="col-md-6 ">
		    	<img src="calendly/Screenshotb.png" alt=""/>
	    </div>

		<div className="col-md-6 row2 ">
			<h6><span style={{color: "grey"}}><strong>A CURATED CALENDAR</strong> </span></h6>

				<h1><strong>Book up efficiently</strong></h1>
				<br/>
			<h6> When invitees select a meeting slot from your schedule, they </h6>
            <br/>
			<h6>only see the times you"re available, and only the length and </h6>
			<br/>
			<h6> type of meeting you want to have. Your schedule fills up </h6> 
			<br/>
			<h6>  efficiently, and everyone avoids excess email exchanges.</h6>
		</div>	
    
     
    <div className="row thirdrow">
		<div className="col-md-6 ">
			<h6><span style={{color: "grey"}}><strong>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</strong> </span></h6>

				<h1><strong>Work like you have a personal assistant</strong></h1>
				<br/>
			<h6> Because Calendly automates administrative tasks like  </h6>
            <br/>
			<h6>sending reminder emails and follow-ups, you can focus on </h6>
			<br/>
			<h6> the work that builds your business and brings customers </h6> 
			<br/>
			<h6> back for more. </h6>
		</div>
	

	    <div className="col-md-6 ">
		    	<img src="calendly/Screenshotc.png" alt=""/>
	    </div>

    
	<div className="row fourthrow">
		<div className="col-md-12 ">
			<img src="calendly/Screenshotd.png" alt=""/>
		</div>
	</div>

   
    	<div className="row sixthrow">
		<div className="col-md-3 padit">
			<h1><span style={{color: "#03051D"}}><strong>Easy</strong> </span> 
				<p><strong style={{color: "blue"}}>ahead</strong></p> </h1>
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
			<img src="calendly/Screenshoticons.png" alt=""/>
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
    </div>
    </div>
    
  )
}

export default Calendly3