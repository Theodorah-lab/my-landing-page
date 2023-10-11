import React, {Component} from "react";
import logo from '../assests/logo.svg'

class Header extends Component{
    render(){
        return(
            <>
                <nav className={`navbar navbar-expand-sm navbar-dark`}>
                    <div className={`container-fluid`}>
                        <a className={`navbar-brand logo`} href="#">
                            <img src={logo} alt={`logo`} style={{"width": "100%", "height":" 100%"}} />  
                        </a>
                        <button className={`navbar-toggler`} type={`button`} data-bs-toggle={`collapse`} data-bs-target={`#mynavbar`}>
                        <span className={`navbar-toggler-icon`}></span>
                        </button>
                        <div className={`collapse navbar-collapse`}>
                        <ul className={`navbar-nav me-auto`}>
                            <li className={`nav-item`}>
                            <a className={`nav-link`} >Services</a>
                            </li>
                            <li className={`nav-item`}>
                            <a className={`nav-link`} >Industries</a>
                            </li>
                            <li className={`nav-item`}>
                            <a className={`nav-link`}>Cases</a>
                            </li>
                            <li className={`nav-item`}>
                            <a className={`nav-link`}>Contact</a>
                            </li>
                        </ul>
                        <div className={`d-flex`}>
                            <button className={`btn-primary`}>Lets talk</button>
                        </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header;