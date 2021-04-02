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
app.post('/insert', (request, response) => {
    const { member_id, officer_position, officer_task, officer_type} = request.body;
    console.log(member_id, officer_position, officer_task, officer_type)
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertofficer({member_id,officer_type,officer_position,officer_task});

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
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
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
