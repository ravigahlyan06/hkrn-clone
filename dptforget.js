const captchaSpace = document.getElementById("captcha-space");

function generateMyCaptcha() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let text = "";

  for (i = 0; i < 6; i++) {
    const charIndex = Math.floor(Math.random() * characters.length);

    text += characters.charAt(charIndex);
  }

  return text;
}

const myCaptcha = generateMyCaptcha();

if (myCaptcha) {
  captchaSpace.innerHTML = myCaptcha;
}

const alertName = document.getElementById("name_alert");
const alertPass = document.getElementById("new_pass_alert");
const alertConPass = document.getElementById("confirm_pass_alert");
const alertDotMth = document.getElementById("pass-match");
const alertCapPass = document.getElementById("enter_cpt");
const alertWrongCap = document.getElementById("wrong_cpt");

const InputName = document.getElementById("user_name");
const InputPass = document.getElementById("enter_pass");
const InputConPass = document.getElementById("confirm_pass");
const InputCapPass = document.getElementById("captcha_text");


function handleSubmit() {
  if (!InputName.value) {
    return (alertName.style.display = "block");
  } else {
    alertName.style.display = "none";
  }

  if (!InputPass.value) {
    return (alertPass.style.display = "block");
  } else {
    alertPass.style.display = "none";
  }

  if (!InputConPass.value) {
    return (alertConPass.style.display = "block");
  } else {
    alertConPass.style.display = "none";
  }

  if (InputPass.value != InputConPass.value) {
    return (alertDotMth.style.display = "block");
  } else {
    alertDotMth.style.display = "none";
  }

  if (!InputCapPass.value) {
    return (alertCapPass.style.display = "block");
  } else {
    alertCapPass.style.display = "none";
  }

  if (InputCapPass.value != myCaptcha) {
    return (alertWrongCap.style.display = "block");
  } else {
    alertWrongCap.style.display = "none";
  }

  const myCreds = {
    userName: InputName.value,
    password: InputPass.value
  }

  localStorage.setItem("Credentials", JSON.stringify(myCreds));

  window.location = "file:///D:/Ravi/ravii/Javascript/HKRN/dpt.html"


}
