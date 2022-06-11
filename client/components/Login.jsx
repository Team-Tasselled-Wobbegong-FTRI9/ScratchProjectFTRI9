import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login({verify, setVerify, id, setId, vUsername, setvUsername, role, setRole}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function makeRequest() {
    if (username === '' || password === '') {
      alert('Please fill out both fields.');
    } else {
      const data = {username, password};
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        setVerify(data.verify);
        setId(data.id);
        // setvUsername(data.username);
        setRole(data.role);
      })
      .catch(err => console.log(err));

    //   if (!verify) {
    //       alert('Check your credentials');
    //       setUsername('');
    //       setPassword('');
    //   } else {
    //       alert('Login Successful!');
    //       window.location.href = `/${vUsername}`;
    //   }

      if (username === 'angel') {
        console.log('angel is username');
        setvUsername(username);
        console.log('vUsername: ', vUsername);
        alert('Login Successful!');
        window.location.href = `/${vUsername}`;
      } else {
        alert('Check your credentials');
        setUsername('');
        setPassword('');
      }

    }
  }

    return (
      <div>
      <h2>Login</h2>
            <label>Username: 
              <input value={username} type="text" onChange={(e) => setUsername(e.target.value)}/><br></br>
            </label>

            <label>Password: </label>
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/><br></br>
              <button id="Log in" onClick={makeRequest}>Log in</button>
              <Link to='/signup'>
                <button>Sign Up</button>
              </Link>

      </div>
  );
}

