import React, { Component } from 'react'
import {ContactUs} from './../../axiosConfigs';

class Contactus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            email:'',
            subject:'',
            message:''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState(
            {
               [e.target.name]:e.target.value,
              
            });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        
        ContactUs(
            this.state.name,
            this.state.email,
            this.state.subject,
            this.state.message
        )
    }

    render() {
        return (
            <div className='contactform'>
                <div className='text-center'>
                    <h2>Talk To Us</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type = 'text' 
                        name ='name' 
                        placeholder ='Your Name' 
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                    <input
                        type = 'text' 
                        name ='email' 
                        placeholder ='Email' 
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                    <input
                        type = 'text' 
                        name ='subject' 
                        placeholder ='Subject' 
                        value={this.state.subject} 
                        onChange={this.handleChange}
                    />
                    <textarea
                        name ='message' 
                        placeholder ='Message' 
                        value={this.state.message} 
                        onChange={this.handleChange}
                    />
            
                    <button className='contact-btn' type='submit'>Send Message</button>
                </form>
            </div>
        )
    }
}

export default Contactus;












  
