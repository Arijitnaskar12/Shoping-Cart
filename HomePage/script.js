//random size and colors selectors
let colors=["red","blue","white","green","black"];
let sizes=["S","M","L","XL","XXL"];
function randomColor()
{
    return colors[Math.floor(Math.random()*colors.length)];
}
function randomSize()
{
    return sizes[Math.floor(Math.random()*sizes.length)];
}
// fetching data from API
let container=document.querySelector(".main-container");
async function fetching(){
    let response=await fetch("https://fakestoreapi.com/products");
    let products=await response.json();
    for(let i=0;i<products.length;i++)
    {
        products[i].color=randomColor().toUpperCase();
        products[i].size=randomSize().toUpperCase();
    }
    localStorage.setItem("products",JSON.stringify(products));
    console.log(products);
    appendData(products);
}
fetching();
// append user 
let cardsContainer=document.querySelector(".cardsContainer");
let Mens=document.getElementById("mens");
let male=document.getElementById("mensContainer");
let Womens=document.getElementById("womens");
let female=document.getElementById("WomensContainer");
let Jewel=document.getElementById("jewel");
let jewels=document.getElementById("jewelContainer");
// console.log(jewels);
let Electronics=document.getElementById("electron");
let electronicCo=document.getElementById("electronicsContainer");
function appendData(arr){
    cardsContainer.innerHTML="";
    Mens.innerHTML="";
    Womens.innerHTML="";   
    Jewel.innerHTML="";
    Electronics.innerHTML="";
        for(let i=0;i<arr.length;i++)
        {
            let temp=arr[i];
            let innerCard=` <div class="img">
                <img src="${temp.image}" alt="">
            </div>
            <div class="details">
            
                <div class="description">
                    <div class="price">$${temp.price}</div>
                    <div class="size">${temp.size}</div>
                </div>
                <div class="color">Colors:<span class="${temp.color}">${temp.color}</span> </div>
                <div class="rating">Rating: ${Math.floor(temp.rating.rate)}</div>
            
                <div class="btn1">
                    <button type="button" data-custom="${temp.id}" id="addtoCart" class="AddtoCart" onclick="addedTocart()">Add to Cart</button>
                </div>
                </div>`;
                let cardContainer=document.createElement("div");
                cardContainer.className="cardContainer";
                cardContainer.innerHTML=innerCard;
                if(temp.category==="men's clothing")
                {
                    Mens.append(cardContainer);
                    male.append(Mens);
                }
                if(temp.category==="women's clothing")
                {
                    Womens.append(cardContainer);
                    female.append(Womens);
                }
                if(temp.category==="jewelery")
                {
                    Jewel.append(cardContainer);
                    jewels.append(Jewel);
                }
                if(temp.category==="electronics")
                {
                    Electronics.append(cardContainer);
                    electronicCo.append(Electronics);
                }
                cardsContainer.append(male);
                cardsContainer.append(female);
                cardsContainer.append(jewels);
                cardsContainer.append(electronicCo);
        }
               container.append(cardsContainer);
}
// // Apply filter function

let applyFilter=document.getElementById("applyFilter");
let forminput=document.getElementById("inputs");
let rangeSlider=document.getElementById("range");
let P0to25=document.getElementById("0T25");
let P25to50=document.getElementById("25T50");
let P50to100=document.getElementById("50T100");
let P100to10000=document.getElementById("100T10000");
let rangeLimit=document.getElementById("limit");

let products=JSON.parse(localStorage.getItem("products"));
forminput.addEventListener("submit",(event)=>{
    event.preventDefault();
    let filters=[];
    // rangeLimit.innerText=rangeSlider.value;
   filters.push(rangeSlider.value);
   if(P0to25.checked)filters.push(P0to25.value);
   if(P25to50.checked)filters.push(P25to50.value);
   if(P50to100.checked)filters.push(P50to100.value);
   if(P100to10000.checked)filters.push(P100to10000.value);
    let price=filters[filters.length-1].split("to");
    // console.log(filters);
    let currentFilter=[];
   for(let i=0;i<products.length;i++)
   {
    if(products[i].rating.rate<=parseInt(filters[0]))
    {
     if(parseInt(price[0])<=products[i].price && products[i].price<=parseInt(price[1]))
     {
        
         currentFilter.push(products[i]);
    } 
   
    }
   }
   appendData(currentFilter);
});
// searchBar filter()
let searchBar=document.getElementById("searchBar");
searchBar.addEventListener("input",()=>{

    let SearchTemp=[];
    for(let i=0;i<products.length;i++)
    {
        if(products[i].description.includes(searchBar.value))
        {
            SearchTemp.push(products[i]);
        }
    }
    // console.log(SearchTemp);
    appendData(SearchTemp);
});
// category filter
let all=document.getElementById("All");
let mens=document.getElementById("Mens");
let womens=document.getElementById("Womens");
let jewellery=document.getElementById("Jewellery");
let electronics=document.getElementById("Electronics");
all.addEventListener("click",()=>{
    mens.className="categoryBtn";
    all.className="sortcategory";
    womens.className="categoryBtn";
    jewellery.className="categoryBtn";
    electronics.className="categoryBtn";
    male.style.display="block";
    female.style.display="block";
    jewels.style.display="block";
    electronicCo.style.display="block";

});
mens.addEventListener("click",()=>{
    mens.className="sortcategory";
    all.className="categoryBtn";
    womens.className="categoryBtn";
    jewellery.className="categoryBtn";
    electronics.className="categoryBtn";
    male.style.display="block";
    female.style.display="none";
    jewels.style.display="none";
    electronicCo.style.display="none";

});

womens.addEventListener("click",()=>{
    mens.className="categoryBtn";
    all.className="categoryBtn";
    womens.className="sortcategory";
    jewellery.className="categoryBtn";
    electronics.className="categoryBtn";
    male.style.display="none";
    female.style.display="block";
    jewels.style.display="none";
    electronicCo.style.display="none";
});
jewellery.addEventListener("click",()=>{
    mens.className="categoryBtn";
    all.className="categoryBtn";
    womens.className="categoryBtn";
    jewellery.className="sortcategory";
    electronics.className="categoryBtn";
    male.style.display="none";
    female.style.display="none";
    jewels.style.display="block";
    electronicCo.style.display="none";
});
electronics.addEventListener("click",()=>{
    mens.className="categoryBtn";
    all.className="categoryBtn";
    womens.className="categoryBtn";
    jewellery.className="categoryBtn";
    electronics.className="sortcategory";
    male.style.display="none";
    female.style.display="none";
    jewels.style.display="none";
    electronicCo.style.display="block";
});
let cart=[];
 function addedTocart()
 {
    let added=event.target;
    let ans=added.getAttribute("data-custom");
    cart.push(ans);
    localStorage.setItem("cart",JSON.stringify(cart));
    added.innerText="ADDED";
    
 }
 