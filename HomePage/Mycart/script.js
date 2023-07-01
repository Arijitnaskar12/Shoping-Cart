let emptyContainer=document.getElementById("emptyContainer");
console.log(emptyContainer);
let mainContainer=document.getElementById("mainContainer");
let cartContainer=document.getElementById("cartContainer");
let cards=document.getElementById("cards");
let price=document.getElementById("price");
let lineBreak=document.getElementById("lineBreak");
let totalPrice=document.getElementById("totalPrice");
let products=JSON.parse(localStorage.getItem("products"));
console.log(products);
 let cartItems=JSON.parse(localStorage.getItem("cart"));
 if(cartItems.length==0)
 {
    emptyContainer.style.display="flex";
    // mainContainer.style.display="none";
 }else{
    emptyContainer.style.display="none";
    mainContainer.style.display="block";
 }
//  localStorage.removeItem("cart");
 let temp=[];
 for(let i=0;i<cartItems.length;i++)
 {
    temp.push(products.find((currObj)=>{
        return currObj.id===parseInt(cartItems[i]);
    }));
 }
 function appendUser(arr){
    for(let i=0;i<arr.length;i++)
    {
        let currEntry=arr[i];
        let innerCard=` <div class="img">
        <img src="${currEntry.image}" alt="">
    </div>
    <div class="details">
    
        <div class="description">
            <div class="price">$${currEntry.price}</div>
            <div class="size">${currEntry.size}</div>
        </div>
        <div class="color">Colors:<span class="${currEntry.color}">${currEntry.color}</span> </div>
        <div class="rating">Rating: ${Math.floor(currEntry.rating.rate)}</div>
    
        <div class="btn1">
            <button type="button"  data-delete="${currEntry.id}"id="addtoCart" class="AddtoCart" onclick="removeItem()">Remove Item</button>
        </div>
        
        </div>`;
        let cardContainer=document.createElement("div");
                cardContainer.className="cardContainer";
                cardContainer.innerHTML=innerCard;
                cards.append(cardContainer);
    }
    cartContainer.append(cards);
    mainContainer.append(cartContainer);
 }
 appendUser(temp);

 function removeItem(){
    let ans=event.target.getAttribute("data-delete");
    let removingItem=event.target.parentNode.parentNode.parentNode; 
    // console.log(typeof ans);
    console.log(cartItems);   
    for(let i=0;i<cartItems.length;i++)
    {
        if(parseInt(cartItems[i])===parseInt(ans)){
            cartItems.splice(i,1);
        }
    }
        localStorage.setItem("cart",JSON.stringify(cartItems));
    removingItem.remove();
 }

//  for(let i=0;i<cartItems.length;i++)
//  {
//     let curr=cartItems[i];
//     let product=
//     let innerCard=`<div id=outer>
//  }