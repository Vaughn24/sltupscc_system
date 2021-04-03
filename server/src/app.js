const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// create
// app.post('/insert', (request, response) => {
//     const { name } = request.body;
//     const db = dbService.getDbServiceInstance();
    
//     const result = db.insertNewName(name);

//     result
//     .then(data => response.json({ data: data}))
//     .catch(err => console.log(err));
// });


// create for officer
app.post('/insertofficer', (request, response) => {
    const { member_id, officer_position, officer_task, officer_type} = request.body;
    // console.log(member_id, officer_position, officer_task, officer_type)
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertofficer({member_id,officer_type,officer_position,officer_task});

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

app.post('/insertmember', (request, response) => {
    const {member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id} = request.body;
    // console.log(member_id, officer_position, officer_task, officer_type)
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertmember({member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id});

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

app.post('/insertloan', (request, response) => {
    const {member_id,loan_principalamount,loan_interestrate,loan_term,loan_status,loan_eligibility} = request.body;
    // console.log(member_id, officer_position, officer_task, officer_type)
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertloan({member_id,loan_principalamount,loan_interestrate,loan_term,loan_status,loan_eligibility});

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

//////////////////////////////READ//////////////
// read for Members
app.get('/getAllmembers', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData("tbl_members");
    
    result
    .then(data => {
        // console.log(data)
        response.json({data : data})})
    .catch(err => console.log(err));

})

app.get('/getAllofficers', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData("tbl_officers");
    
    result
    .then(data => {
        // console.log(data)
        response.json({data : data})})
    .catch(err => console.log(err));

})
app.get('/getAllloan', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData("tbl_loan");
    
    result
    .then(data => {
        // console.log(data)
        response.json({data : data})})
    .catch(err => console.log(err));

})

app.get('/countAllmembers', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.countAllMembers("tbl_members");
    
    result
    .then(data => {
        //console.log(data)
        response.json({data : data})})
    .catch(err => console.log(err));

})







// update
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

// delete
app.delete('/delete/officer/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowByofficerId(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.delete('/delete/member/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowBymemberId(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.delete('/delete/loan/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowByloanId(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});


app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

app.listen(process.env.PORT, () => console.log('app is running'));
