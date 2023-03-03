document.addEventListener("DOMContentLoaded", () => {
    const url = document.querySelector("a").getAttribute("href");
    window.location.href = (() => url)();
});