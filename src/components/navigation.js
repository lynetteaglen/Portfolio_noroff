import React from 'react';
import { Link } from 'react-router-dom';




const openNav = () => {

    document.getElementById("navigationbar").style.width = "100%";
}

const closeNav = () => {
    document.getElementById("navigationbar").style.width = "0%";
}


/* const refContainer = useRef(initialValue); */

const Navigation = () => {
    return (
        <>
            <nav id="navigationbar" className="overlay">
                <a className="closebtn" onClick={closeNav}>&times;</a>
                <div className="navigation-bar">
                    <ul className="navbar_content">
                        <li><Link to="/">home</Link></li>
                        <li className="nav-list"><Link to="/About">about</Link></li>
                        <li className="nav-list"><Link to="/Contact">contact</Link></li>
                        <li className="nav-list"><Link to="/Contact">cv</Link></li>
                    </ul>
                </div>
            </nav>

            <span className="openbtn" onClick={openNav}><div></div></span>
        </>
    )
}


export default Navigation;

