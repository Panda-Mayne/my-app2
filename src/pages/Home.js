import React from 'react';
import "./Home.scss";
// import archit from "../images/architlogo2.png";

export const Home = () => {
  return ( 
    <div className="home">
      <nav className="navbar">
        {/* <a href="/"><img className="logo" src={archit} alt="Logo" /></a> */}
			<div className="navbar-bars">
			
			</div>
				<div className="navbar-menu">
          			<a href="/about" className="nav-links">About</a>
          			<a href="/contact" className="nav-links">Contact</a>
					<a href="/" className="nav-links" id="city-btn">City</a>
				</div>
  		</nav>
			<div className="body">
				<div className="container-home">
        		<h1 className="h1">DISCOVER YOUR CITY'S ARCHITECTURE</h1>
         		<div className="launch">
            		<button className="launch-btn"><a href="/Map">Launch Map</a></button>
        		</div>
				</div>
			</div>
        </div>
     );
}
 
export default Home;