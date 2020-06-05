import axios from 'axios';

// consume login endpoint
export const LoginUser = (email, password) => {
  const data = {
    email: email,
    password: password
  }
  axios.post('http://localhost:8000/auth/v1/login/', data)
    .then(res => {  
    const token = res.data.token;
    const userType = res.data.user.User_type;
    // let userName = res.data.username;
    
    localStorage.setItem('isLoggedIn', token);
    localStorage.setItem('userType', userType);
    // localStorage.setItem("userName", userName);

    if (userType === 'farmer') {
      window.location.href = '/farmers';
    } else if (userType === 'customer') {
      window.location.href = '/customers';
    }
})
//   .catch(err => console.log(err))
}

// consume register enpoint
export const SignUp = (
  firstName, surname, 
  username, email, 
  password, location, 
  phoneNumber, idNumber, 
  userType, image) => {
  const data = {
    firstName: firstName,
    surname: surname,
    username: username,
    email: email,
    password: password,
    location: location,
    phoneNumber: phoneNumber,
    idNumber: idNumber,
    userType: userType,
    image: image
  }
  // console.log(data)
  const url = 'http://localhost:8000/auth/v1/register/';
  axios.post(url, JSON.stringify(data))
  .then(res => {   
    // console.log(res.data.user);
    window.location.href = '/login';
  })
  // .catch(err => console.log(err))
}