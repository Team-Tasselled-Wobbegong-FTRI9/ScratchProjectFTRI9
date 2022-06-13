import React from 'react';
import ProviderCard from './ProviderCard.jsx';

export default function ProviderList({info}) {

  const result = info.map((provider, ind) => <ProviderCard key={`ProviderCard: ${ind}`} info={info}/>);
  return (


    <div>ProviderList
      {result}
    </div>
  );
}
