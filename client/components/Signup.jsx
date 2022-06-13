import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname,] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setStates] = useState('');
    const [zipcode, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [conditions, setConditions] = useState({ 
        alzheimers: false,
        arthritis: false,
        cancer: false,
        ckd: false,
        copd: false,
        dementia: false,
        diabetes: false,
        hypertension: false,
        parkinsons: false,
        osteoporosis: false,
        smoking: false,
        stroke: false});
    const [language, setLanguage] = useState('');
    const [time, setTime] = useState({
        morning: false,
        afternoon: false,
        evening: false,
    });
    const navigate = useNavigate();
    function conditionHandler(e) {
        if (e.target.checked) {
            const copy = {...conditions};
            copy[e.target.name] = true;
            setConditions(copy);
        } else {
            const copy = {...conditions};
            copy[e.target.name] = false;
            setConditions(copy);
        }
    }

    function timeHandler(e) {
        if (e.target.checked) {
            const copy = {...time};
            copy[e.target.name] = true;
            setTime(copy);
        } else {
            const copy = {...time};
            copy[e.target.name] = false;
            setTime(copy);
        }
    }

    function makeRequest() {
        if (username === '' || password === '' || email === '' || firstname === '' || lastname === '' || age === '' 
            || weight === '' || role === '' || address === '' || city === '' || state === '' || zipcode === '' 
            || phone === '' || language === '') {
            alert('Please fill out each field.');
        } else {
            const data = {
                username, 
                password,
                email,
                firstname,
                lastname,
                age,
                weight,
                role,
                address,
                city,
                state,
                zipcode,
                phone,
                conditions,
                language,
                time
            };
            console.log(data);
            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)})
            .catch(err => console.log(err));

            setUsername('');
            setPassword('');
            setEmail('');
            setFirstname('');
            setLastname('');
            setAge('');
            setWeight('');
            setRole('');
            setAddress('');
            setCity('');
            setStates('');
            setZip('');
            setPhone('');
            setConditions({ 
                alzheimers: false,
                arthritis: false,
                cancer: false,
                ckd: false,
                copd: false,
                dementia: false,
                diabetes: false,
                hypertension: false,
                parkinsons: false,
                osteoporosis: false,
                smoking: false,
                stroke: false});
            setLanguage('');
            setTime({
                morning: false,
                afternoon: false,
                evening: false,
            });
            alert('Sign-up Successful');
            navigate('/login');
        }
    }

    return (
    <section>

        <h2>Sign Up</h2>
        <div>
            <label>Username: 
              <input value={username} type="text" onChange={(e) => setUsername(e.target.value)}/><br></br>
            </label>

            <label>Password: </label>
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/><br></br>

            <label>Email: </label>
              <input value={email} type="text" onChange={(e) => setEmail(e.target.value)}/><br></br>
            
            <label>Role: </label>
              <select value={ role } onChange={(e) => { setRole(e.target.value);}}>
                      <option value="Blank">Please select one</option>
                      <option value="patient">Patient</option>
                      <option value="provider">Provider</option>
              </select><br/>
            <label >First Name: </label>
            <input value={firstname} type="text" onChange={(e) => setFirstname(e.target.value)}/><br></br>
            
            <label>Last Name: </label>
            <input value={lastname} type="text" onChange={(e) => setLastname(e.target.value)}/><br></br>
            
            <label>Age: </label>
            <input value={age} type="number" min="0" maxLength={3} onChange={(e) => setAge(e.target.value)}/><br></br>

            <label>Weight: </label>
            <input value={weight} type="number" maxLength={3} onChange={(e) => setWeight(e.target.value)}/><br></br>

            <label>Address: </label>
            <input value={address} type="text" onChange={(e) => setAddress(e.target.value)}/><br></br>
            
            <label>City: </label>
            <input value={city} type="text" onChange={(e) => setCity(e.target.value)}/><br></br>

            <label htmlFor="">State: </label>
            <input value={state} placeholder="CA" type="text" maxLength={2} onChange={(e)=>setStates(e.target.value)}/><br></br>
            
            <label htmlFor="">Zip code: </label>
            <input value={zipcode} type="text" maxLength={5} onChange={(e) => setZip(e.target.value)}/><br></br>
            
            <label>Phone: </label>
            <input value={phone} type="text" maxLength={12} placeholder='123-456-7890' onChange={(e) => setPhone(e.target.value)}/><br></br>
            
            <label>Conditions:
                <input type="checkbox" name='alzheimers' checked={conditions.alzheimers} onChange={conditionHandler} /> Alzheimer&apos;s
                <input type="checkbox" name='arthritis' checked={conditions.arthritis} onChange={conditionHandler} />Arthritis
                <input type="checkbox" name='cancer' checked={conditions.cancer} onChange={conditionHandler} />Cancer
                <input type="checkbox" name='ckd' checked={conditions.ckd} onChange={conditionHandler} />Chronic Kidney Disease
                <input type="checkbox" name='copd' checked={conditions.copd} onChange={conditionHandler} />Chronic Obstructive Pulmonary Disease
                <input type="checkbox" name='dementia' checked={conditions.dementia} onChange={conditionHandler} />Dementia
                <input type="checkbox" name='diabetes' checked={conditions.diabetes} onChange={conditionHandler} />Diabetes
                <input type="checkbox" name='hypertension' checked={conditions.hypertension} onChange={conditionHandler} />Hypertension
                <input type="checkbox" name='parkinsons' checked={conditions.parkinsons} onChange={conditionHandler} />Parkinson&apos;s
                <input type="checkbox" name='osteoporosis' checked={conditions.osteoporosis} onChange={conditionHandler} />Osteoporosis
                <input type="checkbox" name='smoking' checked={conditions.smoking} onChange={conditionHandler} />Smoking
                <input type="checkbox" name='stroke' checked={conditions.stroke} onChange={conditionHandler} />Stroke
            </label><br/>
            
            <label htmlFor="">Primary language: </label>
            <select value={ language } onChange={(e) => { setLanguage(e.target.value);}}>
                      <option value="Blank">Please select one</option>
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="mandarin">Mandarin</option>
                      <option value="korean">Korean</option>
              </select><br/>
            <label htmlFor="">Time: </label>
            {/* <label htmlFor=""> 
                <input type="checkbox" name='morning' checked={time.morning} onChange={timeHandler}/>Morning
                <input type="checkbox" name='afternoon' checked={time.afternoon} onChange={timeHandler}/>Afternoon
                <input type="checkbox" name='evening' checked={time.evening} onChange={timeHandler}/>Evening
            
            </label><br/> */}
        </div>
        <button id="Sign up" onClick={makeRequest}>Sign Up</button>

    </section>
    

    // {username, 
    //     time [{‘morning’: true },{‘afternoon’: true },{‘evening’: true }],
    //     email,
    //     password,
    //     firstname,
    //     lastname, 
    //     age, 
    //     weight, 
    //     address, 
    //     city, 
    //     state (2-letter, dropdown menu), 
    //     zip, 
    //     phone,
    //     conditions (checkbox/toggle alphabetical order - [{hypertension: true}, {diabetes: true}, {cancer: true}, {alzheimers: false}, {dementia: true}, {smoking: true}, { parkinsons: true}, {stroke: true}, {arthritis: true}, {ckd: true}, {copd: true}, {osteoporosis: true}] ), 
    //     role (Patient, Provider, dropdown menu)
    //     language (dropdown menu)}
        

  );
}

