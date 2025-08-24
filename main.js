const validin=1234

// function 
function getInputValueNumber(id){
     const inputField=document.getElementById(id)
     const inputFieldValue=inputField.value
     const inputFieldValueNumber=parseInt(inputFieldValue)
     return inputFieldValueNumber
}



// add money btn

document.getElementById("addMoney").addEventListener('click',function(e){
e.preventDefault()
// console.log("add money btm click")

const bank=document.getElementById("bank").value

const account=document.getElementById("account").value
// const addMoney=parseInt(document.getElementById("add-money").value)
 const addMoney=getInputValueNumber("add-money")

// const pin=parseInt(document.getElementById("pin-number").value)
const pin=getInputValueNumber("pin-number")

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

    const amount=getInputValueNumber("withraw-amount")
    // const amount=parseInt(document.getElementById("withraw-amount").value)
    const availableBlance=parseInt(document.getElementById("aviable-balance").innerText)
    // console.log(amount,availableBlance)
    const totalNewAmount=availableBlance - amount
    document.getElementById("aviable-balance").innerText=totalNewAmount
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