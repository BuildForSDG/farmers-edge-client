import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


const BASE_URL = 'http://localhost:8000';

const config = {     
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

// consume login API endpoint
export const LoginUser = (email, password) => {
  const data = {
    email: email,
    password: password
  }
  axios.post(`${BASE_URL}/auth/v1/login/`, data)
    .then(res => {  
    const token = res.data.token;
    const typeOfUser = res.data.user.typeUser;
    // let userName = res.data.username;
    
    localStorage.setItem('isLoggedIn', token);
    localStorage.setItem('userType', typeOfUser);
    // localStorage.setItem("userName", userName);

    if (typeOfUser === 'farmer') {
      window.location.href = '/farmers';

    } else if (typeOfUser === 'customer') {
      window.location.href = '/customers';
    }
})
//   .catch(err => console.log(err))
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

     toast.success('You have successfully created an account,please check your email to verify your account.',
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
      
    window.location.href = '/signup';
  })
 // .catch(err => console.log(err))
}

// consume contact API endpoint
export const ContactUs = (name, email, subject, message) => {
  const data = {
    name: name,
    email: email,
    subject: subject,
    message: message
  }

  axios.post(`${BASE_URL}/api/v1/contact/`, data)
    .then(res => {
        console.log(res)

        window.location.href = '/contact';
    })

}

// consume market API endpoint(farm product)
export const Product = (product, totalCost, quantity, ready) => {
  const data = {
    product: product,
    totalCost: totalCost,
    quantity: quantity,
    ready: ready
  }

  // create product ordered
  axios.post(`${BASE_URL}/api/v1/farmer/product/`, data)
    .then(res => {
        console.log(res)

        window.location.href = '/login';
    })

    // Fetch ordered product detail
    axios.get(`${BASE_URL}/api/v1/farmer/product/`)
    .then(res => {
        const product = res.data

        window.location.href = '/login';
    })
}

// consume market API endpoint(customer order)
export const Order = (productName, totalCost, quantity, waitTime) => {
  const data = {
    productName: productName,
    totalCost: totalCost,
    quantity: quantity,
    waitTime: waitTime
  }

  // create order
  axios.post(`${BASE_URL}/api/v1/retailer/order/`, data)
    .then(res => {
        console.log(res)

        window.location.href = '/customers';
    })

    // Fetch order
    axios.get(`${BASE_URL}/api/v1/retailer/order/`)
    .then(res => {
        const order = res.data

        window.location.href = '/customers';
    })
}

// consume reset password API endpoint
export const ResetPassword = (email) => {
  const data = {
    email:email,
  }

  axios.post(`${BASE_URL}/api/v1/passwordreset/`, data)
    .then(res => {
        console.log(res)

        window.location.href = '/login';
    })

}