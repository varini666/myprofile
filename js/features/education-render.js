import { educationData } from "../data/education.js";

export function renderEducation() {
    const container = document.getElementById("educationContainer");

    container.innerHTML = educationData.map(item => `
    <article class="education-card">
        <h3>${item.title}</h3>
        <p><strong>Institution:</strong> ${item.institution}</p>
        <p><strong>Board:</strong> ${item.board}</p>
        <p><strong>Year:</strong> ${item.year}</p>
        <p><strong>${item.scoreLabel}:</strong> ${item.score}</p>
    </article>
    `).join("");
}