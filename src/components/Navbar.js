import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types'
// import {Link} from "react-router";

const Navbar = (props) =>{
    
    return(
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} ${props.mode==='light'?'border-bottom':""}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/about">{props.aboutText}</a>
                </li>                
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch ">
                {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className={`form-check-label ${props.mode === 'dark'? 'text-light': 'text-dark'}`} htmlFor="flexSwitchCheckDefault" style={{color: props.mode === 'dark'? 'light':'dark'}}>{props.mode === 'dark'? 'Enable LightMode': 'Enable DarkMode'}</label> */}
                    {/* dark-light mode switch  */}
                <i className={`mode-icon fa-regular fa-${props.mode==='dark'?'sun':'moon'} fs-4 text-${props.mode==='dark'?'light':'dark'}`} onClick={props.toggleMode}></i>
                </div>
                </div>
              
        </div>
        </nav>
        </>
    )
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
export default Navbar;