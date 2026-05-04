import { projectsData } from "../data/projects.js";

export function initModal() {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.getElementById("modalClose");

    document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-project-id]");
    if (!btn) return;

    const project = projectsData.find(p => p.id === Number(btn.dataset.projectId));
    if (!project) return;

    modalBody.innerHTML = `
        <h2>${project.name}</h2>
        <p class="muted" style="margin:10px 0">${project.description}</p>
        <p><strong>Status:</strong> ${project.status}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
    `;
    modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
    });
}