import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Register from './components/register/Register.js';
import LoginForm from './components/login/LoginForm.js';
import Landing from './components/home/Landing.js';
import NavBar from './components/home/NavBar.js';
// import Default from './components/Default.js';

function App(){
    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={Register} />
                {/* <Route component={Default} /> */}
            </Switch>
        </div>
    )
}

export default App;