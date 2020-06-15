import React, { Component } from 'react'
import {getOrders} from './../../axiosConfigs'


export default class Product extends Component {

    componentDidMount(){

        getOrders().then(data => {
            console.log(data)
            this.setState({ orders: data });
        });
    }

    render() {

        const {productName, totalCost, quantity, waitTime} = this.props;

        return (
            <div>
                <div className='border border-info rounded'>
                    <p>Product: {productName} </p>
                    <p>Marked Price: {totalCost} </p>
                    <p>Quantity: {quantity} </p>
                    <p>Expected Wait time: {waitTime} </p>
                </div>
            </div>
        )
    }
}
