import React from 'react';

export default function RequestCard({ firstname, lastname, conditions }) {
  return (
    <div id="requestCard">
      <h3>Name: {firstname} {lastname}</h3>
      <h4>Specializations: {conditions}</h4>
      <h4>Status: Pending</h4>
    </div>
  )
}
