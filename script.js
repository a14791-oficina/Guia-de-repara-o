const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const preloader = document.getElementById("preloader");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    navLinks?.classList.remove("open");
  });
});

const guideTabs = document.querySelectorAll(".guide-tab");
const guidePages = document.querySelectorAll(".guide-page");

if (guideTabs.length && guidePages.length) {
  guideTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetGuide = tab.getAttribute("data-guide");
      if (!targetGuide) return;

      guideTabs.forEach((item) => item.classList.remove("active"));
      guidePages.forEach((page) => page.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(targetGuide)?.classList.add("active");
    });
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader?.classList.add("hide");
  }, 1500);
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle("open");
  });
});