let firstname =document.querySelector("#firstname");
let lastname =document.querySelector("#lastname");
let email =document.querySelector("#email");
let password =document.querySelector("#password");
let confirmpass=document.querySelector("#confirmpass");

let register_btn=document.querySelector("#sign_up");

register_btn.addEventListener("click",register);

function register(e){
    e.preventDefault();
    if(firstname.value === ""||lastname.value === ""|| email.value===""||password.value === ""||confirmpass.value===""){
alert("Please Fill Data");
    }else{
        //Save LocalStorage
        localStorage.setItem("firstname",firstname.value)
        localStorage.setItem("lastname",lastname.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
      //redierect to home page After 1secondand half
      setTimeout(() => {
          window.location ="login.html";
      }, 1500);

    }
}