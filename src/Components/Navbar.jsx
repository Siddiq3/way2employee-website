import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
                Way2Employee
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">10thclass</NavLink>
                </li>
                <li>
                    <NavLink to="/services">9thclass</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">inter1st year</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">inter2nd year</NavLink>
                </li>
            </ul>
        </nav>
    );
};

