import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header({vUsername}) {
  return (
    <header className="header container">  
    <div>
        <img id='loginlogo' src={logo} alt="tasselled-wobbegong" />
    </div>
    <div className="header__link">
        <ul className="header__link__logo">
          <li>Welcome, {vUsername}!</li>
            <Link to='/login'>
                <li><button>Log out</button></li>
            </Link>
        </ul>
    </div>

</header>
  );
}
