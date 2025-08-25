const validin=1234

const transactionData=[]

// function 
function getInputValueNumber(id){
     const inputField=document.getElementById(id)
     const inputFieldValue=inputField.value
     const inputFieldValueNumber=parseInt(inputFieldValue)
     return inputFieldValueNumber
}

function getInputValue(id){
    const inputField=document.getElementById(id)
     const inputFieldValue=inputField.value
     return inputFieldValue

}

// fnction inner text value
function getInnerText(id){
    const element=document.getElementById(id)
    const elementValue=element.innerText
    const elementValueNumer=parseInt(elementValue)
    return elementValueNumer
 

}

// function innnertext

function setInnertext( value){
    const aviableValue=document.getElementById("aviable-balance")
     aviableValue.innerText =value
}


// function toggle 
 function handleToggle(id){
const forms=document.getElementsByClassName("form")
    for(const form of forms){
      form.style.display="none"
    }
    document.getElementById(id).style.display="block"

 }

//  function to toggle butons
function handleButtonToggle(id){

   const forBtns = document.getElementsByClassName("from-btn")
    
    for(const btn of forBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
         //document.getElementById("add-button").classList.remove("border-gray-300")
    //  document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
       document.getElementById(id).classList.remove("border-gray-300")
       document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")

}

// add money btn

document.getElementById("addMoney").addEventListener('click',function(e){
e.preventDefault()
// console.log("add money btm click")
const bank=getInputValue("bank")

// const bank=document.getElementById("bank").value

const account=document.getElementById("account").value
// const addMoney=parseInt(document.getElementById("add-money").value)
 const addMoney=getInputValueNumber("add-money")

// const pin=parseInt(document.getElementById("pin-number").value)
const pin=getInputValueNumber("pin-number")

// console.log(bank,account,addMoney,pin)
const  aviable=getInnerText("aviable-balance")
// const aviable=parseInt(document.getElementById("aviable-balance").innerText)
if(account.length<11){
    alert("Please provide valid account number")
    return;
}
if(pin !== validin){
    alert("Please provide valid pin number")
    return;

}

const totalNewAmount=addMoney+aviable
// document.getElementById("aviable-balance").innerText =totalNewAmount
setInnertext(totalNewAmount)

const data={
    name:"Add Money",
   date: new Date().toLocaleString()
}
transactionData.push(data)
console.log(transactionData)

})

// cash out 
document.getElementById("withdraw-btn").addEventListener('click',function(e){
    e.preventDefault()

    const amount=getInputValueNumber("withraw-amount")
    // const amount=parseInt(document.getElementById("withraw-amount").value)
    const availableBlance=parseInt(document.getElementById("aviable-balance").innerText)
    // console.log(amount,availableBlance)
    const totalNewAmount=availableBlance - amount
    // document.getElementById("aviable-balance").innerText=totalNewAmount
    setInnertext(totalNewAmount)

    const data={
    name:"Cash Out",
   date: new Date().toLocaleString()
}
transactionData.push(data)
console.log(transactionData)

})




// toggling feature

document.getElementById("add-button").addEventListener('click',function() {
    handleToggle("add-money-parent")

   handleButtonToggle("add-button")
})


document.getElementById("cash-out-button").addEventListener('click',function() {
    // document.getElementById("add-money-parent").style.display="none"
    // document.getElementById("cash-out-parent").style.display="block"
    // document.getElementById("transfer-money-parent").style.display="block"
    //  const forms=document.getElementsByClassName("form")
    // for(const form of forms){
    //   form.style.display="none"
    // }
    // document.getElementById("cash-out-parent").style.display="block"
    handleToggle("cash-out-parent")
     const forBtns = document.getElementsByClassName("from-btn")
    
    for(const btn of forBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
         //document.getElementById("add-button").classList.remove("border-gray-300")
    //  document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
       document.getElementById("cash-out-button").classList.remove("border-gray-300")
       document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")


})
// transfer money
document.getElementById("transfer-button").addEventListener('click',function(){
  
    // document.getElementById("transfer-money-parent").style.display="block"
    handleToggle("transfer-money-parent")
      const forBtns = document.getElementsByClassName("from-btn")
    
    for(const btn of forBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
         //document.getElementById("add-button").classList.remove("border-gray-300")
    //  document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
       document.getElementById("transfer-button").classList.remove("border-gray-300")
       document.getElementById("transfer-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})  

// bonus button
document.getElementById("bonus-botton").addEventListener('click',function(){

    // document.getElementById("get-bonus-parent").style.display="block"
    handleToggle("get-bonus-parent")
     const forBtns = document.getElementsByClassName("from-btn")
    
    for(const btn of forBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
         //document.getElementById("add-button").classList.remove("border-gray-300")
    //  document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
       document.getElementById("bonus-botton").classList.remove("border-gray-300")
       document.getElementById("bonus-botton").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})  



// pay Bill
document.getElementById("pay-bill-button").addEventListener('click',function(){
      
    
    // document.getElementById("pay-bill-parent").style.display="block"
    handleToggle("pay-bill-parent")

     const forBtns = document.getElementsByClassName("from-btn")
    
    for(const btn of forBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
         //document.getElementById("add-button").classList.remove("border-gray-300")
    //  document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
       document.getElementById("pay-bill-button").classList.remove("border-gray-300")
       document.getElementById("pay-bill-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})  



// Transactions
document.getElementById("transaction-button").addEventListener('click',function(){
  
    handleToggle("transaction-parent")
    // document.getElementById("transaction-parent").style.display="block"

 const forBtns = document.getElementsByClassName("from-btn")
    
    for(const btn of forBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
         //document.getElementById("add-button").classList.remove("border-gray-300")
    //  document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
       document.getElementById("transaction-button").classList.remove("border-gray-300")
       document.getElementById("transaction-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})  

