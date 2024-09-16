import { useState } from "react";
import Button from "@mui/material/Button";
import { useAuth } from "../auth";
import { toast } from "react-toastify";
export const Contact = () => {
  const [contactUser, contactSetUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  
  const [userData,setUserData]=useState(true);

  const { user }=useAuth();
    
    if(userData && user){
      contactSetUser({
        username: user.username,
        email: user.email,
        message: "",
      })
      setUserData(false);
    }
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    contactSetUser({
      ...contactUser,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactUser);
    
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactUser),
      });
      console.log("response data : ", response);
  
      if (response.ok) {
        const responseData = await response.json();
        toast.success("Message sent Successfully ",{
          autoClose: "1500",
        });
        contactSetUser({
          username: user ? user.username : "",
          email: user ? user.email : "",
          message: "",
        });

        
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }

   
  };
  return (
    <>
      <section>
        <main>
          <div className="w-full">
            <div className=" md:mx-28 md:mt-9 ">
              <h1 className="uppercase text-slate-400 text-3xl">
                Contact Form
              </h1>
              <p className="w-24 border-b-4 border-indigo-700 mt-2 border-r-8"></p>
            </div>
            <div className="flex flex-col items-center md:flex-row  justify-between md:px-28">
              <div className="mb-16 md:mb-0 mt-10 md:mt-0">
                <img
                  className="w-44 h-44  sm:w-96 sm:h-96 sm:min-w-80 sm:min-h-80"
                  src="support.png"
                  alt="login image"
                />
              </div>

              <div className=" max-w-96 sm:min-w-96 min-w-64">
                <br />

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase form-label text-white">
                      username:
                    </label>
                    <input
                      type="text"
                      className="rounded-md bg-zinc-800 text-white p-2 outline-none my-2 form-control"
                      name="username"
                      placeholder="enter your name "
                      id="username"
                      required
                      autoComplete="off"
                      value={contactUser.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="uppercase text-white">
                      email:
                    </label>
                    <input
                      type="email"
                      className="rounded-md bg-zinc-800 text-white p-2 outline-none my-2 form-control"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contactUser.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="uppercase text-white">
                      message:
                    </label>
                    <textarea
                      type="text"
                      className="rounded-md bg-zinc-800 text-white p-2 outline-none my-2 form-control"
                      name="message"
                      placeholder="enter your message"
                      id="message"
                      rows="10"
                      required
                      autoComplete="off"
                      value={contactUser.message}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <Button
                    size="medium"
                    variant="contained"
                    type="submit"
                    className="uppercase py-2 "
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
            <section className="my-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6251238041814!2d85.1129113736141!3d25.61737031455736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5828b506080f%3A0xfc77d50513e2f25c!2sBoring%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1723037421990!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy= "no-referrer-when-downgrade"


              ></iframe>
            </section>
          </div>
        </main>
      </section>
    </>
  );
};
