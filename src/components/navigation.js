import React from 'react';
import { Link } from 'react-router-dom';

const openNav = () => {
    document.getElementById("navigationbar").style.width = "100%";
}

const closeNav = () => {
    document.getElementById("navigationbar").style.width = "0%";
}




const Navigation = () => {
    return (
        <>
            <h1 className="logo">L一A</h1>
            <nav id="navigationbar" className="overlay">
                <a className="closebtn" onClick={closeNav}>&times;</a>
                <div className="overlay__box">
                    <h1 className="overlay__logo">L一A</h1>
                    <div className="navigation-bar">
                        <ul className="navbar_content">
                            <li className="nav-list"><Link onClick={closeNav} to="/">home</Link></li>
                            <li className="nav-list"><Link onClick={closeNav} to="/About">about</Link></li>
                            <li className="nav-list"><Link onClick={closeNav} to="/Contact">contact</Link></li>
                            <li className="nav-list"><Link onClick={closeNav} to="/Cv">cv</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <span className="openbtn" onClick={openNav}><div></div></span>
        </>
    )
}


export default Navigation;

