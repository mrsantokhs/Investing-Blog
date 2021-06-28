import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div className="nav-main bg-dark ">
      <div className="nav-spacing ">
        <div>
          <i className="bi bi-cash-coin "></i>
          <h1 class="nav-brand-title">Investing Blog</h1>
        </div>
        <div className="nav-auth d-flex flex-column">
          <Link to="/join" className="nav-link text-warning"><h4>Join Us</h4></Link>
          <Link to="/login" className="nav-link">Log In</Link>
        </div>
        <div className="nav-down d-flex flex-column">
          <div className="input-group input-group-sm mb-3">
            
            <input
              type="text"
              className="nav-search "
              placeholder="Search site"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <Link exact to="/" className="nav-link">Home</Link>
          <Link to="/startups" className="nav-link">Startups</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/analysis" className="nav-link">Analysis</Link>
          <Link to="/brokers" className="nav-link">Brokers</Link>
          <Link to="/crypto" className="nav-link">Crypto</Link>
         
        </div>
      </div>
    </div>
  );
}

export default Navigation;
