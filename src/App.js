import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Register from './components/auth/Register.js';
import LoginForm from './components/auth/LoginForm.js';
import Contacts from './components/home/Contacts.js';
import About from './components/home/About.js';
import Landing from './components/home/Landing.js';
import NavBar from './components/home/NavBar.js';
import Farmers from './components/dashboard/Farmers.js';
import Customers from './components/dashboard/Customers.js';
import RouteRedirect from './components/RouteRedirect.js';
// import Default from './components/Default.js';

function App(){
    return(
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact strict path='/' component={Landing} />
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={Register} />
                <Route path='/contact' component={Contacts} />
                <Route path='/about' component={About} />
                <RouteRedirect path='/farmers' component={Farmers} />
                <RouteRedirect path='/customers' component={Customers} />
                {/* <Route component={Default} /> */}
            </Switch>
        </React.Fragment>
    )
}

export default App;