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
patient_id, provider_id, starttime, endtime, startdate, enddate, days [{M: true}, {T: true},{W: true}, {Th:true}, {F:true} {SAT:true} {SUN:true}], message, status 

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
      console.log('conditions added');
      return next();
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
        console.log('location found');
        console.log(response.rows);
        if (response.rows.length > 0){
          console.log('in location response location', response.rows[0]);
            res.locals.location_id = response.rows[0].id;
            console.log('res locals',res.locals.location_id);
            next();
        } else
        {
          console.log('new location case');
            const queryObj = {
                text: ' INSERT INTO location (city, state, zipcode) VALUES ($1, $2, $3) RETURNING ID ',
                values: [  city, state, zipcode ]
              };
               console.log('new record for locaiton');
              db.query(queryObj)
                .then(response => {
                  console.log("new location created");
                  res.locals.location_id = response.rows[0].id;
                  console.log(res.locals.location_id, response.rows);
                  next();
                });

        }
      
      })
      .catch(err => {
        console.log(`Error trying to retrieve location: ${err}`);
        return next(err);
      })


    
  }
  


appControllers.createProfile = (req, res, next) => {
  console.log(req.body);
  const { age, weight, address, role, phone, language, firstname, lastname } = req.body
  console.log("in createProfile Controller locationid:", res.locals.location_id)
  const queryObj = {
    text: ' INSERT INTO profile (age, weight, address, role, phone, language, firstname, lastname, location_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ',
    values: [ parseInt(age), parseInt(weight), address, role, phone, language, firstname, lastname, res.locals.location_id, res.locals.id ]
  };

  db.query(queryObj)
    .then(response => {
      console.log("profile created");
      res.locals.response = response;
      return next();
    })
    .catch(err => {
      console.log(`Error trying to create profile: ${err}`);
      return next(err);
    });
};

appControllers.loginUser = (req, res, next) => {
  console.log("here is password", req.body);

  
  const queryObj = {
    text: 'SELECT id, username, role FROM user_accounts WHERE password = $1 AND username =$2', 
    values: [req.body.password, req.body.username ]
  };

  db.query(queryObj)
    .then(response => {
    
      if (response.rows.length > 0)
      { 
        res.locals.response = {'verify': true, 'username': response.rows[0].username, 'role': response.rows[0].role, 'id':response.rows[0].id, location_id: res.locals.location_id };
      }else
      {  
        res.locals.response = {'verify': false };

      } 
      return next();
    })
    .catch(err => {
      console.log(`Error trying to find user: ${err}`);
      return next(err);
    });

}

appControllers.getUsers = (req,res,next)=> {

  const username =  req.params.username;
 // Query user_accounts 
 // SELECT id, role FROM user_accounts WHERE username = $1, VALUES [ req.params.username]
 const queryObj = {
  text: 'SELECT id, role FROM user_accounts WHERE username = $1', 
  values: [req.body.username ]
};

}

appControllers.getIdRole = (req, res, next)=> {
console.log('getIdRole');
  
  const queryObj = {
    text: 'SELECT id, username, role FROM user_accounts WHERE id = $1', 
    values: [req.params.id ]
  };

  db.query(queryObj)
  .then(response => {
  
    if (response.rows.length > 0)
    { 
      res.locals.id = response.rows[0].id;
      res.locals.role = response.rows[0].role;
      res.locals.username = response.rows[0].username;
      //console.log('getIDRole Response:', response.rows[0]);
      //console.log('id', res.locals.id);
      //console.log('role', res.locals.role)
     // console.log('username', res.locals.username)
      
    }else
    {  
      res.locals.id = ' ';
      res.locals.role = 'patient';

    } 
    return next();
  })
  .catch(err => {
    console.log(`Error trying to find userID and Role: ${err}`);
    return next(err);
  });

  
};


appControllers.getUserLocation = (req, res, next)=> {

  const queryObj = {
    text: 'SELECT state, zipcode, city FROM location WHERE id = (SELECT location_id FROM profile WHERE user_id = $1);', 
    values: [res.locals.id ]
  };

  db.query(queryObj)
  .then(response => {
  
    if (response.rows.length > 0)
    { 
      res.locals.userCity = response.rows[0].city;
      res.locals.userState = response.rows[0].state;
      res.locals.userZipcode = response.rows[0].zipcode;
      console.log('location', response.rows[0]);
      
    }else
    {  
      res.locals.userCity = ' ';
      res.locals.userState = ' ';
      res.locals.userZipcode = ' ';
    } 
    return next();
  })
  .catch(err => {
    console.log(`Error trying to user location: ${err}`);
    return next(err);
  });

  
};

appControllers.getProviderByCity = (req, res, next) => {

  const queryObj = {
    text: "SELECT * FROM user_accounts u INNER JOIN profile p ON  u.id = p.user_id INNER JOIN location l ON l.id = p.location_id INNER JOIN conditions c ON u.id= c.user_id WHERE u.role = 'provider' AND l.city = $1",
    values: [res.locals.userCity]
  };

  db.query(queryObj)
  .then(response => {
  
    if (response.rows.length > 0)
    { 
      res.locals.providersByCity = response.rows; 
      console.log(res.locals.userCity);
      
    }else
    {  
      res.locals.providersByCity = null; 
    } 
    return next();
  })
  .catch(err => {
    console.log(`Error trying to ProvidersByCity: ${err}`);
    return next(err);
  });



};

appControllers.getProviderByState = (req, res, next) => {

  const queryObj = {
    text: "SELECT * FROM user_accounts u INNER JOIN profile p ON  u.id = p.user_id INNER JOIN location l ON l.id = p.location_id INNER JOIN conditions c ON u.id= c.user_id WHERE u.role = 'provider' AND l.state = $1",
    values: [res.locals.userState]
  };

  db.query(queryObj)
  .then(response => {
  
    if (response.rows.length > 0)
    { 
      res.locals.providersByState = response.rows; 
      console.log(res.locals.providersByState);
      
    }else
    {  
      res.locals.providersByState = null; 
    } 
    return next();
  })
  .catch(err => {
    console.log(`Error trying to ProvidersByState: ${err}`);
    return next(err);
  });



};


appControllers.getProviderByZipcode = (req, res, next) => {

  const queryObj = {
    text: "SELECT * FROM user_accounts u INNER JOIN profile p ON  u.id = p.user_id INNER JOIN location l ON l.id = p.location_id INNER JOIN conditions c ON u.id= c.user_id WHERE u.role = 'provider' AND l.zipcode = $1",
    values: [res.locals.userZipcode]
  };

  db.query(queryObj)
  .then(response => {
  
    if (response.rows.length > 0)
    { 
      res.locals.providersByZipcode = response.rows; 
      console.log(res.locals.providersByZipcode);
      
    }else
    {  
      res.locals.providersByZipcode = null; 
    } 
    return next();
  })
  .catch(err => {
    console.log(`Error trying to ProvidersByState: ${err}`);
    return next(err);
  });



};


appControllers.createRequest = (req, res, next) => {

  const { m, t, w, th, f, sat, sun,  message, status, patient_id,provider_id, starttime, endtime, startdate, enddate } = req.body;

    
  const queryObj = {
    text: ' INSERT INTO request (starttime,endtime, startdate, enddate, message, status, provider_id, patient_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ',
    values: [ starttime, endtime, startdate, enddate,   message, status, provider_id, patient_id]
  };
    
  db.query(queryObj)
  .then(response => {
  
    console.log("Request Record Creation Successful");
    return next();
  })
  .catch(err => {
    console.log(`Error trying to Create New Record Request: ${err}`);
    return next(err);
  });


};

appControllers.getRequest = (req, res, next)=> {

 let queryObj = {};

  if (req.params.role == 'provider')
  {
  queryObj = {
    text: 'SELECT * FROM request WHERE provider_id = $1', 
    values: [req.params.id ]
  };
} else {
  queryObj = {
    text: 'SELECT * FROM request WHERE patient_id = $1', 
    values: [req.params.id ]
  };

}

  db.query(queryObj)
  .then(response => {
  
    if (response.rows.length > 0)
    { 
      res.locals.request = response.rows[0];
     
      console.log('Request Queue', response.rows[0]);
      
    }else
    {  
     res.locals.request = null;

    } 
    return next();
  })
  .catch(err => {
    console.log(`Error trying to find healthcare requests: ${err}`);
    return next(err);
  });

  
};





/* 
/api/signup (Post)
username, password, age (String), weight (String), address (String), city(String), state (String, 2-Letter), zip(String), role (patient, provider) 
menu), zip(String), phone(String), language (String), firstname (String), lastname (String),
conditions (checkbox/toggle alphabetical order - [{hypertension: true}, {diabetes: true}, {cancer: true}, {alzheimers: false}, {dementia: true},, {smoking: true}, { parkinsons: true}, {arthritis:true},{ckd: true}, {copd: true}, {osteoporosis : true}, {stroke: true}


    appControllers.createUser, appControllers.createCondition, appControllers.createProfile */

module.exports = appControllers;

