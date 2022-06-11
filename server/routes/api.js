const express = require('express');

const appControllers = require('../controllers/appControllers');

const router = express.Router();

/* create a record at user table at signup. retrieve all inputed fields from user.*/

router.post('/signup', appControllers.createUser, appControllers.createCondition, appControllers.createLocation, appControllers.createProfile, (req, res) => {
  console.log("inside router. /signup");
  res.status(200).json(res.locals.res);  
});

/* route login attempts to confirm user's username and password */

router.post('/login', (req, res) => {
  console.log("inside router. /login")
  res.status(200).send('login succssful')
})

/*
'/username/{:username}' Retrieve providers/patient based on match contained in user profile State (or improve the response back) 
*/
router.get('/username/:username', (req, res) => {
    console.log(req.params.username)
    console.log('username:/username route' );
    res.status(200).send("action to grab users:");
}
);


/* Generates new request from patient to initiate provider for services */
router.post('/request', (req, res) => {
    console.log('/request route');
    /*const {patient_id, provider_id, starttime, endtime, startdate, enddate, days , message, status } = req.body; */
  
    res.status(200).send("/request route");
    
  });







module.exports = router;

/*
Server:



/api/signup (Post)
username, password, age (String), weight (String), address (String), city(String), state (String, 2-Letter), zip(String), role (patient, provider) 
menu), zip(String), phone(String), language (String), firstname (String), lastname (String),
conditions (checkbox/toggle alphabetical order - [{hypertension: true}, {diabetes: true}, {cancer: true}, {alzheimers: false}, {dementia: true},, {smoking: true}, { parkinsons: true}, {arthritis:true},{ckd: true}, {copd: true}, {osteoporosis : true}, {stroke: true}



/api/login (Post)
Input ({username: username , password: password})
Response(200, { verify: [true/false], id: [uid], username:[username], role: [role] }


/api/request (POST)
Patient_id, provider_id, starttime, endtime, startdate, enddate, days [{M: true}, {T: true},{W: true}, {Th:true}, {F:true} {SAT:true} {SUN:true}], message, status 

 res(200) - Send All Provider Requests From The Patient Matching Patient ID 


/api/request/{username} (GET)
Patient_id, provider_id, starttime, endtime, startdate, enddate, days [{M: true}, {T: true},{W: true}, {Th:true}, {F:true} {SAT:true} {SUN:true}], message, status 

 res(200) - Send All Provider Requests From The Patient Matching Patient ID 

                          


*/