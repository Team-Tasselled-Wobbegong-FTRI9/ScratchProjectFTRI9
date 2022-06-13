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
      <a className="menu-item" href="/providers">
        Providers
      </a>
      <a className="menu-item" href="/logout">
        Log out
      </a>
    </Menu>
  );
}