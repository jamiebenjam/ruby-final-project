import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="headerDiv">
            <h1 className="header">Travel.</h1>
            <NavLink activeClassName="nav" to="/">Home</NavLink>  |  <NavLink activeClassName="nav" to="/NewYork">New York</NavLink>
            <br></br>
            <br></br>
            {/* <img className="mapImg" src="https://alumni.gcc.edu/s/1472/images/editor/travel/travel_header_july_2022.png" alt="map-img"></img> */}
            <br></br>
        </div>
    )
}

export default Header;