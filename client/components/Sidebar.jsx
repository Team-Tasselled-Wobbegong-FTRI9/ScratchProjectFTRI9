import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../scss/sidebar.scss';

export default function Sidebar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/profile">
        Profile
      </a>
      <a className="menu-item" href="/requests">
        Requests
      </a>
      <a className="menu-item" href="/login">
        Log out
      </a>
    </Menu>
  );
}