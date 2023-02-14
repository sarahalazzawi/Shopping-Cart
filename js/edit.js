// //Variable
let products = JSON.parse(localStorage.getItem("products")) || productsDB ;
console.log ("p", products);

let productId = JSON.parse(localStorage.getItem("editProduct"));
console.log (productId);
getProduct = products.find(i => i.id === productId);
console.log("befor update ",getProduct)
let productName =document.querySelector("#item-name");
let productDesc =document.querySelector("#item-desc");
let productSizeSelect =document.querySelector("#item-size");
let updateForm =document.querySelector("#update-form");
let uploadImg =document.querySelector("#upload-img-file");
let productSizeValue ;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.des;
productSizeSelect.value = getProduct.size;
productImage= getProduct.imageUrl;



// //event
productSizeSelect.addEventListener("change" ,getProductSizeValue);
updateForm.addEventListener("submit" ,updateProductFun );
uploadImg.addEventListener("change", uploadImage)


// //function
function getProductSizeValue(e){
    console.log(e.target.value);
    productSizeValue = e.target.value;
}

// // update item
function updateProductFun(e){
    e.preventDefault();
console.log(productName.valu)
    // في حال غير البرودكت نيم .فاليو
    getProduct.title = productName.value;
 getProduct.des =   productDesc.value ;
 getProduct.size  =   productSizeSelect.value;
  getProduct.imageUrl  = productImage ;
    
  console.log("after update ",getProduct)

//   سيف كل المنتاجات بعد التعديل
    localStorage.setItem("products",  JSON.stringify(products));
setTimeout(() => {
    window.location ="index.html"
}, 500);
 }


// //   // upload image
  function uploadImage(){
    //   امسك الفايل
    // حتى امسل االانبوت اكتب this
    // عايده على ايفنت اللي عامله علفايل ده
    let file = this.files[0];
    console.log(file);
  
    // حتى ارفع فقط صور 
    let types =["image/jpeg","image/png" ]
    if(types.indexOf(file.type) == -1){
    alert("Type is not supported");
    return;
    }
    // لوهي اكبر من ٢ميكا
    if(file.size > 2* 1024 *1024){
        alert( "Image not Exced 2MG");
        return
    }
// امسك مسار الصوره
// تمسك الصوره كحروف وكلمات
    // productImage = URL.createObjectURL(file);
    // console.log(productImage);//blob:http://127.0.0.1:5500/dd5c3fb8-93cc-41b5-a9d6-21a84355cabd
 

    // تنده الفكشن وتبعث الفايل وتسيف بلريزلت
    getImagebased64(file);
// productImage =URl.createObjectURL(file)
}


// هاي تاخذ الفايل وتحوله ل٦٤
function getImagebased64(file){
let reader = new FileReader ();

reader.readAsDataURL(file);
// بعد ميحمل يسوي هاي 
reader.onload =function (){
    // ريدر عباره عن اوبجكت بي كل هاي المتود
    console.log(reader.result)
    productImage = reader.result;
}

// error
reader.error =function (){
   alert("error!");
}
}