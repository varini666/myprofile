import { projectsData } from "../data/projects.js";
import { renderProjects } from "./project-render.js";

export function initProjectSearch() {
    const search = document.getElementById("projectSearch");
    search.addEventListener("input", () => {
    const q = search.value.toLowerCase();
    const filtered = projectsData.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.join(" ").toLowerCase().includes(q)
    );
    renderProjects(filtered);
    });
}