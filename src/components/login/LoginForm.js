import React from "react";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };

  render() {

    const { email, password } = this.state;

    return (
      <div className='form-container'>
        <div className='form-header'>
          Sign In to Farmers Edge
          <a className='link'
              href='farmers-edge.netlify.com'
              target='_blank'
              rel="noreferrer noopener"
          ><br/>
              farmers-edge.netlify.com 
          </a>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
