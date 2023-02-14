
// Define products
let prouductDom = document.querySelector(".products");

//get products from localstorage
// let products=JSON.parse(localStorage.getItem("products"))  ;
let products = productsDB;
// JSON.stringify()  object to string to save in localstorsge
// JSON.parse()     string to object 

// //Open Cart Menu
// shoopingCartIcon.addEventListener("click",openCartMenu)

//Display products
let drawProductsUI
 (drawProductsUI =function (products = []){
    let productsUI = products.map((item)=>{
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
            ${item.isMe === "Y" 
            ? "<button class='edit-product'  onclick=editDetailProduct("+item.id+")> Edit </button>" 
            : ""}

        </div>
        <div class="products-item-actions">
        <button class="add-to-cart" onclick="addToCart(${item.id})">Add To cart</button>
        <i class="fas fa-heart fav"
        style= "color:${item.liked === true 
            ? "red" 
            : ""}"
          onclick="addToFavorite(${item.id})"></i>
        </div>
    </div>  `
     
    })
    //show the products in div in html 
    prouductDom.innerHTML = productsUI.join("");
    // data اول شي يشوف اذا اكو بلوكل ستورج يجيبها اذا ماكو يجيب من لبرودكت
})(JSON.parse(localStorage.getItem("products"))|| products);




//Add To Cart
/*all item 
 هي نفسها
 addeditem 
  لذللك راح يستخدم بس
   addeditem*/
// let allItems = [];
function addToCart(id){

    if(localStorage.getItem("firstname")){
        console.log("Add item To cart");
// حتى من اضيف البرودكت الجديده للسله ايجيبها من لوكلرستورج واذا ماكو جيبها من فايل الديتا
let saveProducts = JSON.parse(localStorage.getItem("products")) || products ;
        let product = saveProducts.find((item)=>item.id ===id );
        console.log(saveProducts);

        //quntaity
        // راح يجيك اذا البرودكت موجود بلكارت لولا
        let IsProductInCart = addedItem.some((i)=> i.id === product.id)
        // راح يجيك اذا البرودكت موجود يزود واحد فواكاه 
        if (IsProductInCart){
            // امسك كل ايتم واسال اذا هوه الايدي اذا اي زود واحد اذا ل رجعp
            addedItem =addedItem.map((p) =>{
                if(p.id === product.id) p.qty += 1;
                return p;
            })
           
        }else{
            addedItem.push(product)
        }
        // Ui
        cartProductDivDom.innerHTML = "";
        addedItem.forEach((item)=>{
            cartProductDivDom.innerHTML += ` <p> ${item.title} ${item.qty}</p>`;
        })

        // addnew item to array and save in localstorage
        // addedItem=[...addedItem , chooseProducts];
        // let uniqueProducts = getUniqueArr (addedItem ,"id");
        // localStorage.setItem("productsinCart",JSON.stringify(uniqueProducts))

        // Save Data
        localStorage.setItem("productsinCart",JSON.stringify(addedItem))
        //Add counter of items
        let cartproductsitems=document.querySelectorAll(".cartdetatails div p");
        console.log(cartProductDivDom)
        console.log(cartproductsitems)
        badgeDom.style.display="block";
        badgeDom.innerHTML = cartproductsitems.length;

    }else{
        window.location="login.html"
    }

}

function getUniqueArr (arr ,filterType){
    [1,1,1]
    let unique =arr
    .map((item) => item[filterType])
    .map((item,index,finalarr) => finalarr.indexOf(item) === (index) && (index))
    .filter((item) =>arr [item])
    .map((item) =>arr [item]);

    return unique
    console.log(unique); //(3) [0, false, false]
}



//save id 
function saveItemData(id){
    localStorage.setItem("productId",id);
    window.location = "itemdetails.html"
}

// +++++++++++++++++++++
// search
let input = document.querySelector("#search")

input.addEventListener("keyup", function(e){
        search(e.target.value ,JSON.parse(localStorage.getItem("products")));
    
    if(e.target.value.trim() === ""){
        drawProductsUI(JSON.parse(localStorage.getItem("products") ))
    }
});



function search(title,myArray){
//     for(let i=0; i< myArray.length ; i++){
// if(myArray[i].title === title){
//     console.log(myArray[i])
// }
//     }
    let arr = myArray.filter((item) =>item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    console.log(arr);
   drawProductsUI(arr);
} 

//  search("Airpod item",JSON.parse(localStorage.getItem("products") ) )


// // Add To favarit
let FavoritesItem = localStorage.getItem("productsToFavorite")
?JSON.parse(localStorage.getItem("productsToFavorite"))
 :[];
function addToFavorite(id){

    if(localStorage.getItem("firstname")){
        console.log("Add item To fav");
        let chooseProducts = products.find((item)=>item.id ===id );
        chooseProducts.liked =true;
        console.log(chooseProducts);
        FavoritesItem=[...FavoritesItem , chooseProducts];
        let uniqueProducts = getUniqueArr (FavoritesItem ,"id");
        localStorage.setItem("productsToFavorite",JSON.stringify(uniqueProducts));
        products.map((item) => {
            if(item.id === chooseProducts.id){
                item.liked =true;  
            }
        });
        localStorage.setItem("products",JSON.stringify(products));
        drawProductsUI(products)
    }else{
        window.location="login.html"
    }

}



// Filter Products By Size
let sizefilter = document.querySelector("#size-filter");

sizefilter.addEventListener("change",getProductFilterBySize);

function getProductFilterBySize(e){
console.log(e.target.value);
// save value
let val = e.target.value;
// سيف كل برودكت بلوكل ستورج واذا ماكو اخذ من داتا
let products = JSON.parse(localStorage.getItem("products")) || products;

if (val === "all"){
    drawProductsUI(products);

}else{
    products = products.filter(i => i.size === val );
    drawProductsUI(products)
}
}


//  Edit Product 
 function editDetailProduct(id){
     console.log(id );
    //  اسيف الايدي بلوكل ستورج وانده علي بصفحه اليدتت
    localStorage.setItem ( "editProduct",id);

    window.location ="edit.html";
 }