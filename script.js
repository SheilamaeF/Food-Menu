// script.js
const menuItems = [
  { id: 1, name: "Burger", price: 10.99 },
  { id: 2, name: "Fries", price: 4.99 },
  { id: 3, name: "Soda", price: 2.99 },
  // Add more menu items here
];

const menuList = document.getElementById("menu");
const cartList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
let cart = [];

menuItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.className = "menu-item";
  listItem.innerHTML = `
    <span>${item.name} - $${item.price}</span>
    <button data-id="${item.id}">Add to Cart</button>
  `;
  menuList.appendChild(listItem);
});

menuList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const itemId = event.target.getAttribute("data-id");
    const item = menuItems.find((item) => item.id === parseInt(itemId));
    if (item) {
      cart.push(item);
      updateCart();
    }
  }
});

function updateCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(cartItem);
  });
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

updateCart();
