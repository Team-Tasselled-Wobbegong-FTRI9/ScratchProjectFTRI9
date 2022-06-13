import React, {useEffect, useState} from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ProviderList from './ProviderList.jsx';

export default function Homepage({vUsername, id, info, setInfo, updateInfo}) {

    useEffect(() => {
        console.log('in userEffect username:', vUsername)
        console.log('in userEffect', id);
        fetch(`/api/username/${vUsername}/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateInfo(data);
        })
        .catch(err => console.log(err));
    });


  console.log(info);
  return (
    <div>
      <Header vUsername={vUsername}/>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <ProviderList info={info}/>
    </div>
  );
}
