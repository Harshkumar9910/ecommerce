import React, { useState } from 'react';
import { UserContext } from "../store/userContext"

const UserProvider = ({ children }) => {
    // State to track if the user is logged in
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Toggle login state
    const toggleLogin = () => {
        setIsLoggedIn((prevStatus) => !prevStatus);
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;