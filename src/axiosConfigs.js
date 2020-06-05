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
    }

    else if (userType === 'customer') {
      window.location.href = '/customers';
    }
})
//   .catch(err => console.log(err))
}

// consume register enpoint
export const SignUp = (first_name, surname, username, email, password, location, phone_number, id_number,User_type, image) => {
  const data = {
    first_name: first_name,
    surname: surname,
    username: username,
    email: email,
    password: password,
    location: location,
    phone_number: phone_number,
    id_number: id_number,
    User_type: User_type,
    image: image
  }

  console.log(data)

  const url = 'http://localhost:8000/auth/v1/register/';

  axios.post(url, JSON.stringify(data))
  .then(res => {   
    console.log(res.data.user);
    window.location.href = '/login';
  })
  // .catch(err => console.log(err))

}