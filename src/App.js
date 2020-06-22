import React from 'react';
import { ToastContainer } from 'react-toastify';
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
import ProtectedRoute from './components/RouteRedirect.js';
import PasswordReset from './components/auth/PasswordReset.js';
import 'react-toastify/dist/ReactToastify.css';

// import Default from './components/Default.js';

const currentUser = localStorage.getItem('userToken');

function App(){
    return(
        <React.Fragment>
            <NavBar />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />

            <Switch>
                <Route exact strict path='/' component={Landing} />
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={Register} />
                <Route path='/resetpassword' component={PasswordReset} />
                <Route path='/contact' component={Contacts} />
                <Route path='/about' component={About} />
                <ProtectedRoute exact path='/farmers' component={Farmers}  currentUser={currentUser}/>
                <ProtectedRoute exact path='/customers' component={Customers} currentUser={currentUser} />
                {/* <Route component={Default} /> */}
            </Switch>
        </React.Fragment>
    )
}
export default App;