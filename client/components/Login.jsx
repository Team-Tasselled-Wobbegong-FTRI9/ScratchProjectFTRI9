import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function makeRequest() {
    if (username === '' || password === '') {
      alert('Please fill out both fields.');
    } else {
        fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      })
      .then(res => res.json())
      .then(data => {
        console.log('from server', data);
        if (data.verify === true) {
          props.updateAppState(data);
          alert('Login Successful!');
          navigate(`/home/${data.username}/${data.id}`);
        } else {
          alert('Check your credentials');
          setUsername('');
          setPassword('');
        }
      })
      .catch(err => console.log(err));
    }
  }

    return (
    <section id='loginbg'>
      <div id='loginsection'>
        <h2>Login</h2>
            <label>Username: </label>
              <input value={username} type="text" onChange={(e) => setUsername(e.target.value)}/><br/><br/>


            <label>Password: </label>
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/><br/><br/>
          <div className="buttons">
              <button id="loginBtn" onClick={makeRequest}>Log in</button>
              <Link to='/signup'>
              <button id="signupBtn">Sign Up</button>
              </Link>
          </div>
      </div>
    </section>
  );
}

