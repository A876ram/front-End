// Sign Up
let nameValue = document.querySelector(".nameValue");
let emailValue = document.querySelector(".emailValue");
let passwordValue = document.querySelector(".passwordValue");

// Log In
let emailValueLogin = document.getElementById("emailValueLogin");
let passwordValueLogin = document.getElementById("passwordValueLogin");

//
let logOut = document.getElementById("logOut");

let userName = document.getElementById("userName");

let subBtn = document.getElementById("subBtn");
let success = document.getElementById("success");
let btnSignIn = document.getElementById("btnSignIn");
let tryAgain = document.getElementById("tryAgain");

let signUp = document.getElementById("signUp");

let login = document.getElementById("login");

//  Error Sign Up
let errorName = document.getElementById("errorName");

let errorEmail = document.getElementById("errorEmail");

let errorPassword = document.getElementById("errorPassword");

//

let forgetPassword=document.getElementById("forgetPassword")

// Error Log In

let errorLoginAll = document.getElementById("errorLoginAll");

let errorLoginPart = document.getElementById("errorLoginPart");

//

let alreadyExist = document.getElementById("alreadyExist");

var currentName;

let containerUsers;
localStorage.getItem("users") != null
  ? (containerUsers = JSON.parse(localStorage.getItem("users")))
  : (containerUsers = []);

if (subBtn != null) {
  subBtn.addEventListener("click", callUserData);
}

function callUserData() {
  if (
    validationName() &&
    validationEmail() &&
    validationPasswword() &&
    checkNameAndEmail() != true
  ) {
    validationAll();
    success.classList.remove("d-none");
    success.classList.add("d-block");

    // alreadyExist.classList.replace("d-none","d-block")

    btnSignIn.classList.replace("d-none", "d-block");
    printValidName();
    printValidEmail();
    printValidPassword();

    alreadyExist.classList.remove("d-block");
    alreadyExist.classList.add("d-none");

    errorName.classList.replace("d-block", "d-none");

    errorEmail.classList.replace("d-block", "d-none");

    errorPassword.classList.replace("d-block", "d-none");

    tryAgain.classList.remove("d-block")
    tryAgain.classList.add("d-none")
  } 
  else if (checkNameAndEmail() == true) {
    alreadyExist.classList.remove("d-none");
    alreadyExist.classList.add("d-block");
    success.classList.remove("d-block");
    success.classList.add("d-none");

    btnSignIn.classList.replace("d-block", "d-none");

    nameValue.classList.remove("is-valid");

    emailValue.classList.remove("is-valid");

    passwordValue.classList.remove("is-valid");
  }
  

  if (
    validationName() == false ||
    validationEmail() == false ||
    validationPasswword() == false
  ) {
    tryAgain.classList.remove("d-none");

    tryAgain.classList.add("d-block");

    alreadyExist.classList.remove("d-block");
    alreadyExist.classList.add("d-none");


   success.classList.remove("d-block");
    success.classList.add("d-none");

  }

  if (
    validationName() == false &&
    validationEmail() == false &&
    validationPasswword() == false
  ) {
    tryAgain.classList.replace("d-none", "d-block");
    printInvalidName();
    printInvalidEmail();
    printInvalidPassword();
    success.classList.remove("d-block");
    success.classList.add("d-none");

    btnSignIn.classList.remove("d-block");

    btnSignIn.classList.add("d-none");

    alreadyExist.classList.remove("d-block");
    alreadyExist.classList.add("d-none");


  }

  if (validationName() != true) {
    printInvalidName();
  } else {
    printValidName();
  }

  if (validationEmail() != true) {
    printInvalidEmail();
  } else {
    printValidEmail();
  }

  if (validationPasswword() != true) {
    printInvalidPassword();
  } else {
    printValidPassword();
  }
  
}

//////////////

function printValidName() {
  nameValue.classList.add("is-valid");
  nameValue.classList.remove("is-invalid");
  nameValue.classList.replace("d-block", "d-none");

  errorName.classList.remove("d-block");
  errorName.classList.add("d-none");
}

//

function printInvalidName() {
  nameValue.classList.remove("is-valid");
  nameValue.classList.add("is-invalid");
  nameValue.classList.replace("d-none", "d-block");

  errorName.classList.remove("d-none");
  errorName.classList.add("d-block");

  // tryAgain.classList.replace("d-none", "d-block");
}

/////////////////

function printValidEmail() {
  emailValue.classList.add("is-valid");
  emailValue.classList.remove("is-invalid");
  emailValue.classList.replace("d-block", "d-none");

  errorEmail.classList.remove("d-block");
  errorEmail.classList.add("d-none");
}

//

function printInvalidEmail() {
  emailValue.classList.add("is-invalid");
  emailValue.classList.remove("is-valid");
  emailValue.classList.replace("d-none", "d-block");

  errorEmail.classList.remove("d-none");
  errorEmail.classList.add("d-block");

  // tryAgain.classList.replace("d-none", "d-block");
}

//

function printValidPassword() {
  passwordValue.classList.add("is-valid");
  passwordValue.classList.remove("is-invalid");
  passwordValue.classList.replace("d-block", "d-none");

  errorPassword.classList.remove("d-block");
  errorPassword.classList.add("d-none");
}

function printInvalidPassword() {
  passwordValue.classList.remove("is-valid");
  passwordValue.classList.add("is-invalid");
  passwordValue.classList.replace("d-none", "d-block");

  errorPassword.classList.remove("d-none");
  errorPassword.classList.add("d-block");

  // tryAgain.classList.replace("d-none", "d-block");
}

//

// 1-

function validationName() {
  let rejexName = /^([A-Z]|[a-z]){3,20}$/;
  if (rejexName.test(nameValue.value) == true && nameValue.value != "") {
    return true;
  } else return false;
}

// console.log(containerUsers);

// 2-

function validationEmail() {
  let rejexEmail = /@([a-z]|[A-Z]){5,10}(\.com)$/;
  if (rejexEmail.test(emailValue.value) == true && emailValue.value != "") {
    return true;
  } else {
    return false;
  }
}

// 3-
function validationPasswword() {
  let rejexPassword = /^.{5,15}$/;
  if (
    rejexPassword.test(passwordValue.value) == true &&
    passwordValue.value != ""
  ) {
    return true;
  } else {
    return false;
  }
}

//
function validationAll() {
  if (
    validationPasswword() == true &&
    validationEmail() == true &&
    validationName() == true &&
    checkNameAndEmail() != true
  ) {
    let users = {
      name: nameValue.value,
      email: emailValue.value,
      passwword: passwordValue.value,
    };
    containerUsers.push(users);
    localStorage.setItem("users", JSON.stringify(containerUsers)); ///////////// ERROR
  }
}

// console.log(containerUsers);

// ////////////////////////////////////////////////////////
if (btnSignIn != null) {
  btnSignIn.addEventListener("click", function () {
    btnSignIn.href = "index.html";
  });
}
function checkValidation() {
  if (emailValueLogin.value == "" && passwordValueLogin.value == "") {
    return undefined;
  }
}
// ///////////////////////////////

function correctAll() {
  for (let i = 0; i < containerUsers.length; i++) {
    if (
      containerUsers[i].email == emailValueLogin.value &&
      containerUsers[i].passwword == passwordValueLogin.value
    ) {
      localStorage.setItem("user", containerUsers[i].name);

      return true;
    }
    // console.log("hello");
  }
}

// ///////////////////////////////////////

currentName = localStorage.getItem("user");

if (login != null) {
  login.addEventListener("click", function () {
    if (emailValueLogin.value == "" || passwordValueLogin.value == "") {
      // console.log("sasasasasasasasasasasasasa");

      errorLoginAll.classList.add("d-block");
      errorLoginAll.classList.remove("d-none");

      errorLoginPart.classList.remove("d-block");
      errorLoginPart.classList.add("d-none");
    } else if (correctAll() == true) {
      login.href = "welcom.html";
    } else if (correctAll() != true) {
      // console.log("helsaddsadsadsadsadsasdasdalo");

      errorLoginPart.classList.replace("d-none", "d-block");

      errorLoginAll.classList.remove("d-block");
      errorLoginAll.classList.add("d-none");
    } else if (checkValidation() == undefined) {
      errorLoginAll.classList.replace("d-none", "d-block");
      errorLoginPart.classList.replace("d-block", "d-none");
    } else {
      errorLoginAll.classList.replace("d-none", "d-block");
      errorLoginPart.classList.replace("d-block", "d-none");
    }
  });
}
function welcome() {
  userName.innerHTML = "Welcome " + currentName;
}

if (logOut != null) {
  logOut.addEventListener("click", function () {
    logOut.href = "index.html";
    localStorage.removeItem("user");
  });
}

function checkNameAndEmail() {
  var Check = false;
  for (var i = 0; i < containerUsers.length; i++) {
    if (
      containerUsers[i].name == nameValue.value ||
      containerUsers[i].email == emailValue.value
    ) {
      Check = true;
    }
  }
  return Check;
}
// 
forgetPassword.addEventListener('click',function(){
  alert("Please Check Your Email ")

})