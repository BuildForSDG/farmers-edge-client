import React, { Component } from 'react'
import {placeOrder} from './../../axiosConfigs';
import Order from './Order'

export default class Farmers extends Component {
    constructor(props){
        super(props);

        this.state = {
            productName:'',
            totalCost:'',
            quantity: '',
            waitTime:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        placeOrder(
            this.state.productName, this.state.totalCost,
            this.state.quantity, this.state.waitTime
        );
    }

    render() {

        const {productName, totalCost, quantity, waitTime} = this.state;

        const username = localStorage.getItem('username');

        return (
            <div className='coontainer'>
                <div className='text-center'>
                    <h4>Welcome, {username}</h4>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        {/* <h5>Place your order</h5> */}
                        <form className='add-product' onSubmit={this.handleSubmit}>                           
                            <input 
                            type = 'text'
                            name='productName'
                            value={productName}
                            placeholder = 'Enter Product Name'
                            onChange={this.handleChange}
                            />

                            <input 
                            type = 'text'
                            name='totalCost'
                            value={totalCost}
                            placeholder = 'Enter Price'
                            onChange={this.handleChange}
                            />

                            <input 
                            type = 'text'
                            name='quantity'
                            value={quantity}
                            placeholder = 'Quantity Ordered'
                            onChange={this.handleChange}
                            />

                            <input 
                            type = 'text'
                            name='waitTime'
                            value={waitTime}
                            placeholder = 'Expected wait time'
                            onChange={this.handleChange}
                            />
                            
                            <button className="login-btn" type="submit">Order</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <h5>Orders you placed</h5>

                        <Order />
                        {/* {
                            orders.map((order, id) => {
                                return <Order key={id} order={order} />
                            } )
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}
