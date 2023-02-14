 let products = JSON.parse(localStorage.getItem("products"))|| productsDB;
 console.log (products);

 let prouductDom = document.querySelector(".products");
 let noproductCartDom = document.querySelector(".noproducts");

 let drawProductsUI
 (drawProductsUI =function (products = []){
      let myProduct = products.filter( item => item.isMe === "Y");
        console.log ("my",myProduct);
        if(myProduct.length != 0){
    let productsUI = myProduct.map((item)=>{
        console.log("eee",products)
        return `
        <div class="products-item"  
        style="border: ${item.isMe === "Y" 
        ? "2px solid green"
         : ""}">
        <img
         src=${item.imageUrl} 
         alt="image"
          class="product-item-img">
        <div class="prouduct-item-des">
            <a onclick=saveItemData(${item.id})>${item.title} </a>
            <p>${item.des}</p>
            <span>size:${item.size} </span><br>
            
            <button class='edit-product'  onclick=editDetailProduct(${item.id})> Edit </button>
          

        </div>
        <div class="products-item-actions">
      
        <button  class="add-to-cart" onclick="removeProduct(${item.id})"><i class="fas fa-trash"></i></button>
      
        </div>
    </div>  `
     
    }) //show the products in div in html 
    prouductDom.innerHTML = productsUI.join("");}
    else{
        noproductCartDom.innerHTML =" no item !!"
    }
   
    // data اول شي يشوف اذا اكو بلوكل ستورج يجيبها اذا ماكو يجيب من لبرودكت
})(JSON.parse(localStorage.getItem("products"))|| productsDB);


//  Edit Product 
function editDetailProduct(id){
    console.log(id );
   //  اسيف الايدي بلوكل ستورج وانده علي بصفحه اليدتت
   localStorage.setItem ( "editProduct",id);

   window.location ="edit.html";
}


function removeProduct(id){
    console.log(id)
    let products = JSON.parse(localStorage.getItem("products"))|| productsDB;
    let myProducts = products.filter( (item) => item.isMe === "Y");
    console.log("my" ,myProducts)
    let filteredItem =  myProducts.filter((i) => i.id !== id)
   //Draw ui calls, but this time draws the filter
   console.log(filteredItem)

    // حتى امسك المنتج
    let clickedItem = myProducts.find((i)=> i.id === id );
    // حهاتلي البرودكت وفلترها والايدي الي متيساوي الكلكد لو هوبيساوي حيشيلو لو ميساوي يبقي
    product = products.filter((i) => i.id != clickedItem.id);
    console.log("lallll",product);

     //   to update cart item 
     drawProductsUI(filteredItem);
  localStorage.setItem("products",JSON.stringify(products));
 
  }
