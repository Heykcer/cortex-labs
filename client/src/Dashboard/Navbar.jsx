import React from "react";
import "./Navbar.css";
import "../App.css";
import logoImg from "../assets/logo2.png";
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logoImg} alt="Logo" />
                </div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact" className="join-btn">Join Us</a></li>

                </ul>
            </nav>
        </>
    );
};
export default Navbar;