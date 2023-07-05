import React, { useState, useEffect } from "react";
import api from "../apis/api";
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      await api.get("/users").then((res) => {
        setTimeout(() => setUsers(res.data), 1000);
        setTimeout(
          () =>
            toast.success("Data fetched successfully !", {
              position: toast.POSITION.TOP_CENTER,
            }),
          1000
        );
        console.log("API data", res.data);
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleView = () => {
    navigate("/view/" + id);
  }

  return (
    <div>
      <section className="mb-44 pb-44">
        <div className="md:px-32 py-8 w-full">
          <div className="shadow overflow-hidden rounded border-b border-gray-200">
            <table className="min-w-full bg-white">
              <ToastContainer />
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    S.No#
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Full Name
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Email
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone
                  </th>
                  <th className="-text-left py-3 px-4 uppercase font-semibold text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="text-left py-3 px-4">{index + 1}</td>
                    <td className="w-1/3 text-left py-3 px-4">{user.name}</td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:{user.email}"
                      >
                        {user.email}
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        {user.phone_number}
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <div className="flex px-4">
                        <button 
                        // onClick={handleView} 
                        className="w-28 h-8 text-white rounded-md hover:bg-[#5d6169] bg-[#1F2937]">
                          <Link
                            className="btn btn-primary"
                            to={{ pathname: "/view/" + user.id }}
                          >
                            View
                          </Link>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default List;
