const personalDetailsBox = document.getElementById("personal_details");
const commDetailsBox = document.getElementById("communication_details");
const otherDetailBox = document.getElementById("other_details");

const personalDetail = [
  {
    label: "Full Name (English)",
    id: "fullNameEnglish",
    value: "RAVI",
    type: "text",
    disabled: true,
  },
  {
    label: "Full Name (Hindi)",
    id: "fullNameHindi",
    value: "रवि",
    type: "text",
    disabled: true,
  },
  {
    label: "Father Name (English)",
    id: "fatherNameEnglish",
    value: "NARESH KUMAR",
    type: "text",
    disabled: true,
  },
  {
    label: "Father Name (Hindi)",
    id: "fatherNameHindi",
    value: " नरेश कुमार",
    type: "text",
    disabled: true,
  },
  {
    label: "Mother Name (English)",
    id: "motherNameEnglish",
    value: "MEENA",
    type: "text",
    disabled: true,
  },
  {
    label: "Mother Name (Hindi)",
    id: "motherNameHindi",
    value: "मीना",
    type: "text",
    disabled: true,
  },
  {
    label: "Date of Birth",
    id: "birthDate",
    value: "09/01/2000",
    type: "text",
    disabled: true,
  },
  {
    label: "Age",
    id: "ageDetail",
    value: "24",
    type: "text",
    disabled: true,
  },
  {
    label: "Gender",
    id: "gender",
    value: "Male",
    type: "text",
    disabled: true,
  },
  {
    label: "Martial Status",
    id: "martinStatus",
    value: "Unmarried",
    type: "text",
    disabled: true,
  },
];

const commDetail = [
  {
    label: "Address",
    id: "address",
    value: "JAURASI SARAF KHAS",
    type: "text",
    disabled: true,
    width: "full",
  },
  {
    label: "District",
    id: "dist",
    value: "PANIPAT",
    type: "text",
    disabled: true,
  },
  {
    label: "Block Town",
    id: "block",
    value: "SAMALKHA",
    type: "text",
    disabled: true,
  },
  {
    label: "Ward/Village",
    id: "ward_village",
    value: "JAURASI SARAF KHAS",
    type: "text",
    disabled: true,
  },
  {
    label: "Pincode",
    id: "pincode",
    value: "132101",
    type: "text",
    disabled: true,
  },
  {
    label: "Mobile No.",
    id: "mobile",
    value: "9991093185",
    type: "text",
    disabled: true,
  },
  {
    label: "Email Id",
    id: "email",
    value: "ravi09012000@gmail.com",
    type: "text",
    disabled: true,
  },
];

const otherDetails = [
  {
    label: "Benchmark Disability",
    id: "disability",
    value: "NO",
    type: "text",
    disabled: true,
  },
  {
    label: "Caste Category",
    id: "caste",
    value: "GEN",
    type: "text",
    disabled: true,
  },
  {
    label: "Highest Qualification",
    id: "qualification",
    value: "Higher Secondary/Intermediate/Pre-University/Senior Secondary",
    type: "text",
    disabled: true,
  },
  {
    label: "Current Engagement",
    id: "current",
    value: "Student",
    type: "text",
    disabled: true,
  },
  {
    label: "Total Annual Family Income",
    id: "income",
    value: "180000",
    type: "text",
    disabled: true,
  },
  {
    label: "Income Verified",
    id: "very",
    value: "Yes",
    type: "text",
    disabled: true,
  },
];


for (i = 0; i < personalDetail.length; i++) {
  const inputDiv = document.createElement("div");
  inputDiv.id = i;

  const labelElem = document.createElement("label");

  labelElem.textContent = personalDetail[i].label;
  labelElem.setAttribute("for", personalDetail[i].id);

  const inputElem = document.createElement("input");

  inputElem.value = personalDetail[i].value;
  inputElem.id = personalDetail[i].id;
  inputElem.disabled = personalDetail[i].disabled;
  inputElem.type = personalDetail[i].type;

  inputDiv.appendChild(labelElem);
  inputDiv.appendChild(inputElem);

  personalDetailsBox.appendChild(inputDiv);
}

commDetail.map((detail, index) => {
  const inputDiv = document.createElement("div");
  inputDiv.id = `${detail.id}_${index}`;

  if (detail.width && detail.width == "full") {
    inputDiv.style.width = "100%";
  }

  const labelElem = document.createElement("label");
  labelElem.innerHTML = detail.label;
  labelElem.setAttribute("for", detail.id);

  const inputElem = document.createElement("input");
  inputElem.id = detail.id;
  inputElem.value = detail.value;
  inputElem.disabled = true;
  inputElem.type = detail.type;

  inputDiv.appendChild(labelElem);
  inputDiv.appendChild(inputElem);

  commDetailsBox.appendChild(inputDiv);
});

for(i = 0; i < otherDetails.length; i++){
    const inputDiv = document.createElement("div");
    inputDiv.id = otherDetails[i].id;

    const labelElem = document.createElement("label");
    labelElem.setAttribute("for", otherDetails[i].id);
    labelElem.innerHTML = otherDetails[i].label;

    const inputElem = document.createElement("input");
    inputElem.value = otherDetails[i].value;
    inputElem.id = otherDetails[i].id;
    inputElem.type = otherDetails[i].type;
    inputElem.disabled = otherDetails[i].disabled;

    inputDiv.appendChild(labelElem);
    inputDiv.appendChild(inputElem);

    otherDetailBox.appendChild(inputDiv);

}