import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import ProtectedRoute from "./ProtectedRoute";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute>
                <Profile />
            </ProtectedRoute>} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
};
