
function getItem1() {
    let one = JSON.parse(localStorage.getItem('product1'))
 
let container1 = document.getElementById('product1Container')
container1.innerHTML = `
<div class="pic1"> <img src="${one.pic}" alt=""></div>
<div class="name">${one.name}</div>
<div class="price">${one.price}</div>
`
container1.style.border = ' 1px solid black'

}
getItem1()
function getItem2() {
    let one = JSON.parse(localStorage.getItem('product2'))
 
let container2 = document.getElementById('product2Container')
container2.innerHTML = `
<div class="pic1"> <img src="${one.pic}" alt=""></div>
<div class="name">${one.name}</div>
<div class="price">${one.price}</div>
`
container2.style.border = ' 1px solid black'

}
getItem2()
