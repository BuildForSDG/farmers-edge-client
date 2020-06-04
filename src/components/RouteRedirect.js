import React from 'react'
import {Redirect, Route} from 'react-router-dom';

const RouteRedirect = () => {

    // current user token
    let currentUser = localStorage.getItem('isLoggedIn');

    // current user: farmer or customer
    let userType = localStorage.getItem('userType');

    return (
        <Route
            // {...rest}
            render = { () => {

                if (!currentUser) {
                    return (<Redirect to = '/login' />)
                }
            
                else if (currentUser && userType === 'farmer'){
                    return (<Redirect to = '/farmers'/>)
                }
            
                else if (currentUser && userType === 'customer'){
                    return (<Redirect to = '/customers'/>)
                }
            
                else {
                    return (<Redirect to = '/' />)
                }
            }

           }
        />
    );
}

export default RouteRedirect;