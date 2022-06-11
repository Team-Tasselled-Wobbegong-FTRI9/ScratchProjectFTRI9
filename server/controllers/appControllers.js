
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