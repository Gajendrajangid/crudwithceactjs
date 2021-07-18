import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/addstudent">Add-Student</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/studentlist">Student List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/about">About-Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" aria-current="page" exact to="/contact">Contact-Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;
