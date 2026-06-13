let cart =

JSON.parse(
localStorage.getItem("cart")
) || [];

let total = 0;

const container =
document.getElementById("cart-items");

cart.forEach(item=>{

total += item.price;

container.innerHTML += `

<div class="cart-item">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

`;

});

document.getElementById("total")
.innerText =
"Total : ₹" + total;
