import React, { useState } from 'react';
import axios from 'axios';

const UserAuth = () => {
  const [isRegistered, setIsRegistered] = useState(true); // Toggle between login and register
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', phone: '', password: '' });

  // Handle login form input
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // Handle registration form input
  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  // Submit registration data to JSON server
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { id: Date.now().toString(), ...registerData }; // Generate a unique ID
      const response = await axios.post('http://localhost:3000/users', newUser); // Assuming JSON server
      if (response.status === 201) {
        alert('Registration successful!');
        setIsRegistered(true); // Switch to login form after registration
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  // Submit login data and check if it matches with registered users
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // First, check if the email exists in the database
      const response = await axios.get(`http://localhost:3000/users?email=${loginData.email}`);
      
      if (response.data.length === 0) {
        // Email doesn't exist
        alert('Email not found. Please register first.');
      } else {
        // Email exists, now check if the password matches
        const user = response.data[0]; // Assume there's only one user per email
        if (user.password === loginData.password) {
          alert('Login successful!');
          // Redirect to the app (you can manage this with routing)
        } else {
          alert('Incorrect password. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      {isRegistered ? (
        // Login Form
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Login</button>
          <p>Not registered? <span onClick={() => setIsRegistered(false)}>Register here</span></p>
        </form>
      ) : (
        // Registration Form
        <form onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerData.name}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={registerData.phone}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleRegisterChange}
            required
          />
          <button type="submit">Register</button>
          <p>Already registered? <span onClick={() => setIsRegistered(true)}>Login here</span></p>
        </form>
      )}
    </div>
  );
};

export default UserAuth;
