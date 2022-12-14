import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="headerDiv">
            <h1 className="header">Do Travel.</h1>
            <div className="navDiv">
                <NavLink to="/" >Home</NavLink>  |  <NavLink to="/trips">Trips</NavLink>  |  <NavLink to="/archive">Past Trips</NavLink> 
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Header;