import React, { useState } from "react";

import './Footer.css'
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
    //  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <footer >
            <p style={{ color: "blue" }}>
                Copyright © 2023 Way2employee
            </p>

            <ul className="sk" >
                <li >
                    <NavLink className="atag" to="/aboutus">ABOUT US</NavLink>
                </li>
                <li >
                    <NavLink className="atag" to="/contactus">CONTACT US</NavLink>
                </li>
                <li >
                    <NavLink className="atag" to="/disclimer">DISCLAIMER</NavLink>
                </li>
                <li >
                    <NavLink className="atag" to="/privacy">PRIVACY POLICY</NavLink>
                </li>

            </ul>

            <div class="social-icons">
                <a class="social-icon whatsapp" href="https://www.whatsapp.com/channel/0029Va9HZxt9hXFFhW4aOM2d">
                    <i class="fa fa-whatsapp"></i>
                </a>
                <a class="social-icon instagram" href="https://instagram.com/siddiqkolimi">
                    <i class="fa fa-instagram"></i>
                </a>
                <a class="social-icon telegram" href="#">
                    <i class="fa fa-telegram"></i>
                </a>

                <a class="social-icon youtube" href="#">
                    <i class="fa fa-youtube"></i>
                </a>
            </div>

        </footer>

    );
};

