let remove1 = document.getElementById("remove1");
let remove2 = document.getElementById("remove2");
let container1 = document.getElementById("product1Container");
let container2 = document.getElementById("product2Container");
function getItem1() {
  let one = JSON.parse(localStorage.getItem("product1"));
  if (one == null) {
    container1.style.height = "0";
    container1.style.width = "0";
    container1.style.padding = "0";
    return;
  }
  container1.innerHTML = `
<div class="pic1"> <img src="${one.pic}" alt=""></div>
<div class="name">${one.name}</div>
<div class="price">${one.price}</div>

`;

  remove1.style.opacity = "1";
  remove1.style.visibility = "visible";
  container1.style.border = " 1px solid black";
}

getItem1();

function getItem2() {
  let two = JSON.parse(localStorage.getItem("product2"));
  if (two == null) {
    container2.style.height = "0";
    container2.style.width = "0";
    container2.style.padding = "0";
    return;
  }

  container2.innerHTML = `
<div class="pic1"> <img src="${two.pic}" alt=""></div>
<div class="name">${two.name}</div>
<div class="price">${two.price}</div>


`;
  remove2.style.opacity = "1";
  remove2.style.visibility = "visible";
  container2.style.border = " 1px solid black";

  container2.style.border = " 1px solid black";
}
getItem2();
function deleteItem1() {
  localStorage.removeItem("product1");
  container1.style.opacity = "0";
  container1.style.visibility = "hidden";

  remove1.style.opacity = "0";
  remove1.style.visibility = "hidden";
  
}

remove1.onclick = deleteItem1


function deleteItem2() {
  localStorage.removeItem("product2");
  container2.style.opacity = "0";
  container2.style.visibility = "hidden";
  remove2.style.opacity = "0";
  remove2.style.visibility = "hidden";
}
remove2.onclick = deleteItem2;
