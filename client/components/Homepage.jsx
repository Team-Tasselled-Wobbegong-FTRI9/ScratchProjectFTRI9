import React, {useEffect, useState} from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ProviderList from './ProviderList.jsx';

export default function Homepage({vUsername, id}) {

    const [info, setInfo] = useState([]);
  console.log(id);
    
    useEffect(() => {
        fetch(`/api/username/${vUsername}/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setInfo(data);
        })
        .catch(err => console.log(err));
    }, []);

  return (
    <div>
      <Header vUsername={vUsername}/>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <ProviderList info={info}/>
    </div>
  );
}
