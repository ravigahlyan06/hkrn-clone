const showDataElements = document.getElementsByClassName("data");
const inputChoice = document.getElementById("have_certificate");

const ShowInputNSQF = document.getElementById("inputs_div");

const inputYesNo = document.getElementById("select_group");
const inputRegistration = document.getElementById("registered_id");
const inputCertificate = document.getElementById("certificate_id");
const inputIssueDate = document.getElementById("issue_date");
const inputIssueBy = document.getElementById("issue_by");

const alertMessage = document.getElementById("alert_msg");
const NoRecordsBox = document.getElementById("no_records");

function clearInputsAndParas() {
  inputYesNo.value = "";
  inputRegistration.value = null;
  inputCertificate.value = null;
  inputIssueDate.value = null;
  inputIssueBy.value = null;

  for (i = 0; i < showDataElements.length; i++) {
    showDataElements[i].style.display = "none";
    showDataElements[i].innerHTML = null;
  }
}

function handleShowBtn() {
  if (ShowInputNSQF.style.display === "flex") {
    if (
      !inputYesNo.value ||
      !inputRegistration.value ||
      !inputCertificate.value ||
      !inputIssueDate.value ||
      !inputIssueBy.value
    ) {
      alertMessage.style.display = "block";
    } else {
      alertMessage.style.display = "none";
      NoRecordsBox.style.display = "none";

      const inputValues = [
        inputYesNo.value,
        inputRegistration.value,
        inputCertificate.value,
        inputIssueDate.value,
        inputIssueBy.value,
      ];

      for (j = 0; j < inputValues.length; j++) {
        for (i = j; i < showDataElements.length; i++) {
          showDataElements[i].style.display = "block";
          showDataElements[i].innerHTML = inputValues[j];
        }
      }
    }
  }

  if (inputChoice.value == "Yes") {
    ShowInputNSQF.style.display = "flex";
  } else {
    ShowInputNSQF.style.display = "none";
    alertMessage.style.display = "none";
    NoRecordsBox.style.display = "block";
    clearInputsAndParas();
    return;
  }
}

const mainInputCet = document.getElementById("CET_certificate");
const allInputCet = document.getElementById("input_div");
const selectGroupCet = document.getElementById("which_group");
const cetRegistrationInput = document.getElementById("cet_registered_id");
const cetRollNoInput = document.getElementById("roll_no");
const cetScoreMarkInput = document.getElementById("Score");
const cetResultDateInput = document.getElementById("dated");
const cetAlertMsg = document.getElementById("cet_alert_msg");
const cetNoRecord = document.getElementById("cet_no_records");
const cetShowDataParas = document.getElementsByClassName("cet-data");

const clearCetInputs = () => {
  const cetInputValues = [
    selectGroupCet,
    cetRegistrationInput,
    cetRollNoInput,
    cetScoreMarkInput,
    cetResultDateInput,
  ];

  for (i = 0; i < cetInputValues.length; i++) {
    if (cetInputValues[i].id == "which_group") {
      cetInputValues[i].value = "";
    } else {
      cetInputValues[i].value = null;
    }
  }
  for (j = 0; j < cetShowDataParas.length; j++) {
    cetShowDataParas[j].innerHTML = "";
    cetShowDataParas[j].style.display = "none";
  }
};

function handleCETShowBtn() {
  if (allInputCet.style.display === "flex") {
    if (
      !selectGroupCet.value ||
      !cetRegistrationInput.value ||
      !cetRollNoInput.value ||
      !cetScoreMarkInput.value ||
      !cetResultDateInput.value
    ) {
      cetAlertMsg.style.display = "block";
    } else {
      cetAlertMsg.style.display = "none";
      cetNoRecord.style.display = "none";

      const cetInputValuesData = [
        mainInputCet.value,
        selectGroupCet.value,
        cetRegistrationInput.value,
        cetRollNoInput.value,
        cetScoreMarkInput.value,
        cetResultDateInput.value,
      ];

      for (k = 0; k < cetInputValuesData.length; k++) {
        cetShowDataParas[k].innerHTML = cetInputValuesData[k];
        cetShowDataParas[k].style.display = "block";
      }
    }
  }

  if (mainInputCet.value == "Yes") {
    allInputCet.style.display = "flex";
  } else {
    allInputCet.style.display = "none";
    cetAlertMsg.style.display = "none";
    cetNoRecord.style.display = "block";
    clearCetInputs();
    return;
  }
}

const addDetailInput = document.getElementById("fill_detail_input");
const showStorage = document.getElementById("show_data");
const fillDetailInput = document.getElementById("detail_input");
const alertInput = document.getElementById("alert_inp");

// *input*
const selectEducationInput = document.getElementById("education");
const eduStreamInput = document.getElementById("edu-strm");
const resultStatusInput = document.getElementById("result");
const UniverstySelectInput = document.getElementById("univer");
const gradingInput = document.getElementById("grading");
const dateMarksheetInput = document.getElementById("date-marksheet");
const marksheetNoInput = document.getElementById("seriol");
const rollNoInput = document.getElementById("roll");
const marksInput = document.getElementById("marks");
const totalMarksInput = document.getElementById("total-marks");
const percentageInput = document.getElementById("percentage");
const uploadFileInput = document.getElementById("certificate");

 const showDataStorage = document.getElementsByClassName("education-data");
 const emptyRecordsDiv = document.getElementById("no-records");
 const pdfViewer = document.getElementById("showPdf");

 let marksheets = [];

function handleAddDetail() {
  addDetailInput.style.opacity = 1;
  addDetailInput.style.pointerEvents = "all";
  addDetailInput.style.width = "100%";
  addDetailInput.style.height = "fit-content";
  showStorage.style.display = "none";
}

function handleCloseInput() {
  addDetailInput.style.opacity = 0;
  addDetailInput.style.pointerEvents = "none";
  addDetailInput.style.width = "0px";
  addDetailInput.style.height = "0px";
  showStorage.style.display = "block";
}

function handleSaveData() {
  if (
    !selectEducationInput.value ||
    !resultStatusInput.value ||
    !UniverstySelectInput.value ||
    !gradingInput.value ||
    !dateMarksheetInput.value ||
    !marksheetNoInput.value ||
    !rollNoInput.value ||
    !marksInput.value ||
    !totalMarksInput.value ||
    !uploadFileInput.value
  ) {
    alertInput.style.display = "flex";
    emptyRecordsDiv.style.display = "block";
    return;
  } else {
    alertInput.style.display = "none";
    addDetailInput.style.display = "none";
    emptyRecordsDiv.style.display = "none";
  }

//   const newValues = {
//     serialNo: marksheets.length + 1,
//     education: selectEducationInput.value,
//     UniverstySelectInput.value,
//     resultStatusInput.value,
//     dateMarksheetInput.value,
//     rollNoInput.value,
//     marksheetNoInput.value,
//     gradingInput.value,
//     marksInput.value,
//     totalMarksInput.value,
//     percentageInput.value,
//   };

  for(i = 0; i < showDataStorage.length; i++) {
    for(j = 0; j < allValue.length; j++){
      console.log("hit showDataStorage", showDataStorage[i])
      console.log("hit allValue", allValue[i])
      if (i == 0) {
        showDataStorage[i].innerHTML = i + 1 ;
        showDataStorage[i].style.display = "block";
      } else {
        showDataStorage[i].innerHTML = allValue[i];
        showDataStorage[i].style.display = "block";
      }
    }
  }

  clearAllInputs();

}

function clearAllInputs() {
    selectEducationInput.value = "";
    resultStatusInput.value = "";
    UniverstySelectInput.value = "";
    gradingInput.value = "";
    dateMarksheetInput.value = "";
    marksheetNoInput.value = "";
    rollNoInput.value = "";
    marksInput.value = "";
    totalMarksInput.value = "";
    uploadFileInput.value = "";
    eduStreamInput.value = "";
    percentageInput.value = "";
}
