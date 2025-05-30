// Typing animation
new Typed(".typing", {
  strings: [
    "",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
    "Java Developer",
    "Database Developer",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav li a");

// Intersection Observer to update active nav link
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, {
  threshold: 0.3,
});

// Observe each section
sections.forEach((section) => observer.observe(section));

// Manual active class on nav click
navLinks.forEach((link) =>
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  })
);
