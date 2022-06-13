const { response } = require('express');
const db = require('../models/appModels');

const appControllers = {};
/*
Server:



/api/signup (Post)
username, password, age (String), weight (String), address (String), city(String), state (String, 2-Letter), zip(String), role (patient, provider) 
menu), zip(String), phone(String), language (String), firstname (String), lastname (String),
conditions (checkbox/toggle alphabetical order - [{hypertension: true}, {diabetes: true}, {cancer: true}, {alzheimers: false}, {dementia: true},, {smoking: true}, { parkinsons: true}, {arthritis:true},{ckd: true}, {copd: true}, {osteoporosis : true}, {stroke: true}


    appControllers.createUser, appControllers.createCondition, appControllers.createProfile
















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

/*
SignUp Controllers/Flow
appControllers.createUser, appControllers.createCondition, appControllers.createProfile
*/
appControllers.createUser = (req, res, next) => {

    console.log(req);
    const queryObj = {
        text: 'INSERT INTO user_accounts (username, password, role) VALUES ($1, $2, $3) RETURNING id ',
        values: [req.body.username, req.body.password, req.body.role]
  
      };

  
    db.query(queryObj)
      .then(response => {
       res.locals.id = response.rows[0].id;
       console.log(response);
       next()
  
      }).catch(err =>{
        
        console.log(`Error returning Characters, ${err}`)
        next(err);
    
    });

}


appControllers.createCondition = (req, res, next) => {

  const { alzheimers, arthritis, cancer, ckd, copd, dementia, diabetes , hypertension, parkinsons, osteoporosis, smoking, stroke } = req.body.conditions;

  const queryObj = {
    text: ' INSERT INTO conditions (alzheimers, arthritis, cancer, ckd, copd, dementia, diabetes , hypertension, parkinsons, osteoporosis, smoking, stroke, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) ',
    values: [ alzheimers, arthritis, cancer, ckd, copd, dementia, diabetes , hypertension, parkinsons, osteoporosis, smoking, stroke, res.locals.id ]
  };

  db.query(queryObj)
    .then(response => {
      console.log("conditions added");
      return next()
    })
    .catch(err => {
      console.log(`Error trying to add conditions: ${err}`);
      return next(err);
    })
}

appControllers.createLocation = (req, res, next) => {
    const { city, state, zipcode} = req.body
  

    const locObj = {
        text: 'SELECT * FROM location WHERE zipcode = $1 ',
        values: [req.body.zipcode]
      };


      db.query(locObj)
      .then(response => {
        console.log("location found");
        console.log(response.rows);
        if (response.rows.length > 0){
            res.locals.location_id = response.rows[0].id;
            
        } else
        {
            const queryObj = {
                text: ' INSERT INTO location (city, state, zipcode) VALUES ($1, $2, $3) RETURNING ID ',
                values: [  city, state, zipcode ]
              };
               console.log("new record for locaiton")
              db.query(queryObj)
                .then(response => {
                  console.log("new location created");
                  res.locals.location_id =response.rows[0].id;
                 
                })

        }
      })
      .catch(err => {
        console.log(`Error trying to retrieve location: ${err}`);
        return next(err);
      })


      next();
  }
  


appControllers.createProfile = (req, res, next) => {
  const { age, weight, address, role, phone, language, firstName, lastName } = req.body

  const queryObj = {
    text: ' INSERT INTO profile (age, weight, address, role, phone, language, firstName, lastName) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ',
    values: [ parseInt(age), parseInt(weight), address, role, phone, language, firstName, lastName ]
  };

  db.query(queryObj)
    .then(response => {
      console.log("profile created");
      res.locals.response = response;
      return next()
    })
    .catch(err => {
      console.log(`Error trying to create profile: ${err}`);
      return next(err);
    })
}

appControllers.loginUser = (res, req, next) => {
  const queryObj = {
    text: 'SELECT id, username, role FROM user_accounts WHERE password = $1 AND username =$2', 
    values: [req.password, req.username ]
  };

  db.query(queryObj)
    .then(response => {
      console.log("user found");
      if (response.rows.length > 0)
      {
        res.locals.response({"verify": true, "username": response.rows[0].username, "role": response.rows[0].role, "id":response.rows[0].id  });
      }else
      {
        res.locals.response({"verify": false });

      } 
      return next();
    })
    .catch(err => {
      console.log(`Error trying to find user: ${err}`);
      return next(err);
    })

}

/* 
/api/signup (Post)
username, password, age (String), weight (String), address (String), city(String), state (String, 2-Letter), zip(String), role (patient, provider) 
menu), zip(String), phone(String), language (String), firstname (String), lastname (String),
conditions (checkbox/toggle alphabetical order - [{hypertension: true}, {diabetes: true}, {cancer: true}, {alzheimers: false}, {dementia: true},, {smoking: true}, { parkinsons: true}, {arthritis:true},{ckd: true}, {copd: true}, {osteoporosis : true}, {stroke: true}


    appControllers.createUser, appControllers.createCondition, appControllers.createProfile */

module.exports = appControllers;