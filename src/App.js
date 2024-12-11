import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onsale from './pages/Onsale';
import Brands from "./pages/Brands"
import Cart from './styles/Cart';
import Shop from './pages/Shop';
import  './component/Navbar';
import Newarrivals from './component/Newarrivals';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Productdetails from './component/Productdetails';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Api from './component/Api';
import ShopCo from './pages/ShopCo';
import Order from './pages/Order';
import Formal from './pages/Formal';
import Gym from './pages/Gym';
import Casual from './pages/Casual';
import Party from './pages/Party';
import UserProvider from './store/userProvider.js';
import Profile from "./pages/Profile.jsx"
// import SearchResults from './component/searchresult.jsx';




function App() {
  return (

    <>
      
      <UserProvider>
      <Router>
    
    
      
      <Navbar/>
      
    
        <Routes>
         
          <Route path="/" element={<Home/>} />
          {/* <Route path="/Shop" element={<Shop />} /> */}
          <Route path="/Onsale" element={<Onsale />} />
          <Route path="/Newarrivals" element={<Newarrivals/>} />
          <Route path="/Brands" element={<Brands />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/Productdetails" element={<Productdetails />} />
          
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Loginpage" element={<Login/>}/>
          <Route path='/ShopCo' element={<ShopCo/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/Formal' element={<Formal/>}/>
          <Route path='/Gym' element={<Gym/>}/>
          <Route path='/Casual' element={<Casual/>}/>
          <Route path='/Party' element={<Party/>}/>
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/search" element={<SearchResults />} /> */}


        </Routes>
      </Router>
      </UserProvider>

    </>
  )
}


export default App;