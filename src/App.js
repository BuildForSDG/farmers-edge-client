import React from 'react';
import './App.css';
import Register from './components/register/Register.js';
import LoginForm from './components/login/LoginForm.js';
import Header from './components/header/Header.js';

function App(){
    return(
        <div>
            
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col-6">
                        <Register/> 
                    </div>
                    <div className="col-6">
                        <LoginForm/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default App;