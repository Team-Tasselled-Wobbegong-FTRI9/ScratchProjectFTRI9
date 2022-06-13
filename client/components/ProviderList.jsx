import React from 'react';
import ProviderCard from './ProviderCard.jsx';

export default function ProviderList({providerInfo, patient_id}) {
  // const fake = [{firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'},
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'},
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}    ];

  const providerByCity = [...providerInfo.ZipCode, ...providerInfo.City, ...providerInfo.State];
  const result = providerByCity.map((provider, ind) => <ProviderCard key={`ProviderCard: ${ind}`} provider={provider} patient_id={patient_id}/>);
  return (

    <div id='cardDisplay'>
      {result}
    </div>
  );
}
