console.log("Ambreen Saleem Portfolio Loaded Successfully");
const navLinks = document.querySelectorAll(".navbar ul a");
const sections = document.querySelectorAll("main section[id]");
function updateActiveLink() {
  let currentSection = sections[0];
  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top <= 150) {
      currentSection = section;
    }
  });
  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === "#" + currentSection.id) {
      link.classList.add("active");
    }
  });
}
updateActiveLink();
window.addEventListener("scroll", function () {
  updateActiveLink();
});

