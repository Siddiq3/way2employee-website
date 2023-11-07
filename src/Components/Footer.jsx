import React, { useState } from "react";

import './Footer.css'
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
    //  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <footer >
            <Link to="/" className="head">
                Copyright © 2023 Way2employee
            </Link>

            <ul className="sk" >
                <li >
                    <NavLink className="atag" to="/aboutus">ABOUT US</NavLink>
                </li>
                <li >
                    <NavLink className="atag" to="/ContactUs">CONTACT US</NavLink>
                </li>
                <li >
                    <NavLink className="atag" to="/Disclaimer">DISCLAIMER</NavLink>
                </li>
                <li >
                    <NavLink className="atag" to="/Privacy">PRIVACY POLICY</NavLink>
                </li>

            </ul>

            <div class="social-icons">
                <a class="social-icon whatsapp" href="#">
                    <i class="fa fa-whatsapp"></i>
                </a>
                <a class="social-icon telegram" href="#">
                    <i class="fa fa-telegram"></i>
                </a>
                <a class="social-icon instagram" href="#">
                    <i class="fa fa-instagram"></i>
                </a>
                <a class="social-icon youtube" href="#">
                    <i class="fa fa-youtube"></i>
                </a>
            </div>

        </footer>

    );
};

