let products =  JSON.parse(localStorage.getItem("products"));
let productId =localStorage.getItem("productId");
let itemDom=document.querySelector(".itemdetails");
let productDetails = products.find((item) => item.id == productId);
console.log(productDetails)

itemDom.innerHTML =`
<img src="${productDetails.imageUrl}" alt="aa">
<h2>${productDetails.title}</h2>
<span> size:${productDetails.size}</span> 
<p> descripition:${productDetails.des}</p>`
