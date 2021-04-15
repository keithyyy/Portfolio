import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar transparent">
            <Link className="navbar-brand" to='/'>Keith Crooc</Link>
            <div>
                <ul className="nav">
                    <li className="link">
                        <Link className="nav-link" to="/">Portfolio</Link>
                    </li>
                    <li className="link">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
