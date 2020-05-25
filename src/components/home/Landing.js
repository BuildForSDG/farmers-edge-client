import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import home from './../../assets/home.jpg'

export default class Landing extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url(" + home + ")"}} className='app-container'>
                <div className='Welcome-msg'>
                <h1 className='h1'>We transform the </h1>
                <h1 className='h2'>Agriculture world</h1><br></br>
                <p>We help increase crop production by providing </p>
                <p>affordable and actionable information to a range of</p>
                <p>actors most imporant smallholders farmers</p><br></br>

                <Link to = '/signup' className='btn btn-more'>More</Link>
            </div>
            </div>
        )
    }
}