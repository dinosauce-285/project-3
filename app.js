let buy = document.querySelectorAll(".buy-btn");
let main = document.getElementById("main");
let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let box = document.getElementById("father");
function clickToLogin() {
  main.style.opacity = "0.3";
  container.style.visibility = "unset";
  container.style.opacity = "0.9";
}
for (let i = 0; i < buy.length; i++) {
  buy[i].onclick = clickToLogin;
}
let regisBtn = document.getElementById("toRegis");
function createAccount() {
  main.style.opacity = "0.3";
  container2.style.visibility = "unset";
  container2.style.opacity = "0.97";
  container.style.visibility = "hidden";
  container.style.opacity = "0";
}
regisBtn.onclick = createAccount;
let newUserName = document.getElementById("createUserName");
let newPassword = document.getElementById("createPassword");
let signUpBtn = document.getElementById("signUpBtn");
function regisAccountList() {
  let accountContainer = [];
  let account = {
    name: newUserName.value,
    password: newPassword.value,
  }

  accountContainer = JSON.parse(localStorage.getItem("users"));

  if (accountContainer == null) {
    accountContainer = [];
  }
accountContainer.push(account)
  let stringInfor = JSON.stringify(accountContainer);
  localStorage.setItem("users", stringInfor);
}

signUpBtn.onclick = regisAccountList;
