import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth,} from "../auth";
export const LogOut=()=>{
    const {LogOutUser} =useAuth();
    useEffect(()=>{
        LogOutUser();
        

    }, [LogOutUser]);
    return <Navigate to="/login" />;
};