import React from 'react';
import { Link } from 'react-router-dom';

const openNav = () => {
    document.getElementById("navigationbar").style.width = "100%";
}

const closeNav = () => {
    document.getElementById("navigationbar").style.width = "0%";
}

/* 
const selectPage = () => {
    document.getElementById("navigationbar").addEventListener('click')
}
 */
/* const refContainer = useRef(initialValue); */

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
                            <li className="nav-list"><Link to="/">home</Link></li>
                            <li className="nav-list"><Link to="/About">about</Link></li>
                            <li className="nav-list"><Link to="/Contact">contact</Link></li>
                            <li className="nav-list"><Link to="/Cv">cv</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="icon">
                    <img className="icon__github" src="https://img.icons8.com/ios-filled/50/000000/github.png" />
                    <img className="icon__linkedin" src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled.png" />
                </div>
            </nav>

            <span className="openbtn" onClick={openNav}><div></div></span>
        </>
    )
}


export default Navigation;

