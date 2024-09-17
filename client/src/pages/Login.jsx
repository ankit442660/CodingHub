import { useState } from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const { storeTokenInLs }=useAuth();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    
    try{
      const response= await fetch(`https://coding-hub-backend.vercel.app/api/auth/login`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(user),
      })
      console.log("response data:",response);
      const response_data= await response.json();
      //console.log(response_data.data.isVerification);
      
      if(response.ok  ){
        // alert("login successful")
        if(!response_data.data.isVerification){
          return  toast.error("Verify Your Email");
   
          }
   
        storeTokenInLs(response_data.token);
        setUser({email:"", password:""});
        toast.success("Login Successful");
        navigate("/");
      }else{
        toast.error(response_data.extraDetails? response_data.extraDetails[0]:response_data.message);
      }
    }
    catch(error){
      console.log(error);
    }
   
  };
  return (
    <>
      <section> 
        <main>
          <div className="w-full ">
            <div className="flex flex-col items-center md:flex-row  justify-between md:pt-16 md:pb-10 md:px-40">
              <div className="mb-16 md:mb-0 mt-10 md:mt-0">
                <img
                  className="w-44 h-44  sm:w-96 sm:h-96 sm:min-w-80 sm:min-h-80"
                  src="/login.png"
                  alt="login image"
                />
              </div>

              <div className="max-w-[500px] min-w-[200px]">
                <h1 className="uppercase text-slate-400 text-3xl ">
                  Login form
                </h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:min-w-80 min-w-64">
                    <label htmlFor="email" className="uppercase form-label text-white">
                      email:
                    </label>
                    <input
                      type="email"
                      className="rounded-md bg-white text-black p-2 outline-none my-2 form-control"
                      name="email"
                      placeholder="enter your email "
                      id="email"
                      
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col sm:min-w-80 min-w-64">
                    <label htmlFor="password" className="uppercase text-white">
                      password:
                    </label>
                    <input
                      type="password"
                      className="rounded-md bg-white text-black p-2 outline-none my-2 form-control"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <Button
                    size="medium "
                    variant="contained"
                    type="submit"
                    className="uppercase py-3 "
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
