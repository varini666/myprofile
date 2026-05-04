export function initThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    function applyTheme(theme) {
        root.classList.toggle("light", theme === "light");
        themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const isLight = root.classList.contains("light");
        applyTheme(isLight ? "dark" : "light");
    });
}