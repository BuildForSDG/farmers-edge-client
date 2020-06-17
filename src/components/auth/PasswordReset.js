import React, { Component } from 'react'
import {ResetPassword} from './../../axiosConfigs'

export default class PasswordReset extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        ResetPassword(this.state.email);
        
    }

    render() {
        return (
            <div>
                <form className='login-container' onSubmit = {this.handleSubmit}>
                    <input 
                    type = 'email'
                    name = 'email'
                    placeholder = 'Enter Email'
                    value = {this.state.email}
                    onChange = {this.handleChange}
                    />
                    <button className='login-btn' type="submit">Send</button>
                </form>
            </div>
        )
    }
}
