let userInfo= document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn=document.querySelector("#logout");

//To see in localstorage
let username = localStorage.getItem("firstname");

if (username){
    links.remove(); //remove li 
    userInfo.style.display="flex";
    userDom.innerHTML= "Welcome "+username
};
//logout
logoutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() => {
        window.location ="register.html"
    }, 1500);
})

