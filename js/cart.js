

//الي حظيف داخله
let productCartDom = document.querySelector(".products");
let noproductCartDom = document.querySelector(".noproducts");

function drawProductInCart(allproducts = []){

    if(JSON.parse(localStorage.getItem("productsinCart")).length === 0)
    noproductCartDom.innerHTML="There is no item  !! :)";

    //1.شوف اذ itemموجود في localstorage
let products = JSON.parse(localStorage.getItem("productsinCart"))|| allproducts;
    let productsUI =products.map((item)=>{
        return ` 
        <div class="products-item">
        <img
         src=${item.imageUrl} 
         alt="image"
          class="product-item-img">

        <div class="prouduct-item-des">
            <h2>${item.title} </h2>
            <p>${item.des}</p>
            <span>size:${item.size} </span><br>
            <span>Quaintaiti:${item.qty} </span>
        </div>
        <div class="products-item-actions">
        <button  class="add-to-cart" onclick="removeItemFromCart(${item.id})"><i class="fas fa-trash"></i></button>
       
        </div>
    </div>`
    })
    //show the products in div in html 
    productCartDom.innerHTML = productsUI.join("");
};
drawProductInCart();


function removeItemFromCart(id){
   console.log(id)
   let productsinCart =localStorage.getItem("productsinCart")
    if(productsinCart){
    
        let items =JSON.parse(productsinCart);
  
  let filteredItem =  items.filter((item) => item.id !== id);
  //Draw ui calls, but this time draws the filter
  console.log(filteredItem)
    localStorage.setItem("productsinCart",JSON.stringify(filteredItem));

    //   to update cart item 
    drawProductInCart(filteredItem);
}  }




// 