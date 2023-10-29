import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const location = useLocation(); 

    const {user, loading} = useContext(AuthContext); 

    if(user?.email){
        return children; 
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>; 
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoute;