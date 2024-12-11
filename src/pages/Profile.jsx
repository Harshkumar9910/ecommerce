import React, {useState,useEffect } from "react";
import   "../styles/Profile.css";

function Profile() {
  const [user, setUser] = useState(null);  // To store user details
  const [error, setError] = useState(null); // To handle errors
  const [editMode, setEditMode] = useState(false); // To toggle between view/edit mode
  const [updatedUser, setUpdatedUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    alternatePhone: '',
  }); // To store updated user info

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        if (!token) {
          setError('No token found in localStorage');
          return;
        }

        const response = await fetch('http://localhost:4300/Profile/me', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json"
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const data = await response.json();
        setUser(data);  // Set fetched user details
        setUpdatedUser({
          name: data.name || '',  
          email: data.email || '',
          phone: data.phone || '',
          address: data.address || '',
          gender: data.gender || '',
          alternatePhone: data.alternatePhone || '',
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserDetails();
  }, []);

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission for updating user details
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('No token found in localStorage');
      return;
    }

    try {
      const response = await fetch('http://localhost:4300/user/update', {
        method: 'PUT',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser), 
      });

      if (!response.ok) {
        throw new Error('Failed to update user details');
      }

      const data = await response.json();
      setUser(data); // Update user state with new data
      setEditMode(false); // Turn off edit mode after successful update
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>

    <h1 className='infr'>Personal Information</h1>
    <div className='puraa'>
    <div className='mss'>
      {editMode ? (
        <form className='form' onSubmit={handleSubmit}>
          <label className='hgh'>
            Name:
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              className='hghh'
            />
          </label>
          <br />
          <label className='jgh'>
            Email:
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className='gggh'
            />
          </label>
          <br />
          <label className='qpqp'>
            Phone:
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              onChange={handleChange}
              className='fgfg'
            />
          </label>
          <br />
          <label className='gfdd'>
            Address:
            <input
              type="text"
              name="address"
              value={updatedUser.address}
              onChange={handleChange}
              className='lkjh'
            />
          </label>
          <br />
          <label className='gfdd'>
            Gender:
            <input
              type="text"
              name="gender"
              value={updatedUser.gender}
              onChange={handleChange}
              className='lkjh'
            />
          </label>
          <br />
          <label className='gfdd'>
            Alternate Phone:
            <input
              type="text"
              name="alternatePhone"
              value={updatedUser.alternatePhone}
              onChange={handleChange}
              className='lkjh'
            />
          </label>
          <br />
          <button type="submit">Update Profile</button>
          <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
        </form>
      ) : (
        <div className='mnmm'>
          <form className='form'>
          <label className='hgh'>
           Name:
            <input
              type="text"
              name="Name"
              value={user.name || 'Not provided'}
              className='hghh'
            />
          </label>

          <label className='jgh'>
           Email:
            <input
              type="text"
              name="Email"
              value={user.email || 'Not provided'}
              className='gggh'
            />
          </label>
          <label className='qpqp'>
          Phone:
            <input
              type="text"
              name="Phone"
              value={user.phone || 'Not provided'}
              className='fgfg'
            />
          </label>
          <label className='gfdd'>
          Address:
            <input
              type="text"
              name="Address"
              value={user.address || 'Not provided'}
              className='lkjh'
            />
          </label>
          <label className='gfdd'>
          Gender:
            <input
              type="text"
              name="Gender"
              value={user.gender || 'Not provided'}
              className='lkjh'
            />
          </label>

          <label  className='gfdd'>
          Alternate Phone:
            <input
              type="text"
              name="Alternate Phone"
              value={user.alternatePhone || 'Not provided'}
              className='lkjh'
            />
          </label>

          <button onClick={() => setEditMode(true)} className='tt'>Edit Profile</button>
          </form> 
        </div>       

      )}        

    </div>  
    </div>
    </>
    
  );

}

export default Profile;
