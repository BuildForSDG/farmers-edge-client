import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import home from './../../assets/home.jpg'

export default class Landing extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url(" + home + ")"}} className='app-container'>
                <div className='mission'>
                <div>
                    <h1 className='caps'> We transform the </h1>
                    <h1 className='caps'> Agriculture world </h1>
                </div><br/>
                <p className='home'> We help increase crop production by providing <br/>
                    affordable and actionable information to a range of <br/>
                    actors, most imporantly smallholder farmers </p><br/>

                <Link to = '/login' className='btn btn-more'>More</Link>
            </div>
            </div>
        )
    }
}