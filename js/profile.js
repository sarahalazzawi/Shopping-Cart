// get data from localstorage
let myName =localStorage.getItem("firstname");
console.log(myName);
let myEmail =localStorage.getItem("email");
console.log(myEmail);
let allproduct= JSON.parse(localStorage.getItem("products")) ||productsDB;
console.log("allllll",allproduct);

let myproduct = allproduct.filter(i => i.isMe === "Y");
console.log(myproduct);


// var
let user=document.querySelector("#Username");
console.log("uuu",user);
let email = document.querySelector("#email");

let productlength =document.querySelector("#product_length span");


user.innerHTML=myName;
email.innerHTML=myEmail;

if(myproduct.length !== 0){
   productlength.innerHTML = myproduct.length; 
}else{
    myproduct.remove();
}
