import React, {useState} from 'react';
 
function Popup({togglePopup}) {
   
    const [starttime, setStarttime] = useState();
    const [endtime, setEndtime] = useState();
    const [startdate, setStartdate] = useState();
    const [enddate, setEnddate] = useState();
    const [days, setDays] = useState();
    const [message, setMessage] = useState();
    const [status, setStatus] = useState();

    function handleClick() {
   
    }
    function clean() {
   
    }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={togglePopup}>x</span>
        <label>Date Start:&nbsp; &nbsp; </label>
        <input id='inputBox1' value={0} 
        onChange={(e) => {}} 
        placeholder={0}/><br/><br/>

        <label>Answer:&nbsp; &nbsp; </label>
        <input id='inputBox1' value={0} 
        onChange={(e) => { }} 
        placeholder={0}/><br/><br/>

        <label>Question Type: &nbsp; &nbsp; </label>
        <select id='inputBox1' value={0} onChange={(e) => { }}>
            <option value="Blank">(Blank: Must Choose One)</option>
            <option value="Technical">Technical</option>
            <option value="Behavioral">Behavioral</option>
        </select><br/><br/>

        <label>Company:&nbsp; &nbsp; </label>
        <input id='inputBox1' value={0} onChange={(e) => { }} 
        placeholder={0}/><br/><br/>

        <input id='submitBtn' onClick={handleClick} type="submit" value="Submit"></input>
        <input id='submitBtn' onClick={clean} type="reset" value="Reset"></input>
      </div>
    </div>
  );
}
 
export default Popup;
