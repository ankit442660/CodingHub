import { NavLink } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Navbar.css";
import { useState } from "react";
import { useAuth } from "../auth";
export const Navbar = () => {
  const {isLoggedIN}=useAuth();
  const [value, setValue] = useState(false);
  const toogleNavBar = () => {
    setValue(!value);
  };
  return (
    <>
      <header>
        <div className="w-full h-16 flex justify-between items-center px-4 md:px-20">
          <div className="text-2xl md:text-3xl text-blue-700">
            <NavLink href="/">CodingHub</NavLink>
          </div>
          <nav className="hidden md:block">
            <ul className=" md:flex  md:gap-6  text-blue-600">
              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/service">Services</NavLink>
              </li>

              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/contact">Contact</NavLink>
              </li>
             {isLoggedIN ? (
              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ):( 
              <>
            <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/login">Login</NavLink>
              </li>
              </>
            )}
              
             
            </ul>
          </nav>
          <div className="md:hidden">
            <DehazeIcon
              className="text-3xl text-white"
              onClick={toogleNavBar}
              value={value}
            ></DehazeIcon>
          </div>
        </div>
      </header>
      <nav className="hidden" style={{ display: value ? "block" : "none" }}>
        <ul className="w-full   flex flex-col items-center    text-slate-500 ">
          <li className="hover:text-indigo-300 cursor-pointer text-[20px]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-indigo-300 cursor-pointer text-[20px]">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-indigo-300 cursor-pointer text-[20px]">
            <NavLink to="/service">Services</NavLink>
          </li>

          <li className="hover:text-indigo-300 cursor-pointer text-[20px]">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {isLoggedIN ? (
              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ):( 
              <>
            <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="hover:text-slate-300 cursor-pointer text-[22px]">
                <NavLink to="/login">Login</NavLink>
              </li>
              </>
            )}
          
        </ul>
      </nav>
    </>
  );
};
