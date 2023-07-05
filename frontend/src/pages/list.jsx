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
  };

  return (
    <div className="bg-gray-100">
      <ToastContainer />
      <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div class="flex flex-col justify-center h-full">
          <div class="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold text-gray-800">Customers</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">S.No#</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Full Name</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Email</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Phone Number</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                    {users.map((user, index) => (
                      <tr key={user.id}>
                        <td class="p-2 whitespace-nowrap">
                          <div class="p-2 text-left">{index + 1}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              {user.name}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">{user.email}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            {user.phone}
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div className="flex mx-auto justify-center px-2">
                            <Link
                              className="w-28 h-8 text-white rounded-md hover:bg-[#5d6169] bg-[#1F2937]"
                              to={{ pathname: "/view/" + user.id }}
                            >
                              <button className="text-center align-center py-1 mx-auto">
                                View
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default List;
