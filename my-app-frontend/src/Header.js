import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="headerDiv">
            <h1 className="header">Travel.</h1>
            <NavLink activeClassName="nav" to="/">Home</NavLink>  |  <NavLink activeClassName="nav" to="/Cities">Cities</NavLink>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Header;