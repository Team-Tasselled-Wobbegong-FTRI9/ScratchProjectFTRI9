import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ProviderList from './ProviderList.jsx';

export default function Homepage({vUsername}) {
  return (
    <div>
      <h1>Hello, {vUsername}!</h1>
      <Header/>
      <Sidebar/>
      <ProviderList/>
    </div>
  );
}
