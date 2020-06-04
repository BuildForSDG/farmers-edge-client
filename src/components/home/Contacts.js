// import React from 'react'

// export default function Contacts({match}) {
//     return (
//        <h1> Contact us, {match.params.username} </h1>
//     )
// }


import React, { Component } from 'react';

export default class Customers extends Component {
    render() {
        return (
            <div>
                <div className='text-center'>
                    <h2>Talk To Us</h2>
                    <h4>Welcome, first_name </h4>
                    <p className='lead'>Please login/register to view/place your order</p>
                </div>

                <div className='text-center'>
                    <h2>Contact Us</h2>
                    <h4>Welcome, first_name </h4>
                    <p className='lead'>Please login/register to view/place your order</p>
                </div>
            </div>
        )
    }
}
