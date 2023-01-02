import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CalendlyS.css'


function CalendlyS() {
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
		<div className="col-md-12 ">
			<h1><span style={{color: "blue"}}><strong>Way more</strong> </span><strong>than a</strong> </h1>
			<h1><strong>scheduling link</strong></h1>

			<h4 className="Standardize">Standardize on the  &#35;1 scheduling platform and</h4>
			<h4>deliver the power of Calendly actoss your entire</h4> 
			<h4>organization</h4>

			<button className="button"><h5><strong>Contact sales</strong></h5></button>
		</div>
	</div>

	<div className="row secondrow">
		<div className="col-md-12 ">
			<img alt="" src="https://images.ctfassets.net/k0lk9kiuza3o/4yq2NZWz2HD3JOAU6rWngt/ebfa8f18996e3147471e2091d33a91c2/Partner_Background_for_Export.svg" className="img-fluid"/>
 		</div>
	</div>

    <div className="row thirdrow">
		<div className="col-md-4 resize ">
			<div className="card" style={{width: "18rem;"}}>				
                <div className=" col-md-4 card-body">
                <h5 className="card-title">Sales</h5>
                <img alt="" src="https://images.ctfassets.net/k0lk9kiuza3o/32KUljTojPdR63HTyoOI48/4c1a4f0210f77037a744791fc26e2fec/Sales__1_.svg" responsive/>
                <p className="card-text">Convert more leads and prospects into meetings and revenue. Easily book demos and customer calls without the back and forth.</p>
                
                </div>
            </div>
			
		</div>
		<div className="col-md-4 ">
			<div className="card" style={{width: "18rem;"}}>				
                <div className=" col-md-4 card-body">
                <h5 className="card-title">Customer Success</h5>
                <img alt=""  src="https://images.ctfassets.net/k0lk9kiuza3o/6eJwfU8AThGvvDpjTdWDTI/cec263c3e1f0a608267fca59a1b03894/Customer_Success.svg" responsive/>
                <p className="card-text">Deliver better support interactions and customer consultations. Stay connected with automated reminders and follow-ups.</p>
                
                </div>
            </div>
        </div>

        <div className="col-md-4 ">
			<div className="card" style={{width: "18rem;"}}>				
                <div className=" col-md-4 card-body">
                <h5 className="card-title">Recruiting</h5>
                <img alt="" src="https://images.ctfassets.net/k0lk9kiuza3o/4d6Vf8dXq2m1sYzxjTjDuw/1c5fb5cb6ec11f9710544f1b5956a3dd/Recruiting__1_.svg" responsive/>
                <p className="card-text">Fill your candidate pipeline and book more interviews and recruiter screens with easy, standardized scheduling.</p>
                
                </div>
            </div>
			
		</div>
			
		</div>

	</div>

	
	<div className="row fifthrow">
	    <div className="col-md-12">
	        <button className="buttonl"><h6><strong>Learn More</strong></h6></button>
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
    
  )
}

export default CalendlyS