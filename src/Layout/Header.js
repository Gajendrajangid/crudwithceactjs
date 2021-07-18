import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg';
const Header = () => {
    const logoastyle={
        "margin-top": "-18px",
        "margin-bottom": "-18px"
    }
    const logoimgstyle={
        "maxHeight": "82px",
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
            <div className="container-fluid">
                <a className="navbar-brand text-white" style={logoastyle} href="#"><img style={logoimgstyle} src={logo}></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/about">AboutUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/studentlist">Player</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/contact">ContactUs</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;
