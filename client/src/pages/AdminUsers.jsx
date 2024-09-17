import { useEffect, useState } from "react";
import { useAuth } from "../auth";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
export const AdminUsers = () => {
  const { authorization } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`https://coding-hub-backend.vercel.app/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      const data = await response.json();
      // console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  //delete the user on delete button

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://coding-hub-backend.vercel.app/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorization,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        getAllUsersData();

        toast.success(data.message, {
          autoClose: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="w-full">
      <h1 className="mx-20 text-slate-500 font-serif text-3xl my-10 text-opacity-70">Admin user Data</h1>

        <div className="flex justify-center text-center ">
          <table className=" border-2 text-2xl bg-stone-100 font-serif text-slate-800">
            <thead>
              <tr className="border-b-2 ">
                <th className="  p-4">UserName</th>
                <th className=" p-4">Email</th>
                <th className="  p-4">Phone</th>
                <th className=" p-4">Edit</th>
                <th className="p-4 ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currElem, index) => {
                return (
                  <tr key={index} className="border-b-2 ">
                    <td className="     md:min-w-32 p-4">
                      {currElem.username}
                    </td>
                    <td className="  md:min-w-48 p-4">{currElem.email}</td>
                    <td className="md:max-w-60  p-4">{currElem.phone}</td>
                    <td className=" md: min-w-24 p-4  ">
                      <Link to={`/admin/users/${currElem._id}/edit`}>
                        <button className="px-3 py-2 rounded-md  text-[18px] bg-sky-600 outline-0 text-white hover:translate-x-1 delay-300 hover:text-slate-900 cursor-pointer  hover:rounded-md font-thin">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td className="  md:min-w-28 p-4">
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteUser(currElem._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
