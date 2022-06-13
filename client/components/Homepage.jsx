import React, {useEffect, useState} from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ProviderList from './ProviderList.jsx';

export default function Homepage({vUsername, id, info, setInfo, updateInfo}) {
  console.log(info);
  console.log('hi');

    const [providerInfo, setProviderInfo] = useState({City:[], State:[], ZipCode:[]});
    useEffect(() => {
        console.log('in userEffect username:', vUsername)
        console.log('in userEffect', id);
        fetch(`/api/username/${vUsername}/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateInfo(data);
            setProviderInfo(data);

        })
        .catch(err => console.log(err));
    }, []);

 
  return (
    <div>
      <Header vUsername={vUsername}/>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <ProviderList patient_id={id} providerInfo={providerInfo}/>
    </div>
  );
}
