const express = require('express');

const appControllers = require('../controllers/appControllers');

const router = express.Router();

/* create a record at user table at signup. retrieve all inputed fields from user.*/

router.post('/signup', appControllers.createUser, appControllers.createCondition, appControllers.createLocation, appControllers.createProfile, (req, res) => {
  console.log('inside router. /signup');
  res.status(200).json(res.locals.response);  
});

/* route login attempts to confirm user's username and password */

router.post('/login',appControllers.loginUser, (req, res) => {
  console.log(req);
  console.log('inside router. /login');
  res.status(200).send(res.locals.response);
})

/*
'/username/{:username}' Retrieve providers/patient based on match contained in user profile State (or improve the response back) 
*/
/*
, appControllers.getUserLocation,appControllers.getProviderByState, appControllers.getProviderByCity,appControllers.getProviderByZipcode


*/
router.get('/username/:username/:id', appControllers.getIdRole, appControllers.getUserLocation, appControllers.getProviderByState, appControllers.getProviderByCity, appControllers.getProviderByZipcode, (req, res) => {
    console.log(req.params.username);
    console.log('username:/username/:id route' );
    res.status(200).json({'ZipCode': res.locals.providersByZipcode,
    'ZipCodeFormatted': res.locals.providersByZipcodeFormatted,
  
    'State':res.locals.providersByState,
    'StateFormatted': res.locals.providersByStateFormatted,

    'City':res.locals.providersByCity,
    'CityFormatted': res.locals.providersByCityFormatted
  });
}
);




/* Generates new request from patient to initiate provider for services */
router.post('/request', appControllers.createRequest, (req, res) => {
    console.log('ran /request route');
    /*const {patient_id, provider_id, starttime, endtime, startdate, enddate, days , message, status } = req.body; */
  
    res.status(200).send('create successful.');
    
  });


/* Generates new request from patient to initiate provider for services */
router.post('/deleteRequest',appControllers.deleteRequest, (req, res) => {
  console.log('ran /deleteRequest route');
  /*const {patient_id, provider_id, starttime, endtime, startdate, enddate, days , message, status } = req.body; */

  res.status(200).send('delete Request Successful');
  
});




  /* gathers request of services for users - must submit user ID, user role*/
router.get('/request/:role/:id', appControllers.getRequest, (req, res) => {
  console.log('ran /request route');
  /*const {patient_id, provider_id, starttime, endtime, startdate, enddate, days , message, status } = req.body; */

  res.status(200).json(res.locals.request);
  
});


  module.exports = router;


  /*Returns list of all user requests need to provide in GET request role {'patient' or 'provider', as well as the user ID}**







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