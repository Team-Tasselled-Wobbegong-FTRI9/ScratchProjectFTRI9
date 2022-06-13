import React, {useEffect, useState} from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ProviderList from './ProviderList.jsx';

export default function Homepage({ vUsername, id, info, setInfo, updateInfo, requestInfo, setRequestInfo }) {

    const [providerInfo, setProviderInfo] = useState({City:[], State:[], ZipCode:[]});
    useEffect(() => {
        console.log('in userEffect username:', vUsername)
        console.log('in userEffect', id);
        fetch(`/api/username/${vUsername}/${id}`)
        .then(response => response.json())
        //getting null value when not found
        .then(data => {
            console.log(data);
            updateInfo(data);
            setProviderInfo(data);

        })
        .catch(err => console.log(err));
    }, []);

 console.log(providerInfo)
  return (
    <div>
      <Header vUsername={vUsername}/>
      <Sidebar vUsername={vUsername} id={id} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <ProviderList patient_id={id} providerInfo={providerInfo} requestInfo={requestInfo} setRequestInfo={setRequestInfo} />
    </div>
  );
}
