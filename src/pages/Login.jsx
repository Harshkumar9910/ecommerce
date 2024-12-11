import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login1.css";

function Login() {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch("http://localhost:4300/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.token) { // Check if a token is returned for success
        localStorage.setItem("authToken", data.token)
        navigate('/ShopCo');
      } else {
        alert(data.message || 'Login failed. Please try again.'); // Use corrected message property
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Link to="/Loginpage"><button className='login1'>Login</button></Link>
      <Link to="/Signup"><button className='signup1'>Sign up</button></Link>

      <div className='sg1'>
        <h1>Login Page</h1>
        <button className='sg2'>Continue With Google</button>
        <h6 className='or'>OR</h6>
      </div>

      <form className='user' onSubmit={handleSubmit}>
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
        <div className='btsn'>
          <button className='btsn1' type='submit'>Login</button> {/* Updated to "Login" */}
          <h3 className='user11'>Have an account? Sign in</h3>
        </div>
      </form>

      <div className='imgn'>
        <img className='img-container' src="image/girls.png"  alt="kjhf" />
      </div>
    </>
  );
}

export default Login;
