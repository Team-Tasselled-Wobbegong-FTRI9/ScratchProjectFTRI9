import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Homepage from './Homepage.jsx';



function App() {
    const [verify, setVerify] = useState(false);
    const [id, setId] = useState('');
    const [vUsername, setvUsername] = useState('');
    const [role, setRole] = useState('');

    
function updateAppState(data) {
   
    setvUsername(data.username);
    setId(data.id);
    setRole(data.role);
    setVerify(data.verify);

}
    return (
        <Router>
            <Routes>
                <Route path='/signup' element={
                    <Signup/>
                }/>

                <Route path='/login' element={
                    <Login verify={verify} 
                    setVerify={setVerify} 
                    id={id} 
                    setId={setId} 
                    vUsername={vUsername} 
                    setvUsername={setvUsername} 
                    role={role} 
                    setRole={setRole}
                    updateAppState={updateAppState}/>
                }/>

                <Route path={`/${vUsername}`} element={
                    <div>
                        <Homepage vUsername={vUsername}/>
                    </div>
                }/>
            </Routes>
        </Router>
    );
}
export default App;



