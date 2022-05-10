const faBars = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".sidebar");

faBars.addEventListener("click", () => {
  sideBar.classList.toggle("hide");
});
