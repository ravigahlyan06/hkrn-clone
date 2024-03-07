const JobRowData = [
  {
    sNno: 1,
    nameOfEmployee: "Sh. Vikas Gupta",
    designation: "General Manager (Finance)",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 2,
    nameOfEmployee: "Sh. Sandeep Makheja",
    designation: "General Manager (BD & C)",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 3,
    nameOfEmployee: "Vacant",
    designation: "General Manager (Admin.)",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 4,
    nameOfEmployee: "Vacant",
    designation: "General Manager (BD & C)",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 5,
    nameOfEmployee: "Smt. Neelam Madan",
    designation: "Deputy General Manager (Admin./HR)",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 6,
    nameOfEmployee: "Sh. Anuj Aggarwal ",
    designation: "Deputy General Manager",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 7,
    nameOfEmployee: "Smt. Anu Arya",
    designation: "Deputy General Manager",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 8,
    nameOfEmployee: "Sh. Valsh Jain",
    designation: "Deputy General Manager",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 9,
    nameOfEmployee: "Sh. Hitesh Kapoor",
    designation: "Deputy General Manager",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 10,
    nameOfEmployee: "Smt. Neelam Sharma",
    designation: "Assistant General Manager",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 11,
    nameOfEmployee: "Sh. Rohit Sharma",
    designation: "Assistant General Manager",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 12,
    nameOfEmployee: "Smt. Pallavi Sandhir",
    designation: "Company Secretary",
    emailid: "hkrn.gov@gmail.com",
  },
  {
    sNno: 13,
    nameOfEmployee: "Sh. Jai Sukhdeep Khattar",
    designation: "Assistant District Attomey",
    emailid: "hkrn.gov@gmail.com",
  },
];

const jobHeadData = [
  {
    id: "sNno",
    title: "Sr.No",
  },
  {
    id: "nameOfEmployee",
    title: "Name of Employee",
  },
  {
    id: "designation",
    title: "Designation",
  },
  {
    id: "emailid",
    title: "Email ID",
  },
];

const JobData = document.getElementById("table_data");


function mailTableData(){
    let row = document.createElement("tr");

    jobHeadData.map((item) =>{
        let heading = document.createElement("th");
        heading.innerHTML = item.title;

        row.appendChild(heading);
    });
    JobData.appendChild(row);
}

mailTableData();
console.log("asdfghjkl");