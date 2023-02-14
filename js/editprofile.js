// get data from localstorage
let myName =localStorage.getItem("firstname");
console.log(myName);
let myEmail =localStorage.getItem("email");
console.log(myEmail);




// var
let userInput=document.querySelector("#username");
console.log("uuu",user);
let emailInput = document.querySelector("#email");
let editprofileform =document.querySelector("#edit-profile-form");

//  let changeBtn =document.querySelector("#change-btn");

// setting values of input
userInput.value =myName;
emailInput.value =myEmail;

// event
editprofileform.addEventListener("submit" , savechange);

function savechange(e){
    e.preventDefault();

   localStorage.setItem("firstname" ,userInput.value);
   localStorage.setItem("email" ,emailInput.value);

   setTimeout(() => {
       window.location="profile.html"
   }, 500);
}


