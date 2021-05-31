import './Nav.css'
import logo from '../assets/kiltman.png'
import {Link} from "react-router-dom"

const Nav = () =>{
    return (
        <nav className="nav-container">
            <div className="logo-container">
                <img className="logo" src={logo} alt=''></img>
            </div>
            <div className="nav-link-container">
                <Link to="Players">Players</Link>
                <Link to="Teams">Teams</Link>
                <Link to="Schedule">Schedule</Link>
                <Link to="About">About us</Link>
                <Link to="Login">Log in</Link>
            </div>
        </nav>    )
}

export default Nav;