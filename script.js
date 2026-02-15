function filterProducts(category){

let cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{
if(category==="all"){
card.style.display="block";
}
else{
if(card.dataset.category===category){
card.style.display="block";
}else{
card.style.display="none";
}
}
});

}

function searchProduct(){

let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{
let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}
});

}
