import { NavLink } from "react-router-dom"
import "../CSS/index.css"

export default function Navbar() {
    return (
        <nav>
            <img src={require("../img/thoratbags white.png")} width="180px" alt="LOGO" />
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <div className="dropdown">
                    <button className="dropbtn">Categories</button>
                    <div className="dropdown-content">
                        <NavLink to="/school">School Bags</NavLink>
                        <NavLink to="/Gym">Gym Bags</NavLink>
                        <NavLink to="/Sling">Sling Bags</NavLink>
                    </div>
                </div>
            <li>Blog</li>
            <li><NavLink to="/Account">Account</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
            <li>Help</li>
        </ul>
        </nav >
    )
}