import { useEffect, useState } from "react";
import { useAuth } from "../auth";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
export const AdminContact = () => {
  const [users, setusers] = useState([]);
  const { authorization } = useAuth();
  const navigate=useNavigate();
  

  
  const getAllContactData = async () => {
   

    try {
      const response = await fetch(`https://coding-hub-backend.vercel.app/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      const data = await response.json();
      
    //   console.log("user_data", data);
    setusers(data);
    
    
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser=async(id)=>{
    const response=await fetch(`https://coding-hub-backend.vercel.app/api/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{
            Authorization:authorization,
        },
    });
    const data=await response.json();
    if(response.ok){
        getAllContactData();
        toast.success(data.message,{
            autoClose:1500,
        });
    }

  }

  useEffect(() => {
    getAllContactData();
  }, []);
 
  return (
    <>
    {users.length>0?(
      <section className="w-full">
        <h1 className="mx-20 text-slate-500 font-serif text-3xl my-10 text-opacity-70">Admin contact Data</h1>
        <div className="text-center flex justify-center ">
          <table className=" border-2 text-[23px] bg-stone-100 font-serif text-slate-800">
            <thead className="">
              <tr className="border-b-2">
                <th className=" p-4">UserName</th>
                <th className=" p-4">Email</th>
                <th className=" p-4">Message</th>
                <th className="p-4 ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currUser, index) => {
                return (
                  <tr key={index} className="border-b-2 ">
                    <td className="  min-w-32 p-4">{currUser.username}</td>
                    <td className="  min-w-48 p-4">{currUser.email}</td>
                    <td className="min-w-60 max-w-80  p-4">{currUser.message}</td>
                    <td className="  md:min-w-28 p-4"> <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>deleteUser(currUser._id)}> Delete</Button></td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    ):( 
      navigate("/admin"))}

)
    </>
  );
};
