// Menu.js
import React, { useContext } from 'react';
import { UserContext } from  "./userContext"

const Menu = () => {
    // Use useContext to get login status and toggle function
    const { isLoggedIn, toggleLogin } = useContext(UserContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h2>Menu</h2>
            {isLoggedIn ? (
                <>
                    <span role="img" aria-label="cart">🛒</span>  {/* Cart icon */}
                    <button onClick={toggleLogin}>Logout</button>
                </>
            ) : (
                <button onClick={toggleLogin}>Login</button>
            )}
        </div>
    );
};

export default Menu;