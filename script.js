function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to check if an element is in the viewport
function isElementInViewport(elem) {
  var rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to trigger animations when skills section is in view
function animateSkillsIfVisible() {
  var skillsSection = document.getElementById("skills");
  var skillBars = document.querySelectorAll(".skills");

  if (isElementInViewport(skillsSection) || window.innerWidth <= 768) {
    skillBars.forEach(function (bar) {
      bar.style.animation = bar.dataset.animation;
    });
  }
}

// Add a scroll event listener to trigger animations
window.addEventListener("scroll", animateSkillsIfVisible);

// Initially trigger the animations if skills section is in view on page load
window.addEventListener("load", animateSkillsIfVisible);

// Check the viewport width on resize and trigger animations accordingly
window.addEventListener("resize", animateSkillsIfVisible);
