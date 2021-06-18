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
        		<h1 className="main-title">Discover Prague's Architecture</h1>
         		<div className="launch">
            		<button className="launch-btn"><a href="/Map">Launch Map</a></button>
        		</div>
				</div>
			</div>
			<div className="about-container">
				<div className="sub-columns">
					<h2>Discover</h2>
					<p>Find out where the architecture is located by launching the map.</p>
				</div>
				<div>
					<h2>Architecture</h2>
					<p>Know the chronology of styles which backbone the city’s culture.</p>
				</div>
					<h2>History</h2>
					<p>Learn something behind what accompanies each style and structure.</p>
			</div>
        </div>
     );
}
 
export default Home;