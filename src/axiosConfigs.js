import axios from 'axios';

// consume login endpoint
export const LoginUser = (email, password) => {
         
    let data = {
            email: email,
            password: password
        }
    
    axios.post('http://127.0.0.1:8000/auth/v1/login/', data)
        .then(res => {
            
        let token = res.data.token;
        let userType = res.data.user.User_type;
        // let userName = res.data.username;
        
        localStorage.setItem("isLoggedIn", token);
        localStorage.setItem("userType", userType);
        // localStorage.setItem("userName", userName);

        if (userType === 'farmer'){
            window.location.href = '/farmers';
        }
    
        else if (userType === 'customer'){
            window.location.href = '/customers';
        }
    })
}

// consume register enpoint
export const SignUp = (
    first_name, surname, 
    email, password, location, 
    phone_number, id_number,
    User_type, image
    ) => {

    let data = {
        first_name: first_name,
        surname: surname,
        // username: username,
        email: email,
        password: password,
        location: location,
        phone_Number: phone_number,
        id_number: id_number,
        User_type: User_type,
        image: image
    };

    axios.post('http://127.0.0.1:8000/auth/v1/register/', data)
            .then(res => {
                
                console.log(res.data.status);
            
            window.location.href = '/login';
        })

    }