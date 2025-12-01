// import React, { useContext } from "react";
import { useContext } from "react";
import Navbar from "../component/Navbar";
import { UserContext } from "../context/context";
import Profile from "./Profile";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  // console.log(user);



  return (
    <div>

      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        {user ? (
          <p>Hello, {user.name}! This is your dashboard.</p>
        ) : (
          <p>Please log in to see your dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
