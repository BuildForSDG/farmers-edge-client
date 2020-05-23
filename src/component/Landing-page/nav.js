import React, { Component } from 'react'
import './App.css'
import logo from './asset/logo.png'
class Nav extends Component {
    render() {
        return (
            <nav className='navbar'>
        
                <div className='logo'>
                    <a href='#'>
                        <img src={logo} alt=' Farmer-Edge'></img>
                    </a>
                    <h3>Farmer-Edge</h3>
                </div>
                <ul className='nav-links'>
                    <li>
                        <a href='#'>Farmers</a>
                    </li>
                    <li>
                        <a href='#'>Retailer / Customers</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;