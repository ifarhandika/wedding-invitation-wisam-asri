import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <div className="navbar flex flex-jc-sb flex-ai-c">
                <div className="logo">HF</div>
                <ul className="menu-list">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
