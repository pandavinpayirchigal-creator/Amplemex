let products = [];

fetch("data/products.json")

.then(res=>res.json())

.then(data=>{

products=data;

displayProducts(products);

});

function displayProducts(items){

const container =
document.getElementById("products");

container.innerHTML="";

items.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<div class="product-content">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="price">
₹${product.price}
</div>

<button
class="btn-cart"
onclick='addToCart(${JSON.stringify(product)})'>

Add To Cart

</button>

<br><br>

<a
href="product.html?id=${product.id}"
class="btn">

View Details

</a>

</div>

</div>

`;

});

}

function searchProducts(){

let value =
document
.getElementById("search")
.value
.toLowerCase();

let filtered = products.filter(p=>

p.name.toLowerCase().includes(value)

);

displayProducts(filtered);

}
