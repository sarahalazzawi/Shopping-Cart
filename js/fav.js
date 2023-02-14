

//الي حظيف داخله
let productCartDom = document.querySelector(".products");
let noproductCartDom = document.querySelector(".noproducts");

function drawFavoriteProduct(allproducts = []){

    if(JSON.parse(localStorage.getItem("productsToFavorite")).length === 0)
    noproductCartDom.innerHTML="There is no item  !! :)";

    //1.شوف اذ itemموجود في localstorage
let products = JSON.parse(localStorage.getItem("productsToFavorite"))|| allproducts;
    let productsUI =products.map((item)=>{
        return ` 
        <div class="products-item">
        <img
         src=${item.imageUrl} 
         alt="image"
          class="product-item-img">

        <div class="prouduct-item-des">
            <h2>${item.title} </h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <span>size:${item.size} </span><br>
            <span>Quaintaiti:${item.qty} </span>
        </div>
        <div class="products-item-actions">
        <button  class="add-to-cart"  onclick="removeItemFromfavorite(${item.id})"
        >
        <i class="fas fa-trash"></i></button>
       
        </div>
    </div>`
    })
    //show the products in div in html 
    productCartDom.innerHTML = productsUI.join("");
};
drawFavoriteProduct();


function removeItemFromfavorite(id){
   console.log(id)
   let productsToFavorite =localStorage.getItem("productsToFavorite")
    if(productsToFavorite){
    
        let items =JSON.parse(productsToFavorite);
  
  let filteredItem =  items.filter((item) => item.id !== id);
  //Draw ui calls, but this time draws the filter
  console.log(filteredItem)
    localStorage.setItem("productsToFavorite",JSON.stringify(filteredItem));

    //   to update cart item 
    drawFavoriteProduct(filteredItem);
}  }




// 