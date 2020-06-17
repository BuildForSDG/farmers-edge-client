import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='p-2 m-3'>
                    <h4 className='text-center'>FOCUSED ON REDUCING HUNGER </h4>
                    <p> Our mission is to help smallholder farmers in Africa by providing them access to ready market.
                        Farmers Edge helps them to to get market even before their crops are ready for harvest. 
                        Launched in 2020, we use web technology to smartly connect farmers and buyers in a 
                        digital marketplace. In so doing we shall be helping in achieving SDG Goal No. 2 - Zero Hunger
                    </p>
                </div>
                <div className='row about'>
                    <div className='col-lg-4 col-md-6 rounded'>
                        <div className="card mr-4 mb-4 mt-2">
                            <div className="card-body">
                                <div className="card-title"><h5>Benefits to the small-scale Farmer</h5></div>
                                <ul className='farmer'>
                                    <li>Assured Market</li>
                                    <li>Farming advisory </li>
                                    <li>Access to financial aid</li>
                                    <li>Prompt payment</li> 
                                    <div className='card-footer about-farmer-btn'>
                                        <Link to='/signup' className='btn btn-info'> Sign Up</Link>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className="card mr-4 mb-4 mt-2 rounded">
                            <div className="card-body">
                                <div className="card-title"><h5>Benefits to the Customer</h5></div>
                                <ul className='customer'>
                                    <li>Affordable Prices</li>
                                    <li>Assured supply all the time </li>
                                    <li>High Quality Produce </li> 
                                    <li>Assured food safety</li>
                                    <li>Affordable Delivery </li>
                                    <div className='card-footer about-customer-btn'>
                                        <Link to='/signup' className='btn btn-info'> Sign Up</Link>
                                    </div>
                                </ul>
                            </div>
                        </div> 
                    </div>        
                </div>
            </div>
        )
    }
}
export default About;
