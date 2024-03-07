const InputName = document.getElementById("Use_Name");
const InputPassword = document.getElementById("Password");
const NameAlert = document.getElementById("Enter_nam");
const PasswordAlert = document.getElementById("Enter_Pass");
const IncorectAlert = document.getElementById("Incorect");

function handleBtn() {
  if (!InputName.value) {
    return NameAlert.classList.remove("hidden");
  } else {
    NameAlert.classList.add("hidden");
  }

  if (!InputPassword.value) {
    return PasswordAlert.classList.remove("hidden");
  } else {
    PasswordAlert.classList.add("hidden");
  }

  if (InputName.value.length < 6 || InputPassword.value.length < 6) {
    return IncorectAlert.classList.remove("show");
  } else {
    IncorectAlert.classList.add("show");
  }

  const creds = {
    name: InputName.value,
    password: InputPassword.value
  }

  localStorage.setItem("Login Info", JSON.stringify(creds));
  // window.location = "https://www.yahoo.com";
}

function checkIfUserExists () {
  const creds = JSON.parse(localStorage.getItem("Login Info"));
  console.log(creds)

  if (creds.name && creds.password) {
    localStorage.removeItem("Login Info");
    // window.location = "https://www.yahoo.com";
    
  }
}

checkIfUserExists();
