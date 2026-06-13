function placeOrder(){

let cart =

JSON.parse(
localStorage.getItem("cart")
) || [];

let total = 0;

let orderText =
"*AMPLEMEN ORDER*%0A%0A";

cart.forEach(item=>{

total += item.price;

orderText +=

`${item.name}
- ₹${item.price}%0A`;

});

orderText +=
`%0ATotal : ₹${total}`;

window.open(

`https://wa.me/919999999999?text=${orderText}`

);

}
