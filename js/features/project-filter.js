import { projectsData } from "../data/projects.js";
import { renderProjects } from "./project-render.js";

export function initProjectFilter() {
    const filter = document.getElementById("projectFilter");
    filter.addEventListener("change", () => {
    const value = filter.value;
    const filtered = value === "all" ? projectsData : projectsData.filter(p => p.category === value);
    renderProjects(filtered);
    });
}