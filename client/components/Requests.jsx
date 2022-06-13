import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import RequestCard from './RequestCard.jsx';

export default function Requests({ vUsername, id, info, setInfo, updateInfo, requestInfo }) {

  const result = requestInfo.map((request, ind) => <RequestCard key={`RequestCard: ${ind}`} firstname={request.firstname} lastname={request.lastname} conditions={request.conditions} />)
  console.log('requestInfo in Requests', requestInfo)
  console.log(result)
  return (
    <div>
      <Header vUsername={vUsername} />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      {result}
    </div>
  );
}
