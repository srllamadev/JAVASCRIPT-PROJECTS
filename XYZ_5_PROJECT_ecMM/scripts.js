let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");
const filter = document.getElementById("categoryFilter");
const cards = document.querySelectorAll(".card");

let cart = [];

// Función para renderizar el carrito
function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
  cartDisplay.textContent = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Eliminar un producto
window.removeItem = function (index) {
  cart.splice(index, 1);
  renderCart();
}

// Agregar al carrito
document.querySelectorAll(".card").forEach(card => {
  const name = card.querySelector("h2").textContent;
  const price = parseFloat(card.querySelector("p").textContent.replace("$", ""));

  card.querySelector("button").addEventListener("click", () => {
    cart.push({ name, price });
    renderCart();
  });
});

// Mostrar carrito al hacer clic en el ícono
document.querySelector(".cart").addEventListener("click", () => {
  cartModal.classList.toggle("hidden");
});

// Cerrar carrito
closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

// Filtro por categoría
filter.addEventListener("change", () => {
  const selected = filter.value;
  cards.forEach(card => {
    const category = card.getAttribute("data-category");
    card.style.display = (selected === "all" || selected === category) ? "block" : "none";
  });
});

// Restaurar desde localStorage
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("cart")) || [];
  cart = saved;
  renderCart();
});
