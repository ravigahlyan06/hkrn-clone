const vacantJobs = [
  {
    srNo: 1,
    jobRole: "Multi-Tasking Kitchen Worker",
    natureOfWork: "Cook",
    qualification: "Passed class 5th and knowledge of Cooking food.",
    remuneration: "As Per Nigam wages",
    postInDistrict: [
      "Panchkula",
      "Sonipat",
      "Chandigarh",
      "Charkhi-Dadri",
      "Sirsa",
      "Panipat",
      "Fatehabad",
      "Hisar",
    ],
    startDateOfApp: "03/01/2024",
    lastDateOfApp: "14/01/2024",
    applyButton: true,
  },
  {
    srNo: 2,
    jobRole: "Multi-Tasking Security Workers",
    natureOfWork: "Fisherman-cum-Watchman",
    qualification:
      "Multi types of works regarding Fisheries. like feeding. breeding. Netting of fish catching of flsh, collecting of seeds. packaging of seeds. loading of seeds packing. Watering to fish ponds. cleaning of fish ponds and hatcheries, and night duty also as a watch man, Aquarlum maintenance also and many more regarding Fisheries etc.",
    remuneration: "As Per Nigam Wages",
    postInDistrict: [
      "Gurugram",
      "Jhajjar",
      "Jind",
      "Kurukshetra",
      "Sirsa",
      "Hisar",
      "Panchkula",
      "Fatehabad",
      "Nuh",
      "Yamunanagar",
      "Bhiwani",
      "Kaithal",
      "Sonipat",
      "Rothak",
      "Mahendergarh",
      "Ambala",
    ],
    startDateOfApp: "03/01/2024",
    lastDateOfApp: "14/01/2024",
    applyButton: true,
  },
];

const vacantJobsHead = [
    {
        id: "srNo",
        title: "Sr. No."
    },
    {
        id: "jobRole",
        title: "Job Role"
    },
    {
        id: "natureOfWork",
        title: "Nature of work",
    },
    {
        id: "qualification",
        title: "Qualification",
    },
    {
        id: "remuneration",
        title: "Remuneration",
    },
    {
        id: "postInDistrict",
        title: "Post In District",
    },
    {
        id: "startDateOfApp",
        title: "Start Date of Application",
    },
    {
        id: "lastDateOfApp",
        title: "Last Date Of Application",
    },
    {
        id: "applyButton",
        title: "Apply Now",
    },

];

const vacantJobsTable = document.getElementById("vacant_job");

function renderVacantJobsTable() {
    const row = document.createElement("tr");

    vacantJobsHead.map((item) => {
        let heading = document.createElement("th");
        heading.innerHTML = item.title;

        row.appendChild(heading);
    });

    vacantJobsTable.appendChild(row);

    vacantJobs.map((item) => {
        let rowTable = document.createElement("tr");
        for(key in item) {
            let rowData = document.createElement("td");
            if (Array.isArray(item[key])) {
                rowData.innerHTML = item[key].join(',');
                rowTable.appendChild(rowData);
            }else {
                rowData.innerHTML = item[key]
                rowTable.appendChild(rowData);
            }
        };
        vacantJobsTable.appendChild(rowTable);
    });
}

renderVacantJobsTable();
const JobData = document.getElementById("table_data");

