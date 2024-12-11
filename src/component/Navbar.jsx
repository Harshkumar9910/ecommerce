// import React from 'react'
// import "../styles/Navbar.css";
// import {Link, useNavigate} from "react-router-dom"
  
// function Navbar() {
//   const navigate = useNavigate()

// const token = localStorage.getItem("authToken")

//  const handleLogOut=()=>{
//     localStorage.removeItem("authToken");
//     navigate("/")
//   }

//   const handleLogin=()=>{
//     navigate("/Loginpage")
// }
//   return (
//     <>
//     <div className='container'>
//     < Link to="/" className='SHOP1'><h1>SHOP.CO</h1></Link>
//       <Link to="/shop"className='shop'> shop</Link>
//         <Link to="/Onsale" className='Onsale'> Onsale</Link>
//         <Link to="/NewArrivals" className='New Arrivals'>New Arrivals </Link>
//         <Link to="/Brands" className='Brands'>Brands</Link>
//         <input className="hg" type="text" placeholder="search for product" />
//         <Link to="/cart"> <img className='harsh'  src='/Image/WhatsApp Image 2024-09-11 at 14.48.25_61f269dd.jpg ' width='20px' /> </Link>
//        < Link to="/Order" className='SHOP2'><h1>ORDERS</h1></Link>
//        <span className='logout' onClick={token?handleLogOut:handleLogin}>{token?"Logout":"Login"}</span>
     
        

//     </div>
    
    
//     </>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown state
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  const handleLogin = () => {
    navigate("/Loginpage");
    setIsDropdownOpen(false); // Close dropdown after login
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className='container'>
        <Link to="/" className='SHOP1'>
          <h1>SHOP.CO</h1>
        </Link>
        <Link to="/shop" className='shop'>shop</Link>
        <Link to="/Onsale" className='Onsale'>Onsale</Link>
        <Link to="/NewArrivals" className='New Arrivals'>New Arrivals</Link>
        <Link to="/Brands" className='Brands'>Brands</Link>
        <input className="hg" type="text" placeholder="search for product" />
        <Link to="/cart">
          <img className='harsh' src='/Image/WhatsApp Image 2024-09-11 at 14.48.25_61f269dd.jpg' width='20px' />
        </Link>
        
        {/* Dropdown Button */}
        <div className="dropdown">
        <img
          src='/Image/WhatsApp Image 2024-09-05 at 15.04.14_fd666b08.jpg' // Profile image
          onClick={toggleDropdown}
          width="40"
          height="30"
          className="order"
          alt="Profile"
          />
          {isDropdownOpen && (
            <div className="dropdown-content">
              {/* Conditional links based on login state */}
              {token ? (
                <>
                  <Link to="/Profile" onClick={() => setIsDropdownOpen(false)}>Profile</Link>
                  <Link to="/Order" onClick={() => setIsDropdownOpen(false)}>Orders</Link>
                  <span className="logout" onClick={handleLogOut}>Logout</span>
                </>
              ) : (
                <>
                  <Link to="/Loginpage" onClick={handleLogin}>Login</Link>
                  <Link to="/signup" onClick={() => setIsDropdownOpen(false)}>Signup</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;



// import React, { useState } from 'react';
// import "../styles/Navbar.css";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown state
//   const [searchQuery, setSearchQuery] = useState(""); // Manage search input state
//   const navigate = useNavigate();

//   const token = localStorage.getItem("authToken");

//   const handleLogOut = () => {
//     localStorage.removeItem("authToken");
//     navigate("/");
//     setIsDropdownOpen(false); // Close dropdown after logout
//   };

//   const handleLogin = () => {
//     navigate("/Loginpage");
//     setIsDropdownOpen(false); // Close dropdown after login
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle search submit or enter key press
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery) {
//       // Navigate to the search results page, or modify this to a relevant path
//       navigate(`/search/${searchQuery}`);
//     }
//   };

//   return (
//     <>
//       <div className='container'>
//         <Link to="/" className='SHOP1'>
//           <h1>SHOP.CO</h1>
//         </Link>
//         <Link to="/shop" className='shop'>shop</Link>
//         <Link to="/Onsale" className='Onsale'>Onsale</Link>
//         <Link to="/NewArrivals" className='New Arrivals'>New Arrivals</Link>
//         <Link to="/Brands" className='Brands'>Brands</Link>
        
//         {/* Search Bar */}
//         <form onSubmit={handleSearchSubmit} className="search-form">
//           <input
//             className="hg"
//             type="text"
//             placeholder="search for product"
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//         </form>

//         <Link to="/cart">
//           <img className='harsh' src='/Image/WhatsApp Image 2024-09-11 at 14.48.25_61f269dd.jpg' width='20px' />
//         </Link>
        
//         {/* Dropdown Button */}
//         <div className="dropdown">
//           <img
//             src='/Image/WhatsApp Image 2024-09-05 at 15.04.14_fd666b08.jpg' // Profile image
//             onClick={toggleDropdown}
//             width="40"
//             height="30"
//             className="order"
//             alt="Profile"
//           />
//           {isDropdownOpen && (
//             <div className="dropdown-content">
//               {/* Conditional links based on login state */}
//               {token ? (
//                 <>
//                   <Link to="/Profile" onClick={() => setIsDropdownOpen(false)}>Profile</Link>
//                   <Link to="/Order" onClick={() => setIsDropdownOpen(false)}>Orders</Link>
//                   <span className="logout" onClick={handleLogOut}>Logout</span>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/Loginpage" onClick={handleLogin}>Login</Link>
//                   <Link to="/signup" onClick={() => setIsDropdownOpen(false)}>Signup</Link>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

