import React from 'react';
import {Link} from 'react-router-dom'
import {SignUp} from './../../axiosConfigs';

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
                firstName:'',
                surname:'',
                email:'',
		        password:'',
                location:'',
                typeUser:''
            }
    };

    updateState = (inputs) => {
        this.setState(
            {
                [inputs.target.name]:inputs.target.value

            });
    };

    handleSubmit = (event) => {

        event.preventDefault();
            
        SignUp(
            this.state.firstName, this.state.surname, 
            this.state.email, this.state.password,
            this.state.location, this.state.typeUser
        );

        this.props.history.push('/login');
    }
    
    render(){

        const {firstName, surname, email, password, location} = this.state;

        return(
                <div className='register-container'>

                    <div className='form-header'>
                        <p>Sign Up in Farmers Edge</p>
                    </div>

                    <form className='register-form' onSubmit={this.handleSubmit}>
                        <input 
                            type = 'text' 
                            name ='firstName' 
                            placeholder ='First Name' 
                            value={firstName} 
                            onChange={this.updateState}
                            required
                        /> 

                        <input 
                            type = 'text' 
                            name ='surname' 
                            placeholder ='Surname' 
                            value={surname} 
                            onChange={this.updateState}
                            required
                        />
                        
                        <input 
                            type = 'email' 
                            name ='email' 
                            placeholder ='Email' 
                            value={email} 
                            onChange={this.updateState}
                            required
                        />  
			
			            <input 
                            type = 'password' 
                            name = 'password' 
                            placeholder ='Password' 
                            value={password} 
                            onChange={this.updateState}
                            required
                        />

                        <input 
                            type = 'text' 
                            name = 'location' 
                            placeholder ='Location' 
                            value={location} 
                            onChange={this.updateState}
                            required
                        />  
                                                    
                        <select
                            defaultValue = 'Category'
                            name = 'typeUser'
                            onChange={this.updateState}>
                            <option value="Category" disabled>Category</option>
                            <option value="farmer">Farmer</option>
                            <option value="customer">Customer</option>
                        </select>                        
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
