import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading) {
        return <span className="loading loading-spinner loading-lg text-success mx-[550px] my-96"></span>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/signin" replace></Navigate>;
};

export default PrivateRoute;