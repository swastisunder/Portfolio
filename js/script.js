new Typed(".typing", {
  strings: [
    "Full-Stack Developer",
    "React Developer",
    "MERN Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav li a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((section) => observer.observe(section));

navLinks.forEach((link) =>
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  })
);
