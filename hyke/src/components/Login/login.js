// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//     console.log(username);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     console.log(password);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform your authentication here
//     axios.post('http://localhost:3000/auth/login', {"email" : username, "password": password})
//     .then(response => {
//       console.log(response.data.access_token);
//       localStorage.setItem('access_token', JSON.stringify(response.data.access_token));
//       localStorage.setItem('role', response.data.role);

//      window.location.href = "/";
//     })
//     .catch(error => {
//       alert("An Error Has Occured");
//     });
//   };
  

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username: </label>
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <div>
//           <button type="submit">Log in</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your authentication here
    axios
      .post('http://localhost:3000/auth/login', { email: username, password: password })
      .then((response) => {
        console.log(response.data.access_token);
        localStorage.setItem('access_token', JSON.stringify(response.data.access_token));
        localStorage.setItem('role', response.data.role);
 
        window.location.href = '/';
      })
      .catch((error) => {
        alert('An Error Has Occurred');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray">
      <div className="flex justify-center pb-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-20 h-20 text-blue p-4 bg-blue rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h1 className="title-font text-5xl pb-20 font-bold text-black">Login to SynapTech!</h1>
      <div className="bg-beige w-full max-w-md p-8 rounded-lg shadow-lg">
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-black font-bold">Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="w-full p-2 border-gray rounded border-2"
            />
          </div>
          <div className="mb-4 pb-4">
            <label className="text-black font-bold ">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-2 border-gray rounded border-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue border-gray text-beige font-bold px-4 py-2 rounded hover:bg-blue-dark"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


