import axios from 'axios';
import { toast } from 'react-toastify'

// const BASE_URL = 'http://127.0.0.1:8000';
const BASE_URL = 'https://be-staging.herokuapp.com';

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  }
};

// axios config
export const axiosGet = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// consume login API endpoint
export const LoginUser = (email, password) => {
  const loginData = {
    email: email,
    password: password
  };

  return axiosGet
    .request({
      method: 'post',
      url: '/auth/v1/login/', 
      data: loginData
    })
    .then(res => {  
    const token = res.data.token;
    const typeOfUser = res.data.user.typeUser;
    const username = res.data.user.userName;
    
    localStorage.setItem('userToken', token);
    localStorage.setItem('userType', typeOfUser);
    localStorage.setItem('username', username);

    if (typeOfUser === 'farmer') {
      window.location.href = '/farmers';

    } else if (typeOfUser === 'customer') {
      window.location.href = '/customers';
    }
  })
}

// consume register API enpoint
export const SignUp = (
  firstName, surname, 
  username, email, 
  password, location, 
  phoneNumber, idNumber, 
  typeUser) => {

  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('surname', surname);
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('location', location);
  formData.append('phoneNumber', phoneNumber);
  formData.append('idNumber', idNumber);
  formData.append('typeUser', typeUser);

  axios.post(`${BASE_URL}/auth/v1/register/`, formData, config)
    .then(res => {  
      toast.success(
        'You have successfully created an account, please check your email to verify your account.'
        );
  })
}

// consume contact API endpoint
export const ContactUs = (name, email, subject, message) => {
  const contactData = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };

  return axiosGet
    .request({
      method: 'post',
      url: '/api/v1/contact/',
      data: contactData
    })
    .then(res => {

      window.location.href = '/contact';
    })  
}

// consume market API endpoint(farm product)
export const cropItem = (
  retailerEmail, product, 
  totalCost, quantity, ready) => {

    const data = {
     retailerEmail:retailerEmail,
     product:product,
     totalCost:totalCost,
     quantity:quantity,
     ready:ready
    }

  // create food product with order
  axios.post(`${BASE_URL}/api/v1/farmer/product/`, data)
    .then(res => {

        window.location.href = '/farmers';
    })
}

// Fetch food product
export const getProducts = async () => {
  const url = `/api/v1/farmer/product/list`;
  const data = await axiosGet
  .request({ 
    method: 'get', 
    url: url
   })
  return data 
}

// consume market API endpoint(customer order)
export const placeOrder = (productName, totalCost, quantity, waitTime) => {
  const data = {
    productName: productName,
    totalCost: totalCost,
    quantity: quantity,
    waitTime: waitTime
  }

  // create order
  axios.post(`${BASE_URL}/api/v1/retailer/order/`, data)
    .then(res => {

        window.location.href = '/customers';
    })
}

// Fetch orders
export const getOrders = async () => {
  const url = `/api/v1/retailer/order/list`;
  const data = await axiosGet
  .request({
    method:'get',
    url: url
  })
  return data   
}

// consume reset password API endpoint
export const ResetPassword = (email) => {
  const passData = {
    email: email,
  }

  return axiosGet
   .request({
     method: 'post',
     url: '/auth/v1/request/',
     data: passData
    })
     .then(res => {
      toast.success(
        'Password reset request sent, please check your email to reset password.'
        );
    }) 
}