import React, { Component } from 'react'

export default class Product extends Component {
    render() {

        const {retailerEmail, product, totalCost, quantity, ready, onChangeCheckbox} = this.props;

        return (
            <div>
                <div className="card mr-4 mb-4 mt-2">
                    <div className="card-body">
                        <p className="card-text">Retailer Email: {retailerEmail}</p>
                        <p className="card-text">Product: {product}</p>
                        <p className="card-text">Marked Price: {totalCost}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Ready: <input 
                        type="checkbox"
                        name ="ready"
                        checked={ready}
                        onChange={onChangeCheckbox} 
                        />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
