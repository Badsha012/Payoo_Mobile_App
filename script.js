//login button login functionlity

document.getElementById("loginButton").addEventListener("click",function (e){
    e.preventDefault()
    const mobileNumber=1234568910
    const pinNumber=1234
    const mobileNumberValue= document.getElementById("mobile-number").value
    const mobilnumbervalueConveted=parseInt(mobileNumberValue)
    const pinNumerValue= document.getElementById("pin-number").value
    const pinNumbervalueConverted=parseInt(pinNumerValue)
   


   if(mobilnumbervalueConveted === mobileNumber && pinNumbervalueConverted === pinNumber ){
    window.location.href="./main.html"
   }
   else{
    alert ("Invalid credentials")
   }
})