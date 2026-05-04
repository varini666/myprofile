import { projectsData } from "../data/projects.js";

export function renderProjects(list = projectsData) {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = list.map(project => `
    <article class="project-card">
        <div class="project-meta">
        <span class="badge ${project.status.toLowerCase()}">${project.status}</span>
        <span class="muted">${project.category || "Project"}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="muted">${project.description}</p>
        <ul class="tech-list">
        ${project.technologies.map(tech => `<li>${tech}</li>`).join("")}
        </ul>
        <div class="project-actions">
                
        </div>
    </article>
    `).join("");
}

//<div class="project-actions">
// <a class="btn btn-primary" href="${project.liveDemo}" target="_blank" rel="noreferrer">Live Demo</a>
//<a class="btn btn-outline" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a> 