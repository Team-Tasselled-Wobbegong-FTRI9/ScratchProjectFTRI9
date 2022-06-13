import React, {useEffect, useState} from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ProviderList from './ProviderList.jsx';

export default function Homepage({vUsername}) {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(`api/username/${vUsername}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setInfo(data);
        })
        .catch(err => console.log(err));
    });

  return (
    <div>
      <Header vUsername={vUsername}/>
      <Sidebar/>
      <ProviderList info={info}/>
    </div>
  );
}
