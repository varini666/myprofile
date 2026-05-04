import { skillsData } from "../data/skills.js";

export function renderSkills() {
    const container = document.getElementById("skillsContainer");
    container.innerHTML = skillsData.map(skill => `
    <article class="skill-card">
        <div class="skill-tag">${skill.name}</div>
        <p class="skill-desc">${skill.description}</p>
    </article>
    `).join("");
}