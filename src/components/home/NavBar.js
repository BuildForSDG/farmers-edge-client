import React, { Component } from 'react'
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';


export default class NavBar extends Component {

    handleLogout = () => {

        localStorage.clear();

        window.location.href = '/';
    }

    render() {

        let token = localStorage.getItem('isLoggedIn');


        return (
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'> <img src={logo} alt='Farmers Edge'/> </Link> 
                    <h3 className='logo_text'>Farmers Edge</h3>
                </div>
                <ul className='nav-links'>
                    
                        <div> <li><Link to='/about'> About </Link></li> </div>

                            { token ? 
                               <li><button className = '' onClick={this.handleLogout}> Logout </button></li> 
                                : 
                                <div>
                                    <li><Link to='/farmers'>Farmers </Link> </li>
                                    <li><Link to='/customers'> Customers </Link></li>
                                </div>  
                            }

                            <div> <li><Link to='/contact'> Contact </Link></li> </div>
                   
                </ul>
            </nav>
        )
    }
}