import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header() {
  return (
    <header className="header container">  
    <div>
        <img id='loginlogo' src={logo} alt="tasselled-wobbegong" />
    </div>
    <div className="header__link">
        <ul className="header__link__logo">
            <Link to='/login'>
                <li><button>Log out</button></li>
            </Link>
        </ul>
    </div>

</header>
  );
}
