import React from 'react';

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
                firstname:'',
                surname:'',
                Email:'',
                Location:'',
                Phone_number:'',
                Id_number:'',
                Password:'',
                imageUrl: []
            }
        this.updateState = this.updateState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    updateState(inputs){
        this.setState(
            {
                [inputs.target.name]:inputs.target.value,
              
            });
    };
    onSubmit(event){
        event.preventDefault();
        const post ={
             firstname:this.state.firstname,
             surname:this.state.surname,
             Email: this.state.Email,
             Location: this.state.Location,
             Phone_Number:this.state.Location,
             Id_Number: this.state.Id_number,
             Password: this.state.Password,
             imageUrl:this.state.imageUrl
        }
        fetch('api',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data => console.log(data));

    }
    render(){
        return(
                <div className='register-container'>
                    
                    <div className='form-header'>
                        Sign Up to Farmers Edge
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
                            name ='firstname' 
                            placeholder ='First name' 
                            value={this.state.firstname} 
                            onChange={this.updateState}
                            required
                        /> <br/>

                        <input 
                            type = 'text' 
                            name ='surname' 
                            placeholder ='Surname' 
                            value={this.state.surname} 
                            onChange={this.updateState}
                            required
                        /> <br/>
                        
                        <input 
                            type = 'email' 
                            name ='Email' 
                            placeholder ='Email' 
                            value={this.state.Email} 
                            onChange={this.updateState}
                            required
                        />  <br/>
                        <input 
                            type = 'text' 
                            name = 'Location' 
                            placeholder ='Location' 
                            value={this.state.Location} 
                            onChange={this.updateState}
                            required
                        />  <br/>
                        <input 
                            type = 'text' 
                            name ='Phone_number' 
                            placeholder ='Phone Number' 
                            value={this.state.Phone_number} 
                            onChange={this.updateState}
                            required
                        />  <br/>
                        <input 
                            type = 'number' 
                            name = 'Id_number' 
                            placeholder ='Id Number' 
                            value={this.state.Id_number} 
                            onChange={this.updateState}
                            required
                        />  <br/>
                        <input 
                            type = 'password' 
                            name = 'Password' 
                            placeholder ='password' 
                            value={this.state.Password} 
                            onChange={this.updateState}
                            required
                        />  <br/>
                            <label htmlFor='img'>Upload Image:</label><br/>
                        <input 
                            type='file' 
                            ref='img' 
                            name='img' 
                            accept='image/*'
                            value ={this.state.imageUrl}
                            onChange={this.updateState}
                        />
                        <br/>
                        <button className="register-btn" type='submit'>Submit</button>
                    </form> <hr/>
                </div>               
        )
    }
}

export default Register;