import React from 'react';
import ProviderCard from './ProviderCard.jsx';

export default function ProviderList({info}) {
  // const fake = [{firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'},
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'},
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}    ];

  const providerByCity = info.City;
  const result = providerByCity.map((provider, ind) => <ProviderCard key={`ProviderCard: ${ind}`} provider={provider}/>);
  return (

    <div id='cardDisplay'>
      {result}
    </div>
  );
}
