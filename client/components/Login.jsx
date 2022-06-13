import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



export default function Login(props) {
  console.log(props);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function makeRequest() {

    
    if (username === '' || password === '') {
      alert('Please fill out both fields.');
    } else {
      const data = {username, password};
     
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({username, password})
      })
      .then(res => res.json())
      .then(data => {
        console.log('from server', data);
       
        if (data.verify === true) {
          console.log(props);
          props.updateAppState(data);
          alert('Login Successful!');
          console.log(data);
       // window.location.href = `api/username/${data.username}`;
        } else {
          alert('Check your credentials');
          props.setUsername('');
          props.setPassword('');
        }
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

