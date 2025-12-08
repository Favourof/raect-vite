import React, { useContext } from 'react'
import { UserContext } from '../Context/context'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext)
    const location = useLocation()
    console.log(user, "this is the username");


    if (!user) {
        return <Navigate to="/" replace state={{ from: location }} />
    }
    return children
}

export default ProtectedRoute