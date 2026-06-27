const container = document.getElementById("productContainer");

function displayProducts(productList){

container.innerHTML +="";
productList.forEach(product => {
    container.innerHTML +=`

<div class="card">

<span class="discount">
${Math.round((1-product.price/product.oldPrice)*100)}% OFF
</span>

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="rating">
⭐ ${product.rating}
</p>

<p>

<span class="newPrice">
₹${product.price}
</span>

<span class="oldPrice">
₹${product.oldPrice}
</span>

</p>

<button onclick="addToCart(${product.id})">
🛒 Add To Cart
</button>

</div>

`;
});


}
displayProducts(products);
function searchproducts(){

}
function addToCart(id) {
    
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {

    const product = products.find(item => item.id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");

   

}

