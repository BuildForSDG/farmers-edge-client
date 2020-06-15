import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='p-3 m-3'>
                    <h4 className='text-warning text-center'>FOCUSED ON REDUCING HUNGER </h4>
                    <p> Our mission is to help smallholder farmers in Africa by providing them access to ready market.
                        Farmers Edge helps them to to get market even before their crops are ready for harvest. 
                        Launched in 2020, we use web technology to smartly connect farmers and buyers in a 
                        digital marketplace. In so doing we shall be helping in achieving SDG Goal No. 2 - Zero Hunger
                    </p>
                </div>
                <div className='row about'>
                    <div className='col-lg-4 col-md-6'>
                        <h5>Benefits to the small-scale Farmer</h5> 
                        <ul className='farmer'>
                            <li>Guaranteed Market for their produce</li>
                            <li>Farming advisory </li>
                            <li>Access to financial aid</li>
                            <li>Pricing </li> 
                            <div className='about-farmer-btn'>
                                <Link to='/signup'> Farmer Sign Up</Link>
                            </div>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <h5>Benefits to the Customer</h5>
                        <ul className='customer'>
                            <li>Affordable Prices</li>
                            <li>Assured supply all the time </li>
                            <li>High Quality Produce </li> 
                            <li>Assured food safety</li>
                            <li>Affordable Delivery </li>
                            <div className='about-cutomer-btn'>
                                <Link to='/signup'> Customer Sign Up</Link>
                            </div>
                        </ul>
                    </div>          
                </div>
            </div>
        )
    }
}
export default About;
