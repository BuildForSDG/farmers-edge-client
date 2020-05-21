import React, { Component } from 'react'
import './landing.css'
import Nav from './nav'


class Landing extends Component {
    render() {
        return (
           
            <div className ='container'>
                
                
                <Nav/>
               
                <div className='Welcome-msg'>
                   <h1 className='h1'>We transform the </h1>
                   <h1 className='h2'>Agriculture world</h1><br></br>
                    <p>We help increase crop production by providing </p>
                    <p>affordable and actionable information to a range of</p>
                    <p> actors most imporant smallholders farmers</p><br></br>

                   <a href='#' className='btn btn-more'>Learn More</a>
                   
               </div>
                
              
            </div>
        )
    }
}
export default  Landing;