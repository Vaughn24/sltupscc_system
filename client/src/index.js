// function handleUpdateOfficer() {
//   let member_id = document.querySelector("#member_id").value
//   let officer_position = document.querySelector("#officer_position").value
//   let officer_task = document.querySelector("#officer_task").value
//   let officer_type = document.querySelector("#officer_type").value
//   let body = {
//     member_id, officer_position, officer_task, officer_type
//   }
//   console.log(body)
//   fetch('http://localhost:5000/insertofficer',
//   {
//     method:"PUT", 
//     body:  JSON.stringify(body),
//     headers: {'Content-Type': 'application/json'}
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))

//   location.reload();
//   return false;
// }


function handleSubmitNewOfficer() {
  let member_id = document.querySelector("#member_id").value
  let officer_position = document.querySelector("#officer_position").value
  let officer_task = document.querySelector("#officer_task").value
  let officer_type = document.querySelector("#officer_type").value
  let body = {
    member_id, officer_position, officer_task, officer_type
  }
  console.log(body)
  fetch('http://localhost:5000/insertofficer',
  {
    method:"POST", 
    body:  JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}

function handleSubmitNewMember() {
  let member_fname = document.querySelector("#member_fname").value
  let member_lname = document.querySelector("#member_lname").value

  let member_birthdate = document.querySelector("#member_birthdate").value

  let member_occupation = document.querySelector("#member_occupation").value
  let member_education = document.querySelector("#member_education").value
  let member_email = document.querySelector("#member_email").value
  let member_age = document.querySelector("#member_age").value
  
  let member_sex = document.querySelector("#member_sex").value

  let member_status = document.querySelector("#member_status").value
  let member_school = document.querySelector("#member_school").value
  let member_shares = document.querySelector("#member_shares").value
  let loan_status = document.querySelector("#loan_status").value
  let subs_id = document.querySelector("#subs_id").value

  let body = {
    member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id
  }
  console.log(body)
  fetch('http://localhost:5000/insertmember',
  {
    method:"POST", 
    body:  JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}

function handleSubmitNewloan() {
  let member_id = document.querySelector("#member_id").value
  let loan_principalamount = document.querySelector("#loan_principalamount").value
  let loan_interestrate = document.querySelector("#loan_interestrate").value
  let loan_term = document.querySelector("#loan_term").value
  let loan_status = document.querySelector("#loan_status").value
  let body = {
    member_id,loan_principalamount,loan_interestrate,loan_term,loan_status
  }
  console.log(body)
  fetch('http://localhost:5000/insertloan',
  {
    method:"POST", 
    body:  JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}



/// SHOW REGISTRATION MODAL ADD

let showModal = false;

function showRegistrationModal() {

  let modal = document.querySelector(".modal");
  let modalContainer = document.querySelector(".modal-container");


  if(!showModal){
    
    showModal = true;
    modalContainer.style.opacity = 1
    modalContainer.style.pointerEvents = "all"
    modal.style.transform = "translate(-50%,-50%) scale(1)"
    modal.style.opacity = 1
    modal.style.pointerEvents = "all"
    

  }
  else{
    showModal = false;
    modalContainer.style.opacity = 0
    modalContainer.style.pointerEvents = "none"
    modal.style.transform = "translate(-50%,-50%) scale(0.5)"
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
  }
}

/// END of SHOW REGISTRATION MODAL ADD



//DELETE

function handleDeleteOfficer(officerMID) {


  let body = {
    id: officerMID
  }
  console.log(body)
  fetch(`http://localhost:5000/delete/officer/${officerMID}`,
  {
    method:"DELETE", 
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}

function handleDeleteMember(MemberID) {


  let body = {
    id: MemberID
  }
  console.log(body)
  fetch(`http://localhost:5000/delete/member/${MemberID}`,
  {
    method:"DELETE", 
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}


function handleDeleteLoan(loanMID) {

  let body = {
    id: loanMID
  }
  console.log(body)
  fetch(`http://localhost:5000/delete/loan/${loanMID}`,
  {
    method:"DELETE", 
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}

//DELETE

/// SHOW REGISTRATION MODAL UPDATE

let showModal2 = false;

function showRegistrationModal2(member_id) {

  let modal = document.querySelector(".modal2");
  let modalContainer = document.querySelector(".modal-container2");

  try{
    const member_id_u = document.querySelector(`#officer-${member_id}`).innerHTML
    const officer_type = document.querySelector(`#officer-type-${member_id}`).innerHTML
    const officer_position = document.querySelector(`#officer-position-${member_id}`).innerHTML
    const officer_task = document.querySelector(`#officer-task-${member_id}`).innerHTML

    document.querySelector("#member_id-u").value = member_id_u
    document.querySelector("#officer_type-u").value = officer_type
    document.querySelector("#officer_position-u").value = officer_position
    document.querySelector("#officer_task-u").value = officer_task

  }
  catch(err){

  }

  if(!showModal2){
    
    showModal2 = true
    modalContainer.style.opacity = 1
    modalContainer.style.pointerEvents = "all"
    modal.style.transform = "translate(-50%,-50%) scale(1)"
    modal.style.opacity = 1
    modal.style.pointerEvents = "all"
    
  }
  else{

    showModal2 = false
    modalContainer.style.opacity = 0
    modalContainer.style.pointerEvents = "none"
    modal.style.transform = "translate(-50%,-50%) scale(0.5)"
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
  }
  
}

/// END of SHOW REGISTRATION MODAL UPDATE

//UPDATE

/// OFFICER
function handleUpdateOfficer() {

  let member_id = document.querySelector("#member_id-u").value
  let officer_position = document.querySelector("#officer_position-u").value
  let officer_task = document.querySelector("#officer_task-u").value
  let officer_type = document.querySelector("#officer_type-u").value

  let body = {
    member_id,
    officer_type,
    officer_position,
    officer_task
  }
  console.log(body)
  fetch(`http://localhost:5000/update/officer`,
  {
    method:"PUT",
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}

///LOAN

let showModal3 = false;

function showRegistrationModal3(member_id) {

  let modal = document.querySelector(".modal3");
  let modalContainer = document.querySelector(".modal-container3");

  try{
    const member_id_u = document.querySelector(`#loan-${member_id}`).innerHTML
    const loan_principalamount = document.querySelector(`#loan-principalamount-${member_id}`).innerHTML
    const loan_interestrate = document.querySelector(`#loan-interestrate-${member_id}`).innerHTML
    const loan_term = document.querySelector(`#loan-term-${member_id}`).innerHTML
    const loan_status = document.querySelector(`#loan-status-${member_id}`).innerHTML
    

    document.querySelector("#member_id-u").value = member_id_u
    document.querySelector("#loan_principalamount-u").value = loan_principalamount
    document.querySelector("#loan_interestrate-u").value = loan_interestrate
    document.querySelector("#loan_term-u").value = loan_term
    document.querySelector("#loan_status-u").value = loan_status

  }
  catch(err){

  }

  if(!showModal3){
    
    showModal3 = true
    modalContainer.style.opacity = 1
    modalContainer.style.pointerEvents = "all"
    modal.style.transform = "translate(-50%,-50%) scale(1)"
    modal.style.opacity = 1
    modal.style.pointerEvents = "all"
    
  }
  else{

    showModal3 = false
    modalContainer.style.opacity = 0
    modalContainer.style.pointerEvents = "none"
    modal.style.transform = "translate(-50%,-50%) scale(0.5)"
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
  }
  
}


function handleUpdateLoan() {

  let member_id = document.querySelector("#member_id-u").value
  let loan_principalamount = document.querySelector("#loan_principalamount-u").value
  let loan_interestrate = document.querySelector("#loan_interestrate-u").value
  let loan_term = document.querySelector("#loan_term-u").value
  let loan_status = document.querySelector("#loan_status-u").value

  let body = {
    member_id,
    loan_principalamount,
    loan_interestrate,
    loan_term,
    loan_status
  }
  console.log(body)
  fetch(`http://localhost:5000/update/loan`,
  {
    method:"PUT",
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}


// MEMBER


let showModal4 = false;

function showRegistrationModal4(member_id) {

  let modal = document.querySelector(".modal4");
  let modalContainer = document.querySelector(".modal-container4");

  try{

    const member_id_u = document.querySelector(`#member-${member_id}`).innerHTML

    const member_fname = document.querySelector(`#member-fname-${member_id}`).innerHTML
    
    const member_lname = document.querySelector(`#member-lname-${member_id}`).innerHTML

    // const member_birthdate = document.querySelector(`#member-birthdate-${member_id}`).innerHTML

    const member_occupation = document.querySelector(`#member-occupation-${member_id}`).innerHTML

    const member_education = document.querySelector(`#member-education-${member_id}`).innerHTML
    const member_email = document.querySelector(`#member-email-${member_id}`).innerHTML
    const member_age = document.querySelector(`#member-age-${member_id}`).innerHTML
    const member_sex = document.querySelector(`#member-sex-${member_id}`).innerHTML
    const member_status = document.querySelector(`#member-status-${member_id}`).innerHTML
    const member_school = document.querySelector(`#member-school-${member_id}`).innerHTML
    const member_shares = document.querySelector(`#member-shares-${member_id}`).innerHTML
    const loan_status = document.querySelector(`#member-status-${member_id}`).innerHTML
    const subs_id = document.querySelector(`#member-subsid-${member_id}`).innerHTML   
    

    document.querySelector("#member_id-u").value = member_id_u
    document.querySelector("#member_fname-u").value = member_fname
    document.querySelector("#member_lname-u").value = member_lname
    document.querySelector("#member_birthdate-u").value = member_birthdate
    document.querySelector("#member_occupation-u").value = member_occupation
    document.querySelector("#member_education-u").value = member_education
    document.querySelector("#member_email-u").value = member_email
    document.querySelector("#member_age-u").value = member_age
    document.querySelector("#member_sex-u").value = member_sex
    document.querySelector("#member_status-u").value = member_status
    document.querySelector("#member_school-u").value = member_school
    document.querySelector("#member_shares-u").value = member_shares
    document.querySelector("#loan_status-u").value = loan_status
    document.querySelector("#subs_id-u").value = subs_id

  }
  catch(err){

  }

  if(!showModal4){
    
    showModal4 = true
    modalContainer.style.opacity = 1
    modalContainer.style.pointerEvents = "all"
    modal.style.transform = "translate(-50%,-50%) scale(1)"
    modal.style.opacity = 1
    modal.style.pointerEvents = "all"
    
  }
  else{

    showModal4 = false
    modalContainer.style.opacity = 0
    modalContainer.style.pointerEvents = "none"
    modal.style.transform = "translate(-50%,-50%) scale(0.5)"
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
  }
  
}


function handleUpdateMember() {


  let member_id = document.querySelector("#member_id-u").value
  let member_fname = document.querySelector("#member_fname-u").value
  let member_lname = document.querySelector("#member_lname-u").value
  let member_birthdate = document.querySelector("#member_birthdate-u").value
  let member_occupation = document.querySelector("#member_occupation-u").value
  let member_education = document.querySelector("#member_education-u").value
  let member_email = document.querySelector("#member_email-u").value
  let member_age = document.querySelector("#member_age-u").value
  let member_sex = document.querySelector("#member_sex-u").value
  let member_status = document.querySelector("#member_status-u").value
  let member_school = document.querySelector("#member_school-u").value
  let member_shares = document.querySelector("#member_shares-u").value
  let loan_status = document.querySelector("#loan_status-u").value
  let subs_id = document.querySelector("#subs_id-u").value


  let body = {
    member_id,
    member_fname,
    member_lname,
    member_birthdate,
    member_occupation,
    member_education,
    member_email,
    member_age,
    member_sex,
    member_status,
    member_school,
    member_shares,
    loan_status,
    subs_id
  }
  console.log(body)
  fetch(`http://localhost:5000/update/member`,
  {
    method:"PUT",
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  location.reload();
  return false;
}




//END OF UPDATE




document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:5000/getAllmembers')
  .then(response => response.json())
  .then(data => loadHTMLTable(data['data']));
  fetch('http://localhost:5000/getAllofficers')
  .then(response => response.json())
  .then(data => loadHTMLTable2(data['data']));
  fetch('http://localhost:5000/getAllloan')
  .then(response => response.json())
  .then(data => loadHTMLTable3(data['data']));

  fetch('http://localhost:5000/countAllmembers')
  .then(response => response.json())
  .then(data => loadHTMLTable4(data));

});

function loadHTMLTable4(data) {
  const memberNo = document.querySelector('#member-no');

  memberNo.innerHTML = data.data[0].memberNo;

  console.log(data)

}

//// TABLE MEMBERS
function loadHTMLTable(data) {
  const table = document.querySelector('.table-change-member tbody');

  if (data.length === 0) {
      table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
      return;
  }

  let tableHtml = "";

  data.forEach(function ({member_id, member_fname,member_lname,member_birthdate,member_occupation,member_education,member_email,member_age,member_sex,member_status,member_school,member_shares,loan_status,subs_id}) {
      tableHtml += "<tr>";
      tableHtml += `<td id="member-${member_id}">${member_id}</td>`;
      tableHtml += `<td id="member-fname-${member_id}">${member_fname}</td>`;
      tableHtml += `<td id="member-lname-${member_id}">${member_lname}</td>`;
      tableHtml += `<td id="member-date-${member_id}">${new Date(member_birthdate).toLocaleString()}</td>`;
      tableHtml += `<td id="member-occupation-${member_id}">${member_occupation}</td>`;
      tableHtml += `<td id="member-education-${member_id}">${member_education}</td>`;
      tableHtml += `<td id="member-email-${member_id}">${member_email}</td>`;
      tableHtml += `<td id="member-age-${member_id}">${member_age}</td>`;
      tableHtml += `<td id="member-sex-${member_id}">${member_sex}</td>`;
      tableHtml += `<td id="member-status-${member_id}">${member_status}</td>`;
      tableHtml += `<td id="member-school-${member_id}">${member_school}</td>`;
      tableHtml += `<td id="member-shares-${member_id}">${member_shares}</td>`;
      tableHtml += `<td id="member-status-${member_id}">${loan_status}</td>`;
      tableHtml += `<td id="member-subsid-${member_id}">${subs_id}</td>`;

      tableHtml += `<td class="table-edit"><button class="button5" data-id=${member_id} onclick="handleDeleteMember(${member_id})">Delete`;
      tableHtml += `<button class="button6" data-id=${member_id} onclick="showRegistrationModal4(${member_id})">Edit</td>`;
      tableHtml += "</tr>";
  });

  table.innerHTML = tableHtml;
}

// TABLE OFFICERS


function loadHTMLTable2(data) {
  const table = document.querySelector('.table-change-officer tbody');

  if (data.length === 0) {
      table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
      return;
  }

  let tableHtml = "";

  data.forEach(function ({member_id, officer_type, officer_position, officer_task}) {
      tableHtml += "<tr>";
      tableHtml += `<td id="officer-${member_id}">${member_id}</td>`;
      tableHtml += `<td id="officer-type-${member_id}">${officer_type}</td>`;
      tableHtml += `<td id="officer-position-${member_id}">${officer_position}</td>`;
      tableHtml += `<td id="officer-task-${member_id}">${officer_task}</td>`;

      tableHtml += `<td><button class="button5" data-id=${member_id} onclick="handleDeleteOfficer(${member_id})">Delete`;

      tableHtml += `<button class="button6" data-id=${member_id} onclick="showRegistrationModal2(${member_id})">Edit</td>`;
      tableHtml += "</tr>";
  });

  table.innerHTML = tableHtml;
}

// TABLE Loan

function loadHTMLTable3(data) {
  const table = document.querySelector('.table-change-loan tbody');

  if (data.length === 0) {
      table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
      return;
  }

  let tableHtml = "";

  data.forEach(function ({member_id, loan_principalamount, loan_interestrate, loan_term, loan_status}) {
      tableHtml += "<tr>";
      tableHtml += `<td id="loan-${member_id}">${member_id}</td>`;
      tableHtml += `<td id="loan-principalamount-${member_id}">${loan_principalamount}</td>`;
      tableHtml += `<td id="loan-interestrate-${member_id}">${loan_interestrate}</td>`;
      tableHtml += `<td id="loan-term-${member_id}">${loan_term}</td>`;
      tableHtml += `<td id="loan-status-${member_id}">${loan_status}</td>`;

      tableHtml += `<td><button class="button5" data-id=${member_id} onclick="handleDeleteLoan(${member_id})">Delete`;
      tableHtml += `<button class="button6" data-id=${member_id} onclick="showRegistrationModal3(${member_id})">Edit</td>`;
      tableHtml += "</tr>";
  });

  table.innerHTML = tableHtml;
}


/// tbl_members
async function get_members(){
  const result1 = await fetch('http://localhost:5000/getAllmembers',{method:'GET'}).then(res => res.json())
  const result2 = await fetch('http://localhost:5000/getAllofficers',{method:'GET'}).then(res => res.json())
  const result3 = await fetch('http://localhost:5000/countallmembers',{method:'GET'}).then(res => res.json())
  // let sample = result.data.map(res => res.member_fname)

console.log(result1);
console.log(result2);
console.log(result3);
}
get_members();










// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "₱ " + val + " thousands";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }
  