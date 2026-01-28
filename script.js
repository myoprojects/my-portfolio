// Typing Effect
const text = "Full Stack Developer";
let index = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Scroll Reveal
const hiddenElements = document.querySelectorAll(".project-card, .skills");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
