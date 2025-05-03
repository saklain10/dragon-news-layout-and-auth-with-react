import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivetRoute = ({ children }) => {
    // // if-> user thake tahole children k return kre dibo 
    const { user, loading } = use(AuthContext)
    // console.log(user)

    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <Loading></Loading>

    }

    if (user && user?.email)
        return children;
    // //  navigate --> login
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    // return (
    //     <div>
    //         <h2>This is from privet route</h2>
    //         {children}
    //     </div>
    // );
};

export default PrivetRoute;