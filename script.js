window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

let navToggleBtn = document.querySelector(".fa-bars");
navToggleBtn.addEventListener("click", function () {
  let toggleList = document.querySelector(".sidebar");
  toggleList.classList.toggle("toggled-sidebar");
});

window.addEventListener("scroll", function () {
  let sidebar = document.querySelector(".toggle-sidebar");
  sidebar.classList.toggle("sticky", window.scrollY > 0);
});
