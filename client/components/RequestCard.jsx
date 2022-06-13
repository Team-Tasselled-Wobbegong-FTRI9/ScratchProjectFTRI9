import React from 'react';

export default function RequestCard({ firstname, lastname, conditions }) {
  const specialty = [];
  for (const [key, value] of Object.entries(conditions)) {
      if (value) {
          specialty.push(key);
      }
  }
  return (
    
    <div id="requestCard">
      <h3>Name: {firstname} {lastname}</h3>
      <h4>Specializations: {specialty.join(', ')}</h4>
      <h4>Status: Pending</h4>
    </div>
  );
}
