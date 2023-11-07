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
                    <NavLink to="/">OffCampus Jobs</NavLink>
                </li>
                <li>
                    <NavLink to="/internships">Internship</NavLink>
                </li>
                <li>
                    <NavLink to="/walkindrives">Walk in drives</NavLink>
                </li>
                <li>
                    <NavLink to="/govtjobs">GovtJobs</NavLink>
                </li>





            </ul>
        </nav>
    );
};