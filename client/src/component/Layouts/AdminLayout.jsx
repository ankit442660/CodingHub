import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUsers,FaHome  } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FcServices } from "react-icons/fc";
import { useAuth } from "../../auth";
export const AdminLayout=()=>{
    const {user,isLoading}=useAuth();

    if(isLoading){
    return <h1>Loading ...</h1>
    }
    if(!user.isAdmin){
        return <Navigate to="/" />
    }
    return(
        <>
        {/* <section className="w-full min-h-screen"> */}
        <div >
        <header className="text-white">
            <div>
                <nav className=" border-2 border-white md:mx-20 my-10 md:p-10  ">
                    <ul className="flex  items-start text-2xl gap-7 tracking-wide">
                    <li className=""><NavLink to="/admin/users"><span className="flex justify-center items-center text-indigo-700 " ><FaUsers />  Users</span></NavLink></li>
                    <li><NavLink to="/admin/contacts"><span className="flex justify-center items-center text-indigo-700" ><IoMdContact />  Contact</span></NavLink></li>
                    <li><NavLink to="/service"><span className="flex justify-center items-center text-indigo-700" ><FcServices />  Service</span></NavLink></li>
                    <li><NavLink to="/"><span className="flex justify-center items-center text-indigo-700" ><FaHome />  Home</span></NavLink></li>

                    
                    </ul>
                </nav>
            </div>
        </header>
        </div>
        {/* </section> */}
        <Outlet />
        </>
    )
}