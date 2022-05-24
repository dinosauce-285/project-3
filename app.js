let buy = document.getElementById("log");

let main = document.getElementById("main");
let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let box = document.getElementById("father");
function clickToLogin() {
  main.style.opacity = "0.3";
  container.style.visibility = "unset";
  container.style.opacity = "0.9";
}

  buy.onclick = clickToLogin;

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
let address = document.getElementById("address");
let phoneNum = document.getElementById("phoneNumber");
let signUpBtn = document.getElementById("signUpBtn");

function regisAccountList() {
  let accountContainer = [];
  let account = {
    name: newUserName.value,
    password: newPassword.value,
    address: address.value,
    phone: phoneNum.value,
  };

  accountContainer = JSON.parse(localStorage.getItem("users"));

  if (accountContainer == null) {
    accountContainer = [];
  }
  accountContainer.push(account);
  let stringInfor = JSON.stringify(accountContainer);

 
  if (newUserName.value != '' && newPassword.value!= '' &&  address.value != '' && phoneNum.value != '') {
     main.style.opacity = "1";
  container2.style.visibility = "hidden";
  container2.style.opacity = "0";
  container.style.visibility = "hidden";
  container.style.opacity = "0"; 
   localStorage.setItem("users", stringInfor);
  }
  else{
    let wrong2 = document.getElementById('wrong2')
    wrong2.innerHTML = `<div>Hãy nhập đầy đủ thông tin</div>`
  }
  
}

signUpBtn.onclick = regisAccountList;
let intUserName = document.getElementById("insertUsername");
let intPassword = document.getElementById("insertPassword");
let logInBtn = document.getElementById("logInBtn");

function findAccount() {
  let accountData = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < accountData.length; i++) {
    if (accountData[i].name == intUserName.value) {
      accountIn = accountData[i];
    }
  }

  if (accountIn.password == intPassword.value) {
    main.style.opacity = "1";
    container.style.visibility = "hidden";
    container.style.opacity = "0";
  }
  if (accountIn.password != intPassword.value) {
    let wrong = document.getElementById("wrong");
    wrong.innerHTML = `<div>Bạn đã nhập sai mật khẩu</div>`;
  }
   
}

logInBtn.onclick = findAccount;
async function showPic() {
 const apiLink = await fetch('https://foodish-api.herokuapp.com/api')
 let picLink =  await apiLink.json() ;

 let container = document.getElementById('banner')

container.innerHTML = `<img src="${picLink.image}" alt="">`
}
showPic()
let add = document.querySelectorAll(".add-btn");



let sample = document.getElementById('product')
let product1 = {
  name: 'Fusce dictum finibus',
  price : 100,
  pic: 'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/01.jpg'
}
let product2 = {
  name: 'Aliquam sagittis',
  price : 44,
  pic: 'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/02.jpg'
}
function addCart1() {
    
 localStorage.setItem('product1', JSON.stringify(product1))
   
    
  }
  add[0].onclick = addCart1
  function addCart2() {
    
    localStorage.setItem('product2', JSON.stringify(product2))
      
       
     }
     add[1].onclick = addCart2
let closeLoginBtn = document.getElementById('close-login')
function closeLogin() {
  container.style.opacity = '0'
  container.style.visibility ='hidden'
  main.style.opacity = '1'

}
closeLoginBtn.onclick = closeLogin
let closeRegisBtn = document.getElementById('close-regis')
function closeRegis() {
  container2.style.opacity = '0'
  container2.style.visibility ='hidden'
  main.style.opacity = '1'

}
closeRegisBtn.onclick = closeRegis