import React, { Component } from 'react'

export default class Product extends Component {
    render() {

        const {productName, totalCost, quantity, waitTime} = this.props;

        return (
            <div>
                <div className="card mr-4 mb-4 mt-2">
                    <div className="card-body">
                        <p className="card-text">Product Name: {productName}</p>
                        <p className="card-text">Total Cost: {totalCost}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Expected Wait time: {waitTime}</p>
                    </div>
                </div>
            </div>
        )
    }
}
