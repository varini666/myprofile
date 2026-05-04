export function initScrollProgress() {
    const progress = document.getElementById("scrollProgress");

    window.addEventListener("scroll", () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? (window.scrollY / height) * 100 : 0;
    progress.style.width = `${percent}%`;
    });
}