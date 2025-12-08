import React, { useContext } from "react";
import { CartContext, UserContext } from "../context/context";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useContext(UserContext);
    const { cart } = useContext(CartContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate("/"); // go back to login
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
                
                <p>cart{cart.length}</p>
                <Link to="/dashboard" className="hover:underline">Home</Link>
                <Link to="/profile" className="hover:underline">Profile</Link>
                {user && <span>Welcome, {user.name}</span>}
                <button
                    onClick={handleLogout}
                    className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
