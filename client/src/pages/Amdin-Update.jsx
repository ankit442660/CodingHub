import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AdminUpdate = () => {
  const { authorization } = useAuth();
  const params = useParams();
  const navigate=useNavigate();
  // const [data, setData] = useState();
  const [userData,setUserData]=useState({
    username:"",
    email:"",
    phone:"",
  });
  const fetchSingleUserData = async () => {
    try {
      const id = params.id;

      const response = await fetch(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorization,
          },
        }
      );
      const data = await response.json();
      
      setUserData({
        username : data.username,
        email : data.email,
        phone : data.phone,
    })



      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUserdata=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({
        ...userData,
        [name]:value,
    })

  }
  
  const handleSubmit= async(e) => {
    e.preventDefault();
    console.log(userData);
    try{
        
        const response=await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
            method: "PATCH",
            headers:{
              "Content-Type": "application/json",
              Authorization: authorization,
            },
            body : JSON.stringify(userData),
        })
        const response_data=await response.json();
        console.log(response_data);
        if(response.ok){
          toast.success("Updated successfully",{
            autoClose:1500,
          });
          navigate("/admin/users")


        }


    }catch(err){
        console.log(err);
    }

  }


  useEffect(() => {
    fetchSingleUserData();

   
  }, []);

  return (
    <>
      <div>
        <div className="mx-20 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:min-w-80 min-w-64 max-w-96">
              <label
                htmlFor="username"
                className="uppercase form-label text-white"
              >
                username:
              </label>
              <input
                type="text"
                className="rounded-md bg-white text-black p-2 outline-none my-2 form-control"
                name="username"
                placeholder="enter your username "
                id="username"
                required
                autoComplete="off"
                value={userData.username}

                onChange={updateUserdata}

              />
              <label
                htmlFor="email"
                className="uppercase form-label text-white"
              >
                email:
              </label>
              <input
                type="text"
                className="rounded-md bg-white text-black p-2 outline-none my-2 form-control"
                name="email"
                placeholder="enter your email "
                id="email"
                required
                autoComplete="off"
                value={userData.email}

                onChange={updateUserdata}

              />
              <label
                htmlFor="phone"
                className="uppercase form-label text-white"
              >
                phone:
              </label>
              <input
                type="number"
                className="rounded-md bg-white text-black p-2 outline-none my-2 form-control"
                name="phone"
                placeholder="enter your phone "
                id="phone"
                required
                autoComplete="off"
                value={userData.phone}
                onChange={updateUserdata}
                

              />
            </div>
            <br />
                  <Button
                    size="medium "
                    variant="contained"
                    type="submit"
                    className="uppercase py-3 "
                  >
                    Update
                  </Button>
          </form>
        </div>
      </div>
    </>
  );
};
