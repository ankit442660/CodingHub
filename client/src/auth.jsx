import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const AuthContext=createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider=({children})=>{
const [token,setToken]=useState(localStorage.getItem('token'));
const [user,setUser]=useState();
const [service,setService]=useState([]);
const [isLoading ,setisLoading]=useState(true);
const authorization=`Bearer ${token}`;

    const storeTokenInLs=(serverToken)=>{
         setToken(serverToken);
        return localStorage.setItem("token",serverToken);

    };
    //taking the logout functionality

    let isLoggedIN= !!token;
    //  console.log("isloggedin", isLoggedIN);
    // console.log("token" ,token);

    const LogOutUser=()=>{
        setToken("");
        toast.success("Thank you for Using This Website",{
          position :"top-left",
        })

        return localStorage.removeItem("token");

    };
    //jwt Authentication -to get the currently login user data
    const userAuthentication= async ()=>{
        if(!token){
          setUser("");
        }
        try {
          setisLoading(true);
            const response = await fetch(`https://coding-hub-backend.vercel.app/api/auth/user`, {
              method: "GET",
              headers: {
                Authorization:`Bearer ${token}`,
              },
            });
      
            if (response.ok) {
              const data = await response.json();
      
              // our main goal is to get the user data 👇
              setUser(data.userData);
              setisLoading(false);
            } else {
              console.error("Error fetching user data");
              setisLoading(false);
            }
          } catch (error) {
            console.log(error);
          }
    };
    const userServices= async()=>{
      
      try{
        const response= await fetch(`https://coding-hub-backend.vercel.app/api/data/service`,{
          method:"GET",

        })
        if(response.ok){
          const services=await response.json();
          // console.log(services.response);
          setService(services.response);
          
        }
        else{
          console.log("error from service response");
        }

      }catch(err){
      console.log('error from userservice',err);

     }
  };
   
    
  
     useEffect(() => {
        userAuthentication();
        userServices();
        
       }, [isLoggedIN]);

      

    return (
     <AuthContext.Provider value={{isLoggedIN ,storeTokenInLs ,LogOutUser ,user,service,authorization,isLoading}}>
        {children}
    </AuthContext.Provider>
    );

};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};
