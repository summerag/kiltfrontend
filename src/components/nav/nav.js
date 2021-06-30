import './nav.scss'
import logo from '../../assets/kiltman.png'
import {Link} from 'react-router-dom'
import Hamburger from './hamburger'
import { useState } from 'react'


const Nav = () =>{

    const [dropMenu, setDropMenu] = useState(false)

    const handleMenuState = () => {
        setDropMenu(!dropMenu)
    }

    return (
        <nav className="nav-container">
            <div className="logo">
                <Link to="">
                    <img src={logo} alt=''></img>
                </Link>
            </div>
            <Hamburger className="menu" onClick={handleMenuState} status={dropMenu}/>
            <div className={`${dropMenu ? 'activeDrop' : 'nav-links'}`} onClick={() => {
                setDropMenu(false)
                console.log(dropMenu)
                }
            }>
                <Link to="players">Players</Link>
                <Link to="teams">Teams</Link>
                <Link to="schedule">Schedule</Link>
                <Link to="about">About us</Link>
                <Link to="login">Log in</Link>
            </div>
        </nav>    
        
    )
}

export default Nav;
