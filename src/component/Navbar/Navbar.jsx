import './Navbar.css'
import logo_img from './../../assets/images/lemon_logo.png'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div class="title_container">
                <img src={logo_img} alt="" />
                <h1>LITTLE LEMON </h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : '')} >Home</NavLink></li>
                    <li><NavLink to="/Our_menu" className={({ isActive }) => (isActive ? 'active-link' : '')} >Menu</NavLink></li>
                    <li><NavLink to="/Reservation" className={({ isActive }) => (isActive ? 'active-link' : '')} >Reservations</NavLink></li>
                    <li><NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')} >About Us</NavLink></li>

                    <li><NavLink to="/Features" className={({ isActive }) => (isActive ? 'active-link' : '')} >Features</NavLink></li>

                </ul>

            </nav>
        </>
    )
}

export default Navbar