import React from 'react';
import ProviderCard from './ProviderCard.jsx';

export default function ProviderList({providerInfo, patient_id}) {


  // const fake = [{firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'},
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'} ,
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'},
  // {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}  ,  {firstname: 'kevin', lastname: 'park', email: 'kevin@gmail.com', city: 'hi', state: 'hi', conditions: 'hi'}    ];
  let result;
  if (providerInfo.ZipCode === null && providerInfo.City === null && providerInfo.State === null) {
    result = 'No Matching Result';
  } 
  else {
    if (providerInfo.ZipCode === null) {
      providerInfo.ZipCode = [];
    }
    if (providerInfo.City === null) {
      providerInfo.City = [];
    }
    if (providerInfo.State === null) {
      providerInfo.State = [];
    }
    const providerByCity = [...providerInfo.ZipCode, ...providerInfo.City, ...providerInfo.State];
    result = providerByCity.map((provider, ind) => <ProviderCard key={`ProviderCard: ${ind}`} provider={provider} patient_id={patient_id}/>);
  }

  return (
    <div id='cardDisplay'>
      {result}
    </div>
  );
}
