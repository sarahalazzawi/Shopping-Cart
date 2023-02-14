//Variable
let productName =document.querySelector("#item-name");
let productDesc =document.querySelector("#item-desc");
let productSizeSelect =document.querySelector("#item-size");
let CreateForm =document.querySelector("#create-form");
let uploadImg =document.querySelector("#upload-img-file");
let productSizeValue ;
let productImage;


//event
productSizeSelect.addEventListener("change" ,getProductSizeValue);
CreateForm.addEventListener("submit" , createProductFun);
uploadImg.addEventListener("change", uploadImage)


//function
function getProductSizeValue(e){
    console.log(e.target.value);
    productSizeValue = e.target.value;
}

// Create item
function createProductFun(e){
    e.preventDefault();
// اول شي امسك البرودكت الي بلوكل ستورج
// اول مااجي اضيف يجيبلي البرودكت الموجوده بلوكل ستورج واذا ماكو يجيبلي برودكت ديبي
    let allProducts =JSON.parse(localStorage.getItem("products"))|| productsDB ;
    let nameValue =productName.value;
    let descValue =productDesc.value;

    // validation atha ako fark ethher alert 
    if(nameValue && descValue){
    // اوبجك بي الداته
    let obj ={
    // لوكان في لوكل ستورج حاجه جيبها اذا لا حط واحدا
    id :allProducts ? allProducts.length +1 : 1,
     title:nameValue,
    qty:1,
     imageUrl:productImage,
    des:descValue,
    size:productSizeValue,
    isMe :"Y",
}
    // النيو برودكت حياخذ كل البرودكت القديمهويضيفلهم الاوبجكت الجديد
    let newProduct =allProducts ? [...allProducts,obj] : [obj];
    // save new product in localstorage
    localStorage.setItem("products",  JSON.stringify(newProduct));

    //   بعد ميضيف فضيلي كل النبوت
    productName.value = "";
    productDesc.value = "";
    productSizeSelect.value ="";
    // من ادوس كرييت ينقلني لغير صفحه
setTimeout(() => {
    window.location ="index.html";
}, 500);
    }else{
        alert("Enter Data....")
    }
 
}


  // upload image
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