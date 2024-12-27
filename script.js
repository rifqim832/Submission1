const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Tambahkan event listener untuk tombol toggle
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // Toggle class 'hidden' pada menu
});
