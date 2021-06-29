import React from "react";
import "./Home.scss";
// import archit from "../images/architlogo2.png";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="home-page">
        <nav className="navbar">
          <a href="/" className="logo">
            ARCHIT
          </a>
          <div className="navbar-bars"></div>
          <div className="navbar-menu">
            <a href="/about" className="nav-links">
              About
            </a>
            <a href="/contact" className="nav-links">
              Contact
            </a>
            <a href="/" className="nav-links" id="city-btn">
              City
            </a>
            <div className="nav-divider"></div>
          </div>
        </nav>
        <div className="body">
          <div className="container-title">
            <h1 className="main-title">Discover Prague's Architecture</h1>
            <div className="launch">
              <button className="launch-btn">
                <a href="/Map">Launch Map</a>
              </button>
            </div>
          </div>
        </div>
        <div className="about-container">
          <div className="sub-columns">
            <div className="column-text">
              <img class="home-img" src="images/Discover.svg" />
              <h2 className="sub-head">Explore</h2>
              <p className="sub-text">
                By launching the map find out where the most unique architecture
                is.
              </p>
            </div>
            <div className="column-text">
              <img class="home-img" src="images/Architecture.svg" />
              <h2 className="sub-head">Architecture</h2>
              <p className="sub-text">
                Know the chronology of styles which backbone the city’s culture.
              </p>
            </div>
            <div className="column-text">
              <img class="home-img" src="images/History.svg" />
              <h2 className="sub-head">History</h2>
              <p className="sub-text">
                Learn something behind what accompanies each style and
                structure.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="contact-container">
			<div className="contact-page">
				<div>
					<h2>ARCHIT</h2>
					<p>If you wish to get in touch regarding updates on historical information or architecture feel free to connect by email or social media.</p>
					<div>
					<a href="mailto:amandacmayne@gmail.com" target="_blank" rel="noreferrer">info@archit.eu</a>
					</div>
					<div className="v-line"></div>
				</div>
			</div>
			</section> */}
    </div>
  );
};

export default Home;
