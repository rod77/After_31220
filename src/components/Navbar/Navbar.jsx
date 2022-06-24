import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.png'; 
import './NavBar.css'

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg styleNav'  >
            <div className='container-fluid'>
                <a className='navbar-brand' >
                    <img src={logo} alt="logo"  width={121} height={80} />
                    <span className="title_prin">STORE: ADIDAS - Test</span> 
                </a>
                <div className='nav'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link styleLink'    >Zapatillas</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link styleLink'  >Remeras</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;