import React, {useState} from 'react';
import Popup from './Popup.jsx';

export default function ProviderCard({provider, patient_id}) {
    const {email, firstname, lastname, city, state, conditions} = provider;
    // const {username, password, email, firstname, lastname, age, weight, role, address, city, state, zipcode, phone, conditions, language} = info;
    const [isOpen, setIsOpen] = useState(false);

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    return (
        <div id='card'>
            <h3>Name: {firstname} {lastname}</h3>
            <h4>Email: {email}</h4>
            <h4>Location: {city}, {state}</h4>
            <h4>Specialization: {conditions}</h4>
            <button onClick={togglePopup}>Contact for More Info</button>

            {isOpen && <Popup
            firstname={firstname}
            lastname={lastname}
            togglePopup={togglePopup}
            provider={provider}
            patient_id={patient_id}
            />}

        </div>

    );
}
