
// import React, { useState } from 'react';
// import styles from "../styles/Login1.css";
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
    
//   });
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4300/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Navigate to the login page on successful signup
//         navigate("/Loginpage");
//       } else {
//         // Handle errors (e.g., show message)
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

// //   if (response.ok && data.success) { // Assuming data.success indicates a successful login
        
// //     navigate('/Loginpage');
// //   } else {
// //     alert(data.message || 'Login failed. Please try again.'); // Provide a fallback message
// //   }
// // } catch (error) {
// //   console.error('Error:', error);
// //   alert('An error occurred. Please try again.');
// // }
// // };

//   return (
//     <>
//       <Link to="/Loginpage"><button className='login1'>Login</button></Link>
//       <Link to="/Signup">
//       <button className='signup1'>Sign up</button>
//       </Link>

//       <div className='sg1'>
//         <h1>Sign Up Page</h1>
//         <button className='sg2'>Continue With Google</button>
//         <div className='sg3'></div>
//         <h6 className='or'>OR</h6>
//         <div className='sg4'></div>
//       </div>

//       <form className='user' onSubmit={handleSubmit}>
//         <h4 className='user1'>Name</h4>
//         <input
//           className='user2'
//           type='text'
//           name='name'
//           placeholder='Name'
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <h4 className='user1'>Email Address</h4>
//         <input
//           className='user2'
//           type='email'
//           name='email'
//           placeholder='Email Address'
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <h4 className='user11'>Password</h4>
//         <input
//           className='user3'
//           type='password'
//           name='password'
//           placeholder='Password'
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         {/* <h4 className='user1'>City</h4>
//         <input
//           className='user2'
//           type='text'
//           name='city'
//           placeholder='City'
//           value={formData.city}
//           onChange={handleChange}
//         /> */}
//         {/* <h4 className='user1'>Phone</h4>
//         <input
//           className='user2'
//           type='text'
//           name='phone'
//           placeholder='Phone'
//           value={formData.phone}
//           onChange={handleChange}
//         />
//          */}
//         <div className='btsn'>
//           <button className='btsn1' type='submit'>Sign Up</button>
//           <h3 className='user11'>Have an account? Sign in</h3>
//         </div>
//       </form>

//       <div className='imgn'>
//         <h1 className='imgs1'>Shop.co</h1>
//         <img src="/Images/naughtygirls.png" width="700px" alt="" />
//       </div>
//     </>
//   );
// }

// export default Signup;  
   


// import React, { useState } from 'react';
// import styles from "../styles/Login1.css";
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
    
//   });
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

 
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:4300/user/create", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
      
      
//       // Check if the response is OK and if data indicates a successful login
//       if (response.ok && data.success) { // Assuming data.success indicates a successful login
        
//         navigate('/ShopCo');
//       } else {
//         alert(data.message || 'Login failed. Please try again.'); // Provide a fallback message
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };
  

//   return (
//     <>
//       <Link to="/Loginpage"><button className='login1'>Login</button></Link>
//       <Link to="/Signup"><button className='signup1'>Sign up</button> </Link>

//       <div className='sg1'>
//         <h1>login Up Page</h1>
//         <button className='sg2'>Continue With Google</button>
//         <div className='sg3'></div>
//         <h6 className='or'>OR</h6>
//         <div className='sg4'></div>
//       </div>

//       <form className='user' onSubmit={handleSubmit}>
//         {<h4 className='user1'>Name</h4> }
//         <input
//           className='user2'
//           type='text'
//           name='name'
//           placeholder='Name'
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <h4 className='user1'>Email Address</h4>
//         <input
//           className='user2'
//           type='email'
//           name='email'
//           placeholder='Email Address'
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <h4 className='user11'>Password</h4>
//         <input
//           className='user3'
//           type='password'
//           name='password'
//           placeholder='Password'
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
       
        
//         <div className='btsn'>
//           <button className='btsn1' type='submit'>Sign In</button>
//           <h3 className='user11'>Have an account? Sign in</h3>
//         </div>
//       </form>

//       <div className='imgn'>
//         <h1 className='imgs1'>Shop.co</h1>
//         <img src="/Images/naughtygirls.png" width="600px" alt="" />
//       </div>
//     </>
//   );
// }

//  export default Signup   

// import React from 'react'
// import "../design/login1.css";
// import { Link } from 'react-router-dom';

// function Signup() {
//   return (
//     <>

//    <Link to="/Loginpage" ><button className='login1'>Login</button></Link>
//     <button className='signup1'>Sign up</button>

//     <div className='sg1'> <h1>Sign Up Page </h1>
//     <button className='sg2'> Continue With Google</button>
//     <div className='sg3'></div>
//     <h6 className='or'>OR</h6>
//     <div className='sg4'></div>
//    </div>
   
    
//    <div className='user'>
//    <h4 className='user1'>user name or email address</h4>
//    <input className='user2' type='text' placeholder='username or email address' />
//     <h4 className='user11'>password</h4>
//     <input className='user3' type='password' placeholder='passward'/>
    
//     </div>
//     <div className='btsn'>
//     <button className='btsn1'>Sign Up</button>
//     <h3 className='user11'>Have an account? Sign in</h3>
//     </div>
//     <div className='imgn'>
//        <h1 className='imgs1'>Shop.co</h1>
//     <img src="/Images/naughtygirls.png" width="700px" alt="" />
//     </div>
  
//     </>
//   )
// }

// export default Signup  
import React, { useState } from 'react';
import styles from "../styles/Login1.css";
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    
  });
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4300/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
  //     if (response.ok) {
  //       // Navigate to the login page on successful signup
  //       navigate('/Loginpage');
  //     } else {
  //       // Handle errors (e.g., show message)
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred. Please try again.');
  //   }
  // };


  if (response.ok && data.success) { // Assuming data.success indicates a successful login
        
    navigate('/Loginpage');
  } else {
    alert(data.message || 'Login failed. Please try again.'); // Provide a fallback message
  }
} catch (error) {
  console.error('Error:', error);
  alert('An error occurred. Please try again.');
}
};

  return (
    <>
      <Link to="/Loginpage"><button className='login1'>Login</button></Link>
      <button className='signup1'>Sign up</button>

      <div className='sg1'>
        <h1>Sign Up Page</h1>
        <button className='sg2'>Continue With Google</button>
        <div className='sg3'></div>
        <h6 className='or'>OR</h6>
        <div className='sg4'></div>
      </div>

      <form className='user' onSubmit={handleSubmit}>
        <h4 className='user1'>Name</h4>
        <input
          className='user2'
          type='text'
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <h4 className='user1'>Email Address</h4>
        <input
          className='user2'
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <h4 className='user11'>Password</h4>
        <input
          className='user3'
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* <h4 className='user1'>City</h4>
        <input
          className='user2'
          type='text'
          name='city'
          placeholder='City'
          value={formData.city}
          onChange={handleChange}
        /> */}
        {/* <h4 className='user1'>Phone</h4>
        <input
          className='user2'
          type='text'
          name='phone'
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
        />
         */}
        <div className='btsn'>
          <button className='btsn1' type='submit'>Sign Up</button>
          <h3 className='user11'>Have an account? Sign in</h3>
        </div>
      </form>

      <div className='imgn'>
        <img className='img-container' src="image/girls.png"  alt="kjhf" />
      </div>
    </>
  );
}

export default Signup;