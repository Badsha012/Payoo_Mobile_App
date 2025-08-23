document.getElementById("addMoney").addEventListener('click',function(e){
e.preventDefault()
console.log("add money btm click")

const bank=document.getElementById("bank").value

const account=document.getElementById("account").value
const addMoney=parseInt(document.getElementById("add-money").value)
const pin=document.getElementById("pin-number").value

// console.log(bank,account,addMoney,pin)
const aviable=parseInt(document.getElementById("aviable-balance").innerText)

const totalNewAmount=addMoney+aviable
document.getElementById("aviable-balance").innerText =totalNewAmount

})