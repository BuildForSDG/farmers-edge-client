import React from 'react';
import './Register.css';


class Register extends React.Component {
    constructor(){
        super()
        this.state = {
                username:'',
                Email:'',
                Location:'',
                Phone_number:'',
                Id_number:'',
                Password:'',
                imageUrl:''
            }
            this.updateState = this.updateState.bind(this);
    };
    updateState(inputs){
        this.setState(
            {
                [inputs.target.name]:inputs.target.value
            });
    };
    render(){
        return(
            <div id ='register'>
                <h1>Famers Sign Up </h1>
                <form id ='formRegister' onSubmit=''>
                    <input 
                        type = 'text' 
                        name ='username' 
                        placeholder ='User Name' 
                        value={this.state.username} 
                        onChange={this.updateState}
                    />
                    <input 
                        type = 'email' 
                        name ='Email' 
                        placeholder ='E_mail' 
                        value={this.state.Email} 
                        onChange={this.updateState}
                    />
                    <input 
                        type = 'text' 
                        name = 'Location' 
                        placeholder ='Location' 
                        value={this.state.Location} 
                        onChange={this.updateState}
                    />
                    <input 
                        type = 'text' 
                        name ='Phone_number' 
                        placeholder ='Phone_Number' 
                        value={this.state.Phone_number} 
                        onChange={this.updateState}
                    />
                    <input 
                        type = 'number' 
                        name = 'Id_number' 
                        placeholder ='Id_Number' 
                        value={this.state.Id_number} 
                        onChange={this.updateState}
                    />
                    <input 
                        type = 'password' 
                        name = 'Password' 
                        placeholder ='password' 
                        value={this.state.Password} 
                        onChange={this.updateState}
                    />
                    <img 
                        src ={"./kales.jpg"}  
                        value ={this.state.imageUrl} 
                        alt='my photo' name=' imageUrl'
                        onChange={this.updateState} 
                    />
                    <input 
                        type='submit' 
                        value ='Register Me'
                    />
            </form>
                <div id= 'display'>
                    <p> Name:  {this.state.username}</p>
                    <p> Email: {this.state.Email}</p>
                    <p> Location: {this.state.Location}</p>
                    <p> Phone: {this.state.Phone_number}</p>
                    <p> Password: {this.state.Password}</p>
                    <p>Id_Number: {this.state.Id_number}</p>
                    <div id = 'image'>
                        {this.state.imageUrl}
                    </div>
                    </div>
            </div>
        )
    };
}

export default Register;