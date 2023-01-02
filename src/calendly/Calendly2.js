import React from 'react'
import './Calendly2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Calendly2() {
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
     {/* <a className="nav-link active" href=""  style={{color: "black"}}>Individuals </a>
      <a className="nav-link"  href="" style={{color: "black"}}>Teams</a>
      <a className="nav-link" href=""  style={{color: "black"}}>Enterprise</a>*/}

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
			<h1><span style={{color: "black"}}><strong>Easy</strong> </span>
				<p><strong>scheduling</strong></p>
			</h1>
			<h1><span style={{color: "blue"}}><strong>ahead</strong></span></h1>
			<h4 className="Standardize">Calendly is your hub for scheduling meetings</h4>
			<h4> professionally and efficiently, eliminating the hassle of </h4> 
			<h4> back-and-forth emails so you can get back to work.</h4>
		</div>
	

	    <div className="col-md-6 ">
		    	<img alt="" src="public/calendly/Screenshot 1.png"/>
	    </div>
	   
	<div className="row secondrow">
		<div className="col-md-12 ">
			<h1>Simplified scheduling for more than <span style={{color: "blue"}}> 10,000,000</span> users worldwide</h1>
		</div>
	</div>	

    
    <div className="row final">
    	
		<div className="col-md-4">
			<h1>Create simple rules</h1>
			<p>Let Calendly know your availability</p>
			<p>preferences and it will do the work</p>
			<p>for you.</p>
		</div>
		<div className="col-md-4">
			<h1>Share your link</h1>
			<p>Send guests your Calendly link or</p>
			<p>embed it on your website. </p>
		</div>
		<div className="col-md-4">
			<h1>Get booked</h1>
			<p>They pick a time and the event is</p>
			<p>added to your calendar.</p>	
		</div>
	
    </div>

</div>

<footer>
	<div>Copyright Calendly 2022</div>
</footer>
</div>
</div>
  
 ) 
}





export default Calendly2