import React, {useState} from 'react';
 
function Popup({togglePopup, firstname, lastname, provider, patient_id}) {
   
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [days, setDays] = useState({
      m: false,
      t: false,
      w: false,
      th: false,
      f: false,
      sat: false,
      sun: false
    });
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('pending');

    function handleClick() {
      const data = {starttime, 
        endtime, 
        startdate, 
        enddate, 
        m: days.m, 
        t: days.t,
        w: days.w,
        th: days.th,
        f: days.f,
        sat: days.sat,
        sun: days.sun,
        message, 
        status, 
        provider_id: provider.id, 
        patient_id}
      fetch('/api/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then()

    }
    function clean() {
   
    }

    function daysHandler(e) {
      if (e.target.checked) {
        const copy = {...days};
        copy[e.target.name] = true;
        setDays(copy);
      } else {
        const copy = {...days};
        copy[e.target.name] = false;
        setDays(copy);
      }
    }

console.log(starttime)
console.log(endtime)
console.log(days)
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={togglePopup}>x</span>
        <div>Patient Request Form:<br/> TO {firstname} {lastname}</div><br/>
        <label>Date Start:&nbsp; &nbsp; </label>
        <input type='date' id='startdate' value={startdate}
        onChange={(e) => {setStartdate(e.target.value);}} /><br/>

        <label>Date End:&nbsp; &nbsp; </label>
        <input type='date' id='enddate' value={enddate}
        onChange={(e) => {setEnddate(e.target.value);}} /><br/><br/>

        <label>Daily Start-Time:&nbsp; &nbsp; </label>
        <input type='time' id='starttime' value={starttime}
        onChange={(e) => {setStarttime(e.target.value);}} /><br/>

        <label>Daily End-Time:&nbsp; &nbsp; </label>
        <input type='time' id='endtime' value={endtime}
        onChange={(e) => {setEndtime(e.target.value);}} /><br/><br/>



        <label>Days:<br/>
            <input type="checkbox" name='m' checked={days.m} onChange={daysHandler} />M&nbsp;&nbsp;
            <input type="checkbox" name='t' checked={days.t} onChange={daysHandler} />T&nbsp;&nbsp;
            <input type="checkbox" name='w' checked={days.w} onChange={daysHandler} />W&nbsp;&nbsp;
            <input type="checkbox" name='th' checked={days.th} onChange={daysHandler} />TH&nbsp;&nbsp;
            <input type="checkbox" name='f' checked={days.f} onChange={daysHandler} />F&nbsp;&nbsp;
            <input type="checkbox" name='sat' checked={days.sat} onChange={daysHandler} />SAT&nbsp;&nbsp;
            <input type="checkbox" name='sun' checked={days.sun} onChange={daysHandler} />SUN&nbsp;&nbsp;
        </label><br/><br/>

        <label>Message:&nbsp; &nbsp; </label>
        <textarea id='inputBox1' col='30' rows='5' value={message} onChange={(e) => {setMessage(e.target.value);}} 
        placeholder='Describe Any Additional Information about Yourself'/><br/><br/>

        <input id='submitBtn' onClick={handleClick} type="submit" value="Submit"></input>
        <input id='submitBtn' onClick={clean} type="reset" value="Reset"></input>
      </div>
    </div>
  );
}
 
export default Popup;
