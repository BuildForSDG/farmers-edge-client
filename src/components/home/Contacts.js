// import React from 'react'

// export default function Contacts({match}) {
//     return (
//        <h1> Contact us, {match.params.username} </h1>
//     )
// }


import React, { Component } from 'react'
import './App.css'
import axios from 'axios';

class Contactus extends Component {
    constructor(){
        super()
        this.state={
            sname:'',
            email:'',
            subject:'',
            message:''

        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        this.setState(
            {
               [e.target.name]:e.target.value,
              
            });
    }

    onSubmit(event){

        event.preventDefault(event);
        
        const contact= {
                    sname:this.state.sname,
                    email:this.state.email,
                    subject:this.state.subject,
                    message:this.state.message
                }
          
        axios.post('url',{contact})
                .then(res => {
                    console.log(res)
                })
               
    }
    render() {
        return (
            <div className='contactform'>
                <div className='text-center'>
                    <h2>Talk To Us</h2>
                    <h4>Welcome, first_name </h4>
                    <p className='lead'>Please login/register to view/place your order</p>
                </div>
            <form onSubmit={this.onSubmit}>
                <input 
                    type = 'text' 
                    name ='sname' 
                    placeholder ='Your Name' 
                    value={this.state.sname} 
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
           
                <button className="btn" type='submit'>Send Message</button>
            </form>
                <div className ='col2'>
                    
                </div>
            </div>
        )
    }
}

export default Contactus;












  
