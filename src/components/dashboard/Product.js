import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            ready: false
        }
    }

    onChangeCheckbox = event => {
        this.setState({
            ready: event.target.checked
        })
    }

    render() {

        const {retailerEmail, product, totalCost, quantity} = this.props;
        const{ready} = this.state;

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
                        onChange={this.onChangeCheckbox} 
                        />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
