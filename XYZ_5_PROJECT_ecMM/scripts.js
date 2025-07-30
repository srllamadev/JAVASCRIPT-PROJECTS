let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");
const buttons = document.querySelectorAll("button");
const cards = document.querySelectorAll(".card");
const filter = document.getElementById("categoryFilter");

// Agregar al carrito
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});

// Filtrar por categoría
filter.addEventListener("change", () => {
  const selected = filter.value;
  cards.forEach(card => {
    const category = card.getAttribute("data-category");
    card.style.display = (selected === "all" || selected === category) ? "block" : "none";
  });
});
