const validin=1234

// add money btn

document.getElementById("addMoney").addEventListener('click',function(e){
e.preventDefault()
console.log("add money btm click")

const bank=document.getElementById("bank").value

const account=document.getElementById("account").value
const addMoney=parseInt(document.getElementById("add-money").value)
const pin=parseInt(document.getElementById("pin-number").value)

// console.log(bank,account,addMoney,pin)
const aviable=parseInt(document.getElementById("aviable-balance").innerText)
if(account.length<11){
    alert("Please provide valid account number")
    return;
}
if(pin !== validin){
    alert("Please provide valid pin number")
    return;

}

const totalNewAmount=addMoney+aviable
document.getElementById("aviable-balance").innerText =totalNewAmount

})

// cash out 
document.getElementById("withdraw-btn").addEventListener('click',function(e){
    e.preventDefault()
    console.log("withdraw is money")

})


// toggling feature

document.getElementById("add-button").addEventListener('click',function() {
    document.getElementById("cash-out-parent").style.display="none"
    document.getElementById("add-money-parent").style.display="block"
})


document.getElementById("cash-out-button").addEventListener('click',function() {
    document.getElementById("add-money-parent").style.display="none"
    document.getElementById("cash-out-parent").style.display="block"

})