import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import { UserContext } from "../context/context";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        {user ? (
          <div className="bg-white shadow-md p-4 rounded max-w-md">
            <p className="mb-2">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Joined:</span> {user.joined}
            </p>
          </div>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
