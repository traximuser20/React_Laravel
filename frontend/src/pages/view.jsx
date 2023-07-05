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
        setTimeout(
          () =>
            toast.success("User fetched successfully !", {
              position: toast.POSITION.TOP_CENTER,
            }),
          1000
        );
        setInputs({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
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
    <div className="bg-gray-100">
      <ToastContainer />
      <section>
        <div className="flex h-screen flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <div className=" font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-md overflow-hidden bg-white duration-300 hover:scale-105 hover:shadow-xl">
              <img
                className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="product designer"
              />
              <h1 className="text-lg text-gray-700"> {inputs.name} </h1>
              <h3 className="text-sm text-gray-400 "> Admin </h3>
              <div className="flex mx-auto justify-center my-4">
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
              <div className="flex justify-center space-x-4">
                <button className="bg-green-500 hover:bg-green-400 flex px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
                  <FaEdit
                    style={{
                      color: "#fff",
                      fontSize: "25px",
                      paddingRight: "10px",
                    }}
                  />
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-400 flex px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
                  <FaTrashAlt
                    style={{
                      color: "#fff",
                      fontSize: "25px",
                      paddingRight: "10px",
                    }}
                  />
                  Delete
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
