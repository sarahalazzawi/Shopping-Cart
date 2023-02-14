
//content the menu
let cartProductDivDom =document.querySelector(".cartdetatails div");
let badgeDom =document.querySelector(".badge");
let shoopingCartIcon=document.querySelector(".shoopingcart");
let cartProuductMenu=document.querySelector(".cartdetatails");

// checked in localstorage
//Checks if there are elements in localstorge,
// converts them to an object, if not, puts them in an empty array
// (function CartMenuData(){})();

let addedItem = localStorage.getItem("productsinCart")
?JSON.parse(localStorage.getItem("productsinCart"))
 :[];

 //If you refresh the page, the contents of the basket remain, 
 //and when you click on it, it appears
 if(addedItem){
    addedItem.map(item => {
         cartProductDivDom.innerHTML +=`<p>${item.title} <span class="item-qty"><i class="fas fa-arrow-down "></i>${item.qty}<i class="fas fa-arrow-up"></i></span></p>`;
    });
    badgeDom.style.display="block";
    badgeDom.innerHTML = addedItem.length;
 }


//Open Cart Menu
shoopingCartIcon.addEventListener("click",openCartMenu);


//Open Cart Menu
function openCartMenu(){
    //in same  event oen and close
        if(cartProductDivDom.innerHTML != ""){
            if( cartProuductMenu.style.display =="block"){
                cartProuductMenu.style.display="none"
            }else{
                 cartProuductMenu.style.display="block";
           
            }
           
                
        }
        
    };