import React, {useState} from 'react';
import Popup from './Popup.jsx';

export default function ProviderCard({ provider, patient_id, requestInfo, setRequestInfo }) {
    const {email, firstname, lastname, city, state, conditions} = provider;
    // const {username, password, email, firstname, lastname, age, weight, role, address, city, state, zipcode, phone, conditions, language} = info;
    const [isOpen, setIsOpen] = useState(false);

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    return (
        <div id='card'>
            <div>
                <h3>Name: {firstname} {lastname}</h3>
                <h4>Email: {email}</h4>
                <h4>Location: {city}, {state}</h4>
                <h4>Specialization: {conditions}</h4>
                <button id='contactBtn' onClick={togglePopup}>Contact for More Info</button>
            </div>
            <div>
                <img id='profilepic' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="" />
            </div>


            {isOpen && <Popup
            firstname={firstname}
            lastname={lastname}
                conditions={conditions}
            togglePopup={togglePopup}
            provider={provider}
            patient_id={patient_id}
                requestInfo={requestInfo}
                setRequestInfo={setRequestInfo}
            />}
        </div>

    );
}
