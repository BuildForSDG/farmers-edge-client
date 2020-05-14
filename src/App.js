import React from 'react';
import './App.css';
import LoginForm from './components/login/LoginForm';
import Header from './components/header/Header';

function App() {
  return (
      <div className="App">
        <Header/>
        <LoginForm/>
      </div>
  );
}

export default App;
