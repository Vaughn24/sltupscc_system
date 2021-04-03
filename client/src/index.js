
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
  let loan_eligibility = document.querySelector("#loan_elgibility").value
  let body = {
    member_id,loan_principalamount,loan_interestrate,loan_term,loan_status,loan_eligibility
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



/// SHOW REGISTRATION MODAL

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

  console.log("checks")
}

/// END of SHOW REGISTRATION MODAL

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
      tableHtml += `<td>${member_id}</td>`;
      tableHtml += `<td>${member_fname}</td>`;
      tableHtml += `<td>${member_lname}</td>`;
      tableHtml += `<td>${new Date(member_birthdate).toLocaleString()}</td>`;
      tableHtml += `<td>${member_occupation}</td>`;
      tableHtml += `<td>${member_education}</td>`;
      tableHtml += `<td>${member_email}</td>`;
      tableHtml += `<td>${member_age}</td>`;
      tableHtml += `<td>${member_sex}</td>`;
      tableHtml += `<td>${member_status}</td>`;
      tableHtml += `<td>${member_school}</td>`;
      tableHtml += `<td>${member_shares}</td>`;
      tableHtml += `<td>${loan_status}</td>`;
      tableHtml += `<td>${subs_id}</td>`;

      tableHtml += `<td><button class="delete-row-btn" data-id=${member_id} onclick="handleDeleteMember(${member_id})">Delete</td>`;
      tableHtml += `<td><button class="edit-row-btn" data-id=${member_id}>Edit</td>`;
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
      tableHtml += `<td>${member_id}</td>`;
      tableHtml += `<td>${officer_type}</td>`;
      tableHtml += `<td>${officer_position}</td>`;
      tableHtml += `<td>${officer_task}</td>`;

      tableHtml += `<td><button class="delete-row-btn" data-id=${member_id} onclick="handleDeleteOfficer(${member_id})">Delete</td>`;
      tableHtml += `<td><button class="edit-row-btn" data-id=${member_id}>Edit</td>`;
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

  data.forEach(function ({member_id, loan_principalamount, loan_interestrate, loan_term, loan_status, loan_eligiblity}) {
      tableHtml += "<tr>";
      tableHtml += `<td>${member_id}</td>`;
      tableHtml += `<td>${loan_principalamount}</td>`;
      tableHtml += `<td>${loan_interestrate}</td>`;
      tableHtml += `<td>${loan_term}</td>`;
      tableHtml += `<td>${loan_status}</td>`;
      tableHtml += `<td>${loan_eligiblity}</td>`;

      tableHtml += `<td><button class="delete-row-btn" data-id=${member_id} onclick="handleDeleteLoan(${member_id})">Delete</td>`;
      tableHtml += `<td><button class="edit-row-btn" data-id=${member_id}>Edit</td>`;
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
  