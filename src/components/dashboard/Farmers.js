import React, { Component } from 'react'
import {cropItem, getProducts} from './../../axiosConfigs';
import Product from './Product';

export default class Farmers extends Component {
    constructor(props){
        super(props);

        this.state = {
            retailerEmail: '',
            product:'',
            totalCost:'',
            quantity: '',
            ready: false,
            products: []
        }
    }

    async componentDidMount(){
        const {data} = await getProducts();
        this.setState({
            products: data
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onChangeCheckbox = event => {
        this.setState({
            ready: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        cropItem(
            this.state.retailerEmail, this.state.product, 
            this.state.totalCost, this.state.quantity, this.state.ready
        );
    }

    render() {

        // const loggedInUser = localStorage.getItem('username');
        const {retailerEmail, product, totalCost, quantity, ready, products} = this.state;

        return (
            <div className='coontainer'>
                <div className='text-center mt-2'>
                {/* <h4>Welcome, { loggedInUser }</h4> */}
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <form className='add-product' onSubmit={this.handleSubmit}>
                            <input 
                            type = "email"
                            placeholder = "Enter email"
                            name="retailerEmail"
                            value={retailerEmail}
                            onChange={this.handleChange}
                            />

                            <input 
                            type = "text"
                            placeholder = "Enter Product Name"
                            name="product"
                            value={product}
                            onChange={this.handleChange}
                            />

                            <input 
                            type = "text"
                            placeholder = "Enter Price"
                            name="totalCost"
                            value={totalCost}
                            onChange={this.handleChange}
                            />

                            <input 
                            type = "text"
                            placeholder = "Enter Quantity"
                            name="quantity"
                            value={quantity}
                            onChange={this.handleChange}
                            />

                            <input 
                            type="checkbox" 
                            name ="ready"
                            checked={ready} 
                            onChange={this.onChangeCheckbox} 
                            />

                            <button className='login-btn' type='submit'>Add</button>
                        </form>

                    </div>
                    <div className='col-md-6'>
                        <h5 className='text-center m-4'> Your food produce</h5>
                         <div>
                            {
                                products.map(product => {
                                    return <Product
                                            key={product.id}
                                            retailerEmail = {product.retailerEmail}
                                            product = {product.product}
                                            totalCost = {product.totalCost}
                                            quantity = {product.quantity}
                                            ready = {product.ready}                                        
                                            />;
                                } )
                            } 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
