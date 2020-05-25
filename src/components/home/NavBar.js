import React, { Component } from 'react'
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';


export default class NavBar extends Component {
    render() {
        return (
            <nav className='navbar'>
        
                <div className='logo'>
                    <Link to='/'> <img src={logo} alt='Farmers Edge'/> </Link> 
                    <h3>Farmers Edge</h3>
                </div>
                <ul className='nav-links'>
                    <Link to='/login'> <li> Farmers </li> </Link>
                    <Link to='/signup'> <li> Retailers </li> </Link>
                    <Link to='/contact'> <li> Contact </li> </Link>
                </ul>
            </nav>
        )
    }
}