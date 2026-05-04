import { renderProjects } from "./features/project-render.js";
import { renderSkills } from "./features/skills-render.js";
import { renderEducation } from "./features/education-render.js";
import { initProjectFilter } from "./features/project-filter.js";
import { initProjectSearch } from "./features/project-search.js";
import { initModal } from "./features/modal.js";
import { initContactValidation } from "./features/contact-validation.js";
import { initBackToTop } from "./features/BackToTop.js";
import { initScrollProgress } from "./features/scroll-progress.js";
import { renderDeveloperStats } from "./features/developer-stats.js";
import { initThemeToggle } from "./features/theme-toggle.js";


window.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderSkills();
    renderDeveloperStats();
    initProjectFilter();
    initProjectSearch();
    initModal();
    initContactValidation();
    initBackToTop();
    initScrollProgress();
    initThemeToggle();
    renderEducation();

    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const themeToggle = document.getElementById("themeToggle");

    navToggle.addEventListener("click", () => navMenu.classList.toggle("active"));
    themeToggle.addEventListener("click", () => document.body.classList.toggle("light"));
});