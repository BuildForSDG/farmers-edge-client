import React, { Component } from 'react'
import {getProducts} from './../../axiosConfigs'


export default class Product extends Component {
    componentDidMount(){
        getProducts().then(data => {
            console.log(data);
            this.setState({ products: data });
        });
    }

    render() {

        const {retailerEmail, product, totalCost, quantity, ready} = this.props;

        return (
            <div>
                <div>
                    <p>Retailer Email: {retailerEmail} </p>
                    <p>Product: {product} </p>
                    <p>Marked Price: {totalCost} </p>
                    <p>Quantity: {quantity} </p>
                    <p>Ready: {ready} </p>
                </div>
            </div>
        )
    }
}
