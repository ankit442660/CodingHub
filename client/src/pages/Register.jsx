import { useState } from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
// import { useAuth } from "../auth";
import { toast } from "react-toastify";

export const Register = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });
  const navigate=useNavigate();
  //  const {storeTokenInLs}=useAuth();
  //handle the input event
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
  try {
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    // console.log("response data : ", response);
     const responseData = await response.json();
    //  console.log("Response:-", responseData);
    if (response.ok) {
      // const responseData = await response.json();
      //  console.log("Response Token", responseData.token);
      // storeTokenInLs(responseData.token);
      // localStorage.setItem("token",responseData.token);
      setUser({ username: "", email: "", phone: "", password: "" });
      toast.success("GO to your Email Account and Verify it",{
        autoClose :4000,
      });
      navigate("/login");
      // console.log(responseData);
    } else {
      // console.log("error inside response ", "error");
      toast.error(responseData.extraDetails ? responseData.extraDetails[0] : responseData.message);
    }
  } catch (error) {
    console.error("Error", error);
  }
  
  };
  return (
    <>
      <section>
        <main>
          <div className="w-full ">
            <div className="flex flex-col items-center md:flex-row  justify-between md:pt-16 md:pb-10 md:px-40">
              <div className="mb-20 md:mb-0 mt-8 md:mt-0">
                <img
                  src="/register.png"
                  alt="a girl is trying to do registraion"
                  className="w-44 h-44  sm:w-96 sm:h-96 sm:min-w-80 sm:min-h-80"
                />
              </div>
              {/* lets tackle registraion from */}
              <div className="max-w-[550px] sm:w-96 min-w-[220px]">
                <h1 className="uppercase text-slate-400 text-3xl md:pr-10 pr-2">
                  registraion form
                </h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label htmlFor="username" className="uppercase text-white">
                      username:
                    </label>

                    <input
                      type="text"
                      className="rounded-md bg-white text-black p-2 outline-none my-2"
                      name="username"
                      placeholder="enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="uppercase text-white">
                      email:
                    </label>
                    <input
                      type="text"
                      className="rounded-md bg-white text-black p-2 outline-none my-2"
                      name="email"
                      placeholder="enter your email "
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-white">
                      phone:
                    </label>
                    <input
                      type="number"
                      className="rounded-md bg-white text-black p-2 outline-none my-2"
                      name="phone"
                      placeholder="enter your phone no"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password" className="uppercase text-white">
                      password:
                    </label>
                    <input
                      type="password"
                      className="rounded-md bg-white text-black p-2 outline-none my-2"
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
                    size="medium"
                    variant="contained"
                    type="submit"
                    className="uppercase py-3 "
                  >
                    Register Now
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
