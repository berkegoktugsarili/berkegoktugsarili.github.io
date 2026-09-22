// Theme is set before first paint by an inline script in <head> (no-FOUC).
// This file handles the toggle button, mobile menu and scroll reveals.
document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;

  var themeBtn = document.getElementById("themeBtn");
  function paintBtn() {
    if (themeBtn) themeBtn.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
  }
  paintBtn();
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      paintBtn();
    });
  }

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
