import React from 'react';
import {Link} from 'react-router-dom'
import {SignUp} from './../../axiosConfigs';

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
                firstName:'',
                surname:'',
                username:'',
                email:'',
		        password:'',
                location:'',
                phoneNumber:'',
                idNumber:'',
                userType:'',
                image: ''
            }

        this.updateState = this.updateState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    updateState(inputs) {
        // console.log(inputs.target.value)
        this.setState(
            {
                [inputs.target.name]:inputs.target.value

            });
    };

    onSubmit(event) {

        event.preventDefault();
            
        SignUp(
            this.state.firstName, this.state.surname, 
            this.state.username, this.state.email, 
            this.state.password,this.state.location,
            this.state.phoneNumber, this.state.idNumber,
            this.state.userType, this.state.image
        );

    }
    
    render(){
        return(
                <div className='register-container'>
                    
                    <div className='form-header'>
                        Sign Up in Farmers Edge
                        <a className='link'
                            href='farmers-edge.netlify.com'
                            target='_blank'
                            rel="noreferrer noopener"
                        ><br/>
                            farmers-edge.netlify.com 
                        </a>
                    </div>

                    <form className='register-form' onSubmit={this.onSubmit}>
                        <input 
                            type = 'text' 
                            name ='firstName' 
                            placeholder ='First Name' 
                            value={this.state.firstName} 
                            onChange={this.updateState}
                            required
                        /> 

                        <input 
                            type = 'text' 
                            name ='surname' 
                            placeholder ='Surname' 
                            value={this.state.surname} 
                            onChange={this.updateState}
                            required
                        />

                        <input 
                            type = 'text' 
                            name ='username' 
                            placeholder ='username' 
                            value={this.state.username} 
                            onChange={this.updateState}
                            required
                        />
                        
                        <input 
                            type = 'email' 
                            name ='email' 
                            placeholder ='Email' 
                            value={this.state.email} 
                            onChange={this.updateState}
                            required
                        />  
			
			            <input 
                            type = 'password' 
                            name = 'password' 
                            placeholder ='Password' 
                            value={this.state.password} 
                            onChange={this.updateState}
                            required
                        />

                        <input 
                            type = 'text' 
                            name = 'location' 
                            placeholder ='Location' 
                            value={this.state.location} 
                            onChange={this.updateState}
                            required
                        />  

                        <input 
                            type = 'text' 
                            name ='phoneNumber' 
                            placeholder ='Phone Number' 
                            value={this.state.phoneNumber} 
                            onChange={this.updateState}
                            required
                        />  

                        <input 
                            type = 'text' 
                            name = 'idNumber' 
                            placeholder ='ID Number' 
                            value={this.state.idNumber} 
                            onChange={this.updateState}
                            required
                        />
                            
                        <select
                            // defaultValue = 'Category'
                            name = 'userType'
                            value = {this.state.userType}
                            onChange={this.updateState}>
                            {/* <option value="Category" disabled>Category</option> */}
                            <option value="Farmer">Farmer</option>
                            <option value="Customer">Customer</option>
                        </select>

                        <label htmlFor='img'>Upload Image:</label>
                        <input 
                            type='file' 
                            ref='img' 
                            name='image' 
                            accept='image/*'
                            value ={this.state.image}
                            onChange={this.updateState}
                        />
                        
                        <button className="register-btn" type='submit'>Submit</button>
                    </form> <hr/>
                    <small className = 'text-white'>
                        Already have an account? <Link to = '/login' className = 'text-info'>Login</Link>
                    </small>
                </div>               
        )
    }
}

export default Register;
