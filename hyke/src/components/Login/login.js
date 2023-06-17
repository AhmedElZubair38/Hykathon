import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your authentication here
    axios.post('http://localhost:3000/auth/login', {"email" : username, "password": password})
    .then(response => {
      console.log(response.data.access_token);
      localStorage.setItem('access_token', JSON.stringify(response.data.access_token));
      localStorage.setItem('role', response.data.role);

     window.location.href = "/";
    })
    .catch(error => {
      alert("An Error Has Occured");
    });
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
