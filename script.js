document.addEventListener("DOMContentLoaded", () => {
  // 💌 Contact form interaction
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for your message, gorgeous! 💌");
    form.reset();
  });

  // 🪩 Modal logging (optional – for dev tracking)
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('shown.bs.modal', () => {
      console.log(`Modal opened: ${modal.id}`);
    });
  });
});
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const searchInput = document.getElementById("productSearch");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    const name = card.querySelector(".card-title").textContent.toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});
