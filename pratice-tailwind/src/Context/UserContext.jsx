import React, { useState } from "react";
import { UserContext } from '../Context/context'



export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const login = (username) => {
        setUser({ name: username });
    };


    const logout = () => {
        setUser(null);
    };
    


    const value = {
        user,
        login,
        logout,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
