import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state.from.pathname || "/dashboard"
  console.log(from);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return alert("Enter a username");
    login(username)
    // login(username);
    navigate(from); // redirect to dashboard
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
