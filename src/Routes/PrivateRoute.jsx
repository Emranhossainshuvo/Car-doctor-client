import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext); 

    if(user?.email){
        return children; 
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>; 
    }

    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;