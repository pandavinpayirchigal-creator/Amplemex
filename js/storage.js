let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem(
"cart",
JSON.stringify(cart)
);
}

function addToCart(product){

cart.push(product);

saveCart();

updateCartCount();

alert("Added to Cart");
}

function updateCartCount(){

const count =
document.getElementById("cart-count");

if(count){
count.innerText = cart.length;
}
}

updateCartCount();
