import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../scss/sidebar.scss';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Sidebar({ vUsername, id }) {
  const navigate = useNavigate();

  return (
    <Menu>
      <Link to={`/home/${vUsername}/${id}`}>
        <div className="menu-item" >
          Home
        </div>
      </Link>
      <Link to='/profile'>
        <div className="menu-item" >
        Profile
        </div>
      </Link>
      <Link to='/requests'>
        <div className="menu-item" >
        Requests
        </div>
      </Link>
      <Link to='/login'>
        <div className="menu-item" >
          Log out
        </div>
      </Link>
    </Menu>
  );
}