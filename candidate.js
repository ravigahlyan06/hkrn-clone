// inputs
const familyID = document.getElementById("ppp_id");
const memberName = document.getElementById("options");
const dialOtpInput = document.getElementById("otp_input");

// alerts
const familyAlert = document.getElementById("alert_box");
const memberAlert = document.getElementById("empty_member");

// buttons
const displayMemberBtn = document.getElementById("display_member");
const verifyMemberBtn = document.getElementById("gernate_opt");
const resendBtn = document.getElementById("reset_btn");

// box
const memberBox = document.getElementById("show_member");
const otpBox = document.getElementById("otp_container");
const showOtpBox = document.getElementById("show_otp");
const hidePhera = document.getElementById("reset_otp_msg");
const timerSecond = document.getElementById("countdown");
const theTimerMinute = document.getElementById("start-countdown");

let OTP = "";
let timeout = 60;

const membersDetail = [
  {
    name: "Ravi",
    id: 1,
  },
  {
    name: "Ravinder",
    id: 2,
  },
  {
    name: "Sahil",
    id: 3,
  },
  {
    name: "Guru",
    id: 4,
  },
  {
    name: "Chetan",
    id: 5,
  },
];

const generateNewOtp = () => {
  const characters = "0123456789";
  let text = "";

  for (i = 0; i < 4; i++) {
    const charIndex = Math.floor(Math.random() * characters.length);
    text = text + characters.charAt(charIndex);
  }
  OTP = text;
  showOtpBox.innerHTML = text;
};

generateNewOtp();

const handleResetOtp = () => {
  hidePhera.style.display = "block";
  resendBtn.style.display = "none";

  let count = 25;

  let invalid = setInterval(() => {
    timerSecond.innerHTML = count;
    count--;
    if (count < 0) {
      hidePhera.style.display = "none";
      resendBtn.style.display = "block";

      generateNewOtp();
      // autoGenerateOtp();

      clearInterval(invalid);
    }
  }, 100);
};

// function autoGenerateOtp() {

//   let interValue = setInterval(() => {
//     theTimerMinute.innerHTML = timeout;

//     timeout--;

//     if (timeout < 0) {
//       if (dialOtpInput.value != OTP) {
//         timeout = 60;
//         generateNewOtp();
//       } else {
//         clearInterval(interValue);
//       }
//     }

//   }, 100);
// }

const handleVerifyOtp = () => {
  if (!dialOtpInput.value) {
    return alert("Please Dial the OTP");
  }

  if (dialOtpInput.value !== OTP) {
    return alert("Please enter the valid OTP");
  }

  window.location = "D:/Ravi/ravii/Javascript/HKRN/candidatefilldetail.html"
};

const handledDisplay = () => {
  if (!familyID.value) {
    familyAlert.style.opacity = 1;

    familyAlert.style.pointerEvents = "all";
    return;
  }

  familyID.disabled = "true";
  displayMemberBtn.style.display = "none";
  memberBox.style.display = "flex";

  for (i = 0; i < membersDetail.length; i++) {

    let optionElement = document.createElement('option');

    optionElement.value = membersDetail[i].name;

    optionElement.id = `${membersDetail[i].id}abcr${membersDetail[i].name}`;

    optionElement.innerHTML = membersDetail[i].name;


    memberName.appendChild(optionElement);

    console.log(`${membersDetail[i].id}-${membersDetail[i].name}`);

    console.log(membersDetail[i].id + "-" + membersDetail[i].name);

  }
};

const handleOKSwitch = () => {
  familyAlert.style.opacity = 0;
  familyAlert.style.pointerEvents = "none";
};

const verifyMember = () => {
  if (!memberName.value) {
    memberAlert.style.opacity = 1;
    memberAlert.style.pointerEvents = "all";
    return;
  }

  memberName.disabled = "true";
  verifyMemberBtn.style.display = "none";
  otpBox.style.display = "block";

  // autoGenerateOtp();
};

const handleMemberAlert = () => {
  memberAlert.style.opacity = 0;
  memberAlert.style.pointerEvents = "none";
};

//time lgana h otp per 5 min ka bad ktnm hojaye