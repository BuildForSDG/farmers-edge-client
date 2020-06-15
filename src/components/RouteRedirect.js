import React from 'react'
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({Component, ...rest}) => {

    // current user token
    const currentUser = localStorage.getItem('userToken');

    // current user: farmer or customer
    const userType = localStorage.getItem('userType');

    return (
        <Route {...rest} 
            render = { props => 
                {
                    if (!currentUser) {
                        return (<Redirect to = {{ 
                            pathname: '/login',
                            state: {from: props.location}
                        }} />)
                    }
                    else if (currentUser && userType === 'farmer'){
                        return (<Redirect to = {{pathname: '/farmers'}} />)
                    }
                    else if (currentUser && userType === 'customer'){
                        return (<Redirect to = {{pathname: '/customers'}} />)
                    }
                    else {
                        return (<Component {...rest} />)
                    }
                }

            }
        />
    );
}

export default ProtectedRoute;


// export const PrivateRoute = ({ component: Component, ...rest }) => (
    
//     <Route
//       {...rest}
//       render={props =>
//         props.userToken !== undefined ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );