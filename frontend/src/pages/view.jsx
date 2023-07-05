import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../apis/api";
import Footer from "../components/footer/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const View = (props) => {
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      await api.get("/users/" + id + "/edit").then((res) => {
        setTimeout(() =>toast.success("Data fetched successfully !", {
          position: toast.POSITION.TOP_CENTER,
        }), 1000);
        setInputs({
          name: res.data.name,
          email: res.data.email,
        });
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleDelete = () => {
    api.delete("/users/" + id).then((res) => {
      toast.error("Deleted Successfully !", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => navigate("/list"), 5000);
    });
  };

  const handleEdit = () => {
    navigate("/edit/" + id);
  };

  return (
    <div>
      <ToastContainer />
      <section>
        <div className="flex h-screen flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mt-8 h-16 w-16 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
              Success
            </h1>
            <div>
              <div className="flex mx-auto justify-center">
                <p className="my-4 text-center text-sm text-gray-500 font-bold">
                  Name:&nbsp;
                </p>
                <p className="my-4 text-center text-sm text-gray-500">
                  {inputs.name}
                </p>
              </div>
              <div className="flex mx-auto justify-center">
                <p className="my-4 text-center text-sm text-gray-500 font-bold">
                  Email:&nbsp;
                </p>
                <p className="my-4 text-center text-sm text-gray-500">
                  {inputs.email}
                </p>
              </div>
              <div className="flex mx-auto justify-center">
                <p className="my-4 text-center text-sm text-gray-500 font-bold">
                  Phone:&nbsp;
                </p>
                <p className="my-4 text-center text-sm text-gray-500">
                  {inputs.phone}
                </p>
              </div>
            </div>
            <div className=" flex mx-auto justify-center space-x-4 bg-gray-100 py-4 text-center">
              <button
                onClick={handleDelete}
                className="flex rounded-md bg-red-500 px-6 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400"
              >
                <FaTrashAlt style={{ color: "#fff", fontSize: "25px", paddingRight: "10px"  }} />
                Delete
              </button>
              <button
                onClick={handleEdit}
                className="flex rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
              >
                <FaEdit style={{ color: "#fff", fontSize: "25px", paddingRight: "10px"  }}/>
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default View;
